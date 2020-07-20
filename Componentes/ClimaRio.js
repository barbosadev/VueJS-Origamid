export default {
  data() {
    return {
      dadosTempo: {}
    }
  },
  template: `<button @click="">Somar: {{}}</button>`,
  methods: {
    buscarDadosTempo() {
      fetch('https://www.metaweather.com/api/location/455825/')
        .then(res => res.json())
        .then(res => {
          this.dadosTempo = res;
        })
    }
  },
  mounted() {
    this.buscarDadosTempo();
  }
};