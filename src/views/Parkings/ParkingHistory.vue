<script setup>
import { useParking } from "@/stores/parking";

const store = useParking();

store.getStoppedParkings();
</script>

<template>
  <div class="container">
    <h1 class="title">Parking history</h1>

    <div class="parking-list">
      <div
        v-for="parking in store.stoppedParkings"
        :key="parking.id"
        class="parking-item"
      >
        <div class="plate">{{ parking.vehicle.plate_number }}</div>
        <div class="zone">
          {{ parking.zone.name }}
          ({{ (parking.zone.price_per_hour / 100).toFixed(2) }} &euro;/h)
        </div>
        <div>
          <div class="label">from</div>
          <span class="mono">{{ parking.start_time }}</span>
        </div>
        <div>
          <div class="label">to</div>
          <span class="mono">{{ parking.stop_time }}</span>
        </div>
        <div class="price">
          <span class="amount ml-auto">
            {{ (parking.total_price / 100).toFixed(2) }}
          </span>
          <span class="currency">&nbsp;&euro;</span>
        </div>
        <button type="button" class="btn btn-secondary">
          view details
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
  max-width: 24rem;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
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
}

.ml-auto {
  margin-left: auto;
}

.currency {
  padding-top: 0.125rem;
}

.btn {
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
}

.btn-secondary {
  background-color: #6b7280; /* Gray */
  color: white;
}
</style>
