<template>
  <div id="app">
    <nav>
      <ul>
        <li><a @click="componentAberto = 'Sobre'">Sobre</a></li>
        <li><a @click="componentAberto = 'Servicos'">Servicos</a></li>
        <li><a @click="modalAtivo = !modalAtivo">Contato</a></li>
      </ul>
    </nav>
    <component :is="componentAberto"></component>
    <transition appear name="modal">
      <div v-if="modalAtivo" class="modal">
        <span class="fechar-modal" @click="modalAtivo = !modalAtivo"> X </span
        ><br />
        <h1>Contato</h1>
      </div>
    </transition>
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
      modalAtivo: false,
    };
  },
};
</script>

<style>
a {
  cursor: pointer;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-to {
  transition: opacity 0.3s;
}

.modal {
  background-color: #ccc;
  border-style: solid;
  border-color: #252525;
  max-width: 400px;
  margin: 0 auto;
}
.modal > h1 {
  text-align: center;
}
.fechar-modal {
  background-color: #ff7070;
  padding: 10px;
  float: right;
  cursor: pointer;
}
</style>