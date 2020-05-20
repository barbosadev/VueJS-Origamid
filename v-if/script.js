const vm = new Vue({
  el: "#app",
  data: {
    estoque: 7,
    carrinho: 0
  },
  methods: {
    adicionar() {
      this.carrinho++;
    },
    remover() {
      this.carrinho--;
    }
  }
});