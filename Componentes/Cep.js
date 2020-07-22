export default {
  data() {
    return {
      dadosCep: {}
    }
  },
  template:
    `<div>
      <table border='1'>
        <tr v-for='(dado, chave) in dadosCep'>
          <td>{{chave}}</td>
          <td>{{dado}}</td>
        </tr>
      </table>
    </div>`,
  methods: {
    buscarDadosCep() {
      fetch('https://viacep.com.br/ws/01001000/json/')
        .then(res => res.json())
        .then(res => {
          this.dadosCep = res;
        })
    }
  },
  mounted() {
    this.buscarDadosCep();
  }
};