import { createApp, reactive, ref } from "./src/vue/vue.esm-browser.min.js";
import productList from "./src/assets/products.js";

const app = createApp({
  setup() {
    const products = reactive(productList);
    const tempProduct = ref({});

    function findProduct(id) {
      tempProduct.value = products.find((product) => product.id === id);
    }

    return { products, tempProduct, findProduct };
  },
});

app.mount("#app");
