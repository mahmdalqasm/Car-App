<script setup>
import { onMounted } from "vue";
import { useVehicle } from "@/stores/vehicle";

const store = useVehicle();

onMounted(store.getVehicles);
</script>

<template>
  <div class="vehicle-container">
    <h1 class="title">My vehicles</h1>

    <RouterLink
      :to="{ name: 'vehicles.create' }"
      class="add-vehicle-btn"
    >
      Add vehicle
    </RouterLink>

    <div class="divider"></div>

    <div class="vehicles-list">
      <div
        v-for="vehicle in store.vehicles"
        :key="vehicle.id"
        class="vehicle-item"
      >
        <div class="vehicle-info">
          <div class="plate-number">
            {{ vehicle.plate_number }}
          </div>
          <div class="description">
            {{ vehicle.description }}
          </div>
        </div>
        <div class="actions">
          <RouterLink
            :to="{ name: 'vehicles.edit', params: { id: vehicle.id } }"
            class="edit-btn"
          >
            Edit
          </RouterLink>
          <button
            type="button"
            @click="store.deleteVehicle(vehicle)"
            class="delete-btn"
          >
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vehicle-container {
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

.add-vehicle-btn {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem;
  text-align: center;
  text-decoration: none;
  border-radius: 0.375rem;
  display: block;
  margin-bottom: 1.5rem;
}

.add-vehicle-btn:hover {
  background-color: #2563eb;
}

.divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 1.5rem 0;
}

.vehicles-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.vehicle-item {
  display: flex;
  justify-content: space-between;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.375rem;
}

.vehicle-info {
  display: flex;
  flex-grow: 1;
  align-items: center;
}

.plate-number {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
}

.description {
  font-size: 0.875rem;
  color: #4b5563;
  padding-left: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.edit-btn {
  background-color: #6b7280;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.delete-btn {
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #f87171;
}
</style>