<script setup>
import { onBeforeUnmount } from "vue";
import { useVehicle } from "@/stores/vehicle";

const store = useVehicle();

onBeforeUnmount(store.resetForm);
</script>

<template>
  <form @submit.prevent="store.storeVehicle" class="form-container" novalidate>
    <div class="form-wrapper">
      <h1 class="form-title">Add vehicle</h1>

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
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="store.loading"
        >
          <IconSpinner class="spinner" v-show="store.loading" />
          Save vehicle
        </button>

        <RouterLink :to="{ name: 'vehicles.index' }" class="btn btn-secondary">
          Cancel
        </RouterLink>
      </div>
    </div>
  </form>
</template>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}

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
  padding: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 0.25rem;
}

.plate {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.form-separator {
  border-top: 1px solid #ccc;
  height: 1px;
  margin: 1.5rem 0;
}

.form-actions {
  display: flex;
  gap: 0.5rem;
}

.spinner {
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.375rem;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
  flex: 1;
}

.btn-secondary {
  background-color: #e5e7eb;
  color: #111827;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
