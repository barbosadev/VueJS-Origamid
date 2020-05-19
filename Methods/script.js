const vm = new Vue({
  el: "#app",
  data: {
    total: 0
  },
  methods: {
    incrementar() {
      this.total++;
    },
    diminuir() {
      this.total--;
    }
  }
});

const vm2 = new Vue(
  {
    el: "#app2",
    data: {
      verPreco: false,
      acoes: {},
      url: "https://cloud.iexapis.com/stable/stock/aapl/quote?token=sk_4d0bfcef5e8742baae30a6994e373724"
    },
    methods: {
      alteraVerPreco() {
        this.verPreco = !this.verPreco;
        this.puxarAcoes();
      },
      puxarAcoes() {
        fetch(this.url)
          .then(response => response.json())
          .then(json => {
            this.acoes = json;
          });
      }
    }
  }
);