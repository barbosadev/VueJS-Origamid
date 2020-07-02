export default {
  data() {
    return {
      total: 0
    }
  },
  template: `<button @click="total++">Somar: {{total}}</button>`
};