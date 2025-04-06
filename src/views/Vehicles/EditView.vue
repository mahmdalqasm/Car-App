<script setup>
import { watchEffect, onBeforeUnmount } from 'vue'
import { useVehicle } from '@/stores/vehicle'
import { useRoute } from 'vue-router'

const store = useVehicle()
const route = useRoute()

onBeforeUnmount(store.resetForm)

watchEffect(async () => {
  store.getVehicle({ id: route.params.id })
})
</script>

<template>
  <form @submit.prevent="store.updateVehicle({ id: route.params.id })" novalidate>
    <div class="form-wrapper">
      <h1 class="form-title">Edit vehicle</h1>

      <div class="form-group">
        <label for="plate_number" class="required">License plate</label>
        <input
          v-model="store.form.plate_number"
          id="plate_number"
          name="plate_number"
          type="text"
          class="form-input plate"
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="plate_number" />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          v-model="store.form.description"
          id="description"
          name="description"
          type="text"
          class="form-input"
          placeholder="My Ferrari, Big truck, Rental"
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="description" />
      </div>

      <div class="form-separator"></div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary full-width" :disabled="store.loading">
          <IconSpinner class="animate-spin" v-show="store.loading" />
          Update vehicle
        </button>
        <RouterLink :to="{ name: 'vehicles.index' }" class="btn btn-secondary"> Cancel </RouterLink>
      </div>
    </div>
  </form>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
}

.form-title {
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

.form-input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  font-size: 1rem;
}

.plate {
  font-weight: bold;
}

.form-separator {
  border-top: 1px solid #ccc;
  margin: 1.5rem 0;
}

.form-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 0.375rem;
  cursor: pointer;
}

.btn.primary {
  background-color: #2563eb;
  color: white;
}

.btn.secondary {
  background-color: #e5e7eb;
  color: #111827;
}

.btn.primary:disabled {
  background-color: #93c5fd;
}

.btn.secondary:disabled {
  background-color: #d1d5db;
}

.full-width {
  width: 100%;
}

.required::after {
  content: '*';
  color: red;
}
</style>
