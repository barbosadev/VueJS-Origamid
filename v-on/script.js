const vm = new Vue({
  el: "#app",
  data: {
    companyName: '',
    latestPrice: '',
    marketCap: ''
  },
  methods: {
    buscarValores(event) {
      fetch(event.currentTarget.href)
        .then(response => response.json())
        .then(json => {
          this.companyName = json[0].symbol;
          this.latestPrice = json[0].lastSalePrice;
          this.marketCap = json[0].symbol;
        });
    }
  }
});