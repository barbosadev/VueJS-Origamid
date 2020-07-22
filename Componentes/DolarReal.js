export default {
  data() {
    return {
      dadosDolar: {},
      dolEmReais: "0"
    }
  },
  name: 'DolarReal',
  template:
    `<div>
      $ 1 = R$ {{dolEmReais}}
    </div>`,
  methods: {
    buscaValorDolar() {
      fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(res => res.json())
        .then(res => {
          this.dadosDolar = res;
          this.dolEmReais = this.dadosDolar.rates.BRL;
        });
    }
  },
  mounted() {
    this.buscaValorDolar();
  }
}