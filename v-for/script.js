const vm = new Vue({
  el: "#app",
  data: {
    skils: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Node.Js'],
    api: "https://viacep.com.br/ws/04538133/json/",
    dadosCep: {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: ''
    }
  },
  methods: {
    buscarCep() {
      fetch(this.api)
        .then(r => r.json())
        .then(json => {
          this.dadosCep.cep = json.cep;
          this.dadosCep.logradouro = json.logradouro;
          this.dadosCep.complemento = json.complemento;
          this.dadosCep.bairro = json.bairro;
          this.dadosCep.localidade = json.localidade;
          this.dadosCep.uf = json.uf;
        });
    }
  }
});