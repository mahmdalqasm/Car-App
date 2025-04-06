<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useProfile } from "@/stores/profile";

const store = useProfile();

onMounted(store.fetchProfile);
onBeforeUnmount(store.resetForm);
</script>

<template>
  <form @submit.prevent="store.updateProfile" class="form-container">
    <div class="form-wrapper">
      <h1 class="form-title">Edit profile</h1>

      <div class="alert alert-success" v-show="store.status">
        {{ store.status }}
      </div>

      <div class="form-group">
        <label for="name" class="required">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-input"
          v-model="store.form.name"
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="name" />
      </div>

      <div class="form-group">
        <label for="email" class="required">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-input"
          v-model="store.form.email"
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="email" />
      </div>

      <div class="form-separator"></div>

      <button type="submit" class="btn btn-primary" :disabled="store.loading">
        <IconSpinner class="spinner" v-show="store.loading" />
        Update profile
      </button>
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

.alert {
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
}

.alert-success {
  background-color: #d1fae5; /* Tailwind green-100 */
  color: #065f46; /* Tailwind green-800 */
  margin-bottom: 1rem;
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
}

.form-separator {
  border-top: 1px solid #ccc;
  height: 1px;
  margin: 1.5rem 0;
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
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
