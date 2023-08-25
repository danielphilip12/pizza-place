<script setup>
import axios from "axios";
import { reactive, onMounted, ref } from "vue";

const order = reactive({
  name: "",
  pizza: 0,
  delivery: false,
  price: 0.0
});

const pizzas = ref([]);

onMounted(() => {
  axios
    .get("http://localhost:3000/pizzas")
    .then((res) => (pizzas.value = res.data));
});

const handlePizzaChange = (e) => {
  order.pizza = parseInt(e.target.value);
  try {
    order.price = pizzas.value[order.pizza - 1].price;
  } catch(err) {
    console.log(err);
    order.price = 0.0;
  }


};

const handleNameChange = (e) => {
  order.name = e.target.value;
};

const handleDelivery = (e) => {
    order.delivery = !order.delivery
}

const submitForm = (e) => {
  e.preventDefault();
  console.log(order.name);
  console.log(order.pizza);
  console.log(order.delivery);
  console.log(order.price);
};
</script>

<template>
  <div>
    <form @submit="submitForm">
      <div class="mb-3">
        <label for="customerName" class="form-label">Name: </label>
        <input
          type="text"
          name="customerName"
          id="customerName"
          class="form-control"
          @change="handleNameChange"
        />
      </div>
      <div class="mb-3">
        <select
          name="pizzaList"
          id="pizzaList"
          class="form-select"
          @change="handlePizzaChange"
        >
          <option selected>Select a Pizza</option>
          <option v-for="pizza in pizzas" :value="pizza.id">
            {{ pizza.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <div class="form-check">
            <input type="checkbox" name="delivery" id="delivery" class="form-check-input" @change="handleDelivery">
            <label for="delivery" class="form-check-label">Delivery</label>
        </div>
      </div>
      <p v-if="order.pizza > 0">Total: {{ pizzas[order.pizza - 1].price }}</p>
      <button :disabled="order.price <= 0" @click="submitForm">Submit</button>
    </form>
  </div>
</template>

<style lang="css" scoped></style>
