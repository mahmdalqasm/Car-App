<script setup>
import { onBeforeUnmount } from 'vue'
import { useParking } from '@/stores/parking'

const store = useParking()
store.getActiveParkings()

function poll(callback) {
  return setInterval(callback, 3000)
}

const interval = poll(store.getActiveParkings)
onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <div class="container">
    <h1 class="title">Active parkings</h1>

    <RouterLink :to="{ name: 'parkings.create' }" class="btn btn-primary full-width">
      Order parking
    </RouterLink>

    <div class="divider"></div>

    <div class="parking-list">
      <div v-for="parking in store.parkings" :key="parking.id" class="parking-item">
        <div class="plate">{{ parking.vehicle.plate_number }}</div>
        <div class="description">{{ parking.vehicle.description }}</div>
        <div class="zone">
          {{ parking.zone.name }}
          ({{ (parking.zone.price_per_hour / 100).toFixed(2) }} &euro;/h)
        </div>
        <div>
          <div class="label">from</div>
          <span class="mono">{{ parking.start_time }}</span>
        </div>
        <div class="price">
          <span class="amount">{{ (parking.total_price / 100).toFixed(2) }}</span>
          <span class="currency">&nbsp;&euro;</span>
        </div>
        <button type="button" @click="store.stopParking(parking)" class="btn btn-danger stop-btn">
          stop
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 24rem; /* md:w-96 */
}

.title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.full-width {
  width: 100%;
}

.divider {
  border-top: 1px solid #ccc;
  height: 1px;
  margin: 1.5rem 0;
}

.parking-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.parking-item {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid #ccc;
  gap: 0.25rem;
}

.plate {
  font-size: 1.5rem;
}

.description {
  font-size: 0.875rem;
  color: #4b5563;
}

.zone {
  background-color: #f3f4f6;
  padding: 0.5rem;
}

.label {
  font-weight: bold;
  text-transform: uppercase;
}

.mono {
  font-family: monospace;
}

.price {
  display: flex;
  align-items: flex-start;
}

.amount {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
}

.currency {
  padding-top: 0.125rem;
}

.btn {
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-danger {
  background-color: #ef4444;
  color: white;
}

.stop-btn {
  text-transform: uppercase;
  margin-left: auto;
}
</style>
