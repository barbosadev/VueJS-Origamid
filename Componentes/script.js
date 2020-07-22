import Cep from './Cep.js';
import ValorApple from './ValorApple.js';

Vue.component("Cep", Cep);

const vm = new Vue({
  el: "#app",
  components: {
    ValorApple
  }
});

