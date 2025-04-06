<script setup>
import { onMounted } from 'vue'
import { useVehicle } from '@/stores/vehicle'

const store = useVehicle()

onMounted(store.getVehicles)
</script>
<template>
  <div class="vehicles-wrapper">
    <h1 class="page-title">My vehicles</h1>

    <RouterLink :to="{ name: 'vehicles.create' }" class="btn btn-primary full-width">
      Add vehicle
    </RouterLink>

    <div class="form-separator"></div>

    <div class="vehicle-list">
      <div v-for="vehicle in store.vehicles" :key="vehicle.id" class="vehicle-card">
        <div class="vehicle-info">
          <div class="vehicle-plate">
            {{ vehicle.plate_number }}
          </div>
          <div class="vehicle-description">
            {{ vehicle.description }}
          </div>
        </div>
        <div class="vehicle-actions">
          <RouterLink
            :to="{ name: 'vehicles.edit', params: { id: vehicle.id } }"
            class="btn btn-secondary small"
          >
            Edit
          </RouterLink>
          <button type="button" class="btn btn-danger small">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vehicles-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
}

.page-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.full-width {
  width: 100%;
}

.form-separator {
  border-top: 1px solid #ccc;
  height: 1px;
  margin: 1.5rem 0;
}

.vehicle-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.vehicle-card {
  background-color: #f3f4f6;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.vehicle-info {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
}

.vehicle-plate {
  font-size: 1.25rem;
  font-weight: bold;
  white-space: nowrap;
}

.vehicle-description {
  padding-left: 0.5rem;
  color: #6b7280;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vehicle-actions {
  display: flex;
  gap: 0.25rem;
}

.btn {
  padding: 0.4rem 0.75rem;
  border: none;
  font-weight: bold;
  border-radius: 0.375rem;
  cursor: pointer;
}

.btn.small {
  font-size: 0.75rem;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: #111827;
}

.btn-danger {
  background-color: #dc2626;
  color: white;
}

.btn-danger:hover {
  background-color: #ef4444;
}
</style>
