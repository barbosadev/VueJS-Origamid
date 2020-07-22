import DolarReal from './DolarReal.js';

export default {
  name: 'ValorApple',
  template:
    `<div>
      <dolar-real></dolar-real>
      Valor ação Apple: R$ {{dadosApple.latestPrice}}
    </div>`,
  data() {
    return {
      dadosApple: {}
    }
  },
  methods: {
    buscaValorApple() {
      fetch('https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_fe617e9b65494d0c84ecb9501e1e3daa')
        .then(res => res.json())
        .then(res => {
          this.dadosApple = res;
        });
    }
  },
  mounted() {
    this.buscaValorApple();
  },
  components: {
    DolarReal
  }
}