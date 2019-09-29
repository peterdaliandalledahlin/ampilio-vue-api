import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import moment from 'moment'
import ReadMore from 'vue-read-more';
 
Vue.use(ReadMore);

Vue.config.productionTip = false;

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD hh:mm')
  }
});

Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

Vue.filter('toUppercase', (value) => {
  return value.toUpperCase();
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
