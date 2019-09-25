import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter('striphtml', function (value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});

Vue.filter('toUppercase', (value) => {
  return value.toUpperCase();
});

// Vue.filter('snippet', (value) => {
//   return value.slice(1,1000)+'...';
// })

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
