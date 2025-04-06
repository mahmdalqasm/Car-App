<script setup>
import { onBeforeUnmount } from 'vue'
import { useVehicle } from '@/stores/vehicle'
import { useZone } from '@/stores/zone'
import { useParking } from '@/stores/parking'

const vehicleStore = useVehicle()
const zoneStore = useZone()
const parkingStore = useParking()

vehicleStore.getVehicles().then((response) => {
  if (response.length > 0) {
    parkingStore.form.vehicle_id = response[0].id
  }
})

zoneStore.getZones().then((response) => {
  if (response.length > 0) {
    parkingStore.form.zone_id = response[0].id
  }
})

onBeforeUnmount(parkingStore.resetForm)
</script>

<template>
  <form @submit.prevent="parkingStore.startParking" novalidate>
    <div class="parking-container">
      <h1 class="title">Order parking</h1>

      <div class="form-group">
        <label for="vehicle_id" class="required">Vehicle</label>
        <select
          v-model="parkingStore.form.vehicle_id"
          name="vehicle_id"
          id="vehicle_id"
          class="form-select"
          :disabled="parkingStore.loading"
        >
          <option v-for="vehicle in vehicleStore.vehicles" :value="vehicle.id" :key="vehicle.id">
            {{ vehicle.plate_number.toUpperCase() }}
            <span v-if="vehicle.description">({{ vehicle.description }})</span>
          </option>
        </select>
        <ValidationError :errors="parkingStore.errors" field="vehicle_id" />
      </div>

      <div class="form-group">
        <label for="zone_id" class="required">Zone</label>
        <select
          v-model="parkingStore.form.zone_id"
          name="zone_id"
          id="zone_id"
          class="form-select"
          :disabled="parkingStore.loading"
        >
          <option v-for="zone in zoneStore.zones" :value="zone.id" :key="zone.id">
            {{ zone.name }} ({{ (zone.price_per_hour / 100).toFixed(2) }} &euro;/h)
          </option>
        </select>
        <ValidationError :errors="parkingStore.errors" field="zone_id" />
        <ValidationError :errors="parkingStore.errors" field="general" />
      </div>

      <div class="divider"></div>

      <div class="button-group">
        <button type="submit" class="submit-btn" :disabled="parkingStore.loading">
          <IconSpinner class="spinner" v-show="parkingStore.loading" />
          Start parking
        </button>
        <RouterLink :to="{ name: 'parkings.active' }" v-slot="{ navigate }">
          <button @click="navigate" :disabled="parkingStore.loading" class="cancel-btn">
            Cancel
          </button>
        </RouterLink>
      </div>
    </div>
  </form>
</template>

<style scoped>
.parking-container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.required::after {
  content: '*';
  color: red;
}

.form-select {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #4b5563;
}

.form-select:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 1.5rem 0;
}

.button-group {
  display: flex;
  gap: 1rem;
}

.submit-btn {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn:disabled {
  background-color: #a5b4fc;
}

.spinner {
  margin-right: 0.5rem;
  animation: spin 1s linear infinite;
}

.cancel-btn {
  background-color: #e5e7eb;
  color: #333;
  padding: 0.75rem;
  font-size: 1rem;
  text-align: center;
  border-radius: 0.375rem;
  width: 100%;
  border: none;
}

.cancel-btn:disabled {
  background-color: #d1d5db;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
