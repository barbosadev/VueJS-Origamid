<template>
  <div id="app">
    <nav>
      <ul>
        <li><a @click="componentAberto = 'Sobre'">Sobre</a></li>
        <li><a @click="componentAberto = 'Servicos'">Servicos</a></li>
        <li><a @click="componentAberto = 'Contato'">Contato</a></li>
      </ul>
    </nav>
    <component :is="componentAberto"></component>
  </div>
</template>

<script>
//import Servicos from "./components/Servicos";
//import Sobre from "./components/Sobre";
import Contato from "./components/Contato";

export default {
  name: "App",
  components: {
    Servicos: () => import("./components/Servicos"),
    Sobre: () => import("./components/Sobre"),
    Contato,
  },
  data() {
    return {
      componentAberto: "Sobre",
    };
  },
};
</script>

<style>
a {
  cursor: pointer;
}
</style>
<!-- 
  Crie 3 componentes:

  1: Componente falando sobre a empresa
  2: Componente com os serviços da empresa
  3: Componente com um formulário de contato

  Crie um menu, que ao clique ele mude os componentes
  acima de forma dinâmica. Não destrua o componente
 -->