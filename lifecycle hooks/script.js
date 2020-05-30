const vm = new Vue({
  el: "#app",
  data: {
    dadosGithub: {},
    contador: 0
  },
  created() {
    fetch('https://api.github.com/users/barbosadev')
      .then(r => r.json())
      .then(r => {
        this.dadosGithub = r;
      });
  },
  updated() {
    document.title = this.contador;
  }
});