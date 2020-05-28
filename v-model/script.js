const vm = new Vue({
  el: "#app",
  data: {
    width: 100,
    height: 50,
    fontSize: 14,
    fontFamily: 'Roboto',
    textAlign: 'left',
    background: '#0000FF',
    color: '#f5f5f5',
    borderRadius: 0,
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    informacoesVisiveis: false
  },
  methods: {
    exibirInformacoes() {
      this.informacoesVisiveis = !this.informacoesVisiveis;
    }
  }
});