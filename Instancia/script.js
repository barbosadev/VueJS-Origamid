// Crie uma tag com o id app e inicie uma instância de Vue

// Faça o HTML abaixo funcionar com Vue
const vm = new Vue(
  {
    el: '#app1',
    data: {
      ferramenta: "Martelo",
    }
  }
);

new Vue(
  {
    el: '#app2',
    data: {
      instrumento: "Violão"
    }
  }
);