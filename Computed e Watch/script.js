const vm = new Vue({
  el: "#app",
  data: {
    nome: "Victor",
    sobrenome: "Barbosa",
    paises: {},
    selecionado: '',
    capital: ''
  },
  methods: {
    buscarPaises() {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(r => r.json())
        .then(r => {
          this.paises = r;
        });
    }
  },
  computed: {
    nomeCompleto() {
      return this.nome + " " + this.sobrenome;
    }
  },
  watch: {
    selecionado(valor) {
      this.capital = this.paises.find((pais) => pais.name === valor);
    }
  }
});