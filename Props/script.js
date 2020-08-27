const ListaAcao = {
  name: "ListaAcao",
  props: ['dados', 'titulo'],
  template: `
    <div>
      <h2>{{titulo}}</h2>
      <ul>
        <li v-for="(dado, chave) in dados">{{chave}}: {{dado}}</li>
      </ul>
    </div>
  `,
};

new Vue({
  el: '#app',
  data: {
    simbolo: '',
    acao: []
  },
  components: {
    ListaAcao
  },
  methods: {
    buscarAcao() {
      fetch(`https://api.iextrading.com/1.0/tops?symbols=${this.simbolo}`)
        .then(r => r.json())
        .then(r => {
          this.acao = r[0];
        });
    }
  }
});