import { createApp } from "./src/vue/vue.esm-browser.min.js";
import products from "./src/assets/products.js";

const app = createApp({
  data() {
    return {
      products: products,
      tempProduct: {},
    };
  },
  methods: {
    findProduct(id) {
      this.tempProduct = this.products.find((product) => product.id === id);
    },
  },
});

app.mount("#app");
