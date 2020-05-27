const vm = new Vue({
  el: "#app",
  data: {
    coluna: false,
    cor: "white"
  },
  methods: {
    geradorDeCor() {
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      this.cor = color;
    }
  }
});