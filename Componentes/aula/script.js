const ComponenteGlobal = {
  template: `<p>Este é um componente global</p>`
};
Vue.component("ComponenteGlobal", ComponenteGlobal);

const vm = new Vue({
  el: "#app",
  components: {
    ComponenteLocal: {
      name: "ComponenteLocal",
      template: `<p>Este é um componente local</p>`
    }
  }
});
