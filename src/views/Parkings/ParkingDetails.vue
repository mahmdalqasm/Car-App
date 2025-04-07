<script setup>
import { watchEffect, onBeforeUnmount } from "vue";
import { useParking } from "@/stores/parking";
import { useRoute } from "vue-router";

const store = useParking();
const route = useRoute();

watchEffect(async () => {
  store.getParking({ id: route.params.id });
});

onBeforeUnmount(store.resetParkingDetails);
</script>

<template>
  <div
    class="container"
    v-if="store.parking.id !== undefined"
  >
    <h1 class="title">Parking order details</h1>

    <div class="details-box">
      <div class="section-header">
        parking order #{{ store.parking.id }}
      </div>

      <div class="label">license plate</div>
      <div class="plate">{{ store.parking.vehicle.plate_number }}</div>

      <div class="label">description</div>
      <div>{{ store.parking.vehicle.description }}</div>

      <div class="label">zone</div>
      <div>{{ store.parking.zone.name }}</div>

      <div class="label">price</div>
      <div>
        {{ (store.parking.zone.price_per_hour / 100).toFixed(2) }} &euro; per hour
      </div>

      <div class="label">from</div>
      <div>{{ store.parking.start_time }}</div>

      <div class="label">to</div>
      <div>{{ store.parking.stop_time }}</div>

      <div class="label">total</div>
      <div class="total">
        {{ (store.parking.total_price / 100).toFixed(2) }} &euro;
      </div>
    </div>

    <div class="divider"></div>

    <RouterLink :to="{ name: 'parkings.history' }" class="btn btn-secondary">
      return
    </RouterLink>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 24rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.details-box {
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-family: monospace;
}

.section-header {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.label {
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 0.5rem;
}

.plate {
  font-size: 1.5rem;
}

.total {
  font-size: 1.25rem;
}

.divider {
  border-top: 1px solid #ccc;
  height: 1px;
  margin: 1.5rem 0;
}

.btn {
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #6b7280;
  color: white;
  text-align: center;
  display: inline-block;
}
</style>
