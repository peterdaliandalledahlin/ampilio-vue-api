<template>
<div>
  <div class="form-group text-left">
    <label for="search"><h1 class="display-5 mt-5">Sök Blogginlägg</h1></label>
    <input type="text" v-model="search" class="form-control col-12 col-md-4" id="search" aria-describedby="search" placeholder="Sök Bloggar">
  </div>
  <div class="row mb-5" v-for="blog in filteredBlogs" v-bind:key="blog.id">
    <div class="col-sm-6">
      <div class="card text-left">
        <div class="card-body wrapper">
          <h5 class="card-title">{{blog.title.rendered | toUppercase}}</h5>
          <!-- <p class="card-text small">{{blog.content.rendered | striphtml}}</p> -->
          <p class="card-text small"><read-more  more-str="visa mer" :text="blog.content.rendered | striphtml" link="#" less-str="visa mindre" :max-chars="200"></read-more></p>
          
        </div>
        <div class="card-footer">
          <span class="small">Created:</span>
          <span class="badge badge-info mr-5">{{blog.date | formatDate}}</span>
          <span class="small">Modified:</span>
          <span class="badge badge-success">{{blog.modified | formatDate}}</span>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import http from 'axios';

export default {

  name: "home",
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  mounted () {
    http
      .get('https://ampilio.se/wp-json/wp/v2/posts')
      .then(response => (this.blogs = response.data))
      .catch(error => console.log(error))
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) =>{
        return blog.title.rendered.match(this.search)
      })
    }
  }
}

</script>

<style scoped>

</style>
