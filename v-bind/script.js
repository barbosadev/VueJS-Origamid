const vm = new Vue({
  el: "#app",
  data: {
    urlGoogle: "https://api.iextrading.com/1.0/tops?symbols=GOOGL",
    urlApple: "https://api.iextrading.com/1.0/tops?symbols=AAPL",
    precoGoogl: 0,
    precoApple: 0,
    corGoogle: '',
    corApple: ''
  },
  methods: {
    buscaValores() {
      fetch(this.urlGoogle)
        .then(response => response.json())
        .then(json => {
          this.precoGoogl = json[0].lastSalePrice;
        });
      fetch(this.urlApple)
        .then(response => response.json())
        .then(json => {
          this.precoApple = json[0].lastSalePrice;
        });
      if (this.precoApple > this.precoGoogl) {
        this.corApple = 'verde';
        this.corGoogle = 'vermelho';
      }
      else {
        this.corApple = 'vermelho';
        this.corGoogle = 'verde';
      }
    }
  }
});