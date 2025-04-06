<script setup>
import { onBeforeUnmount } from "vue";
import { useLogin } from "@/stores/login";

const store = useLogin();

onBeforeUnmount(store.resetForm);
</script>

<template>
  <form @submit.prevent="store.handleSubmit" novalidate class="form-container">
    <div class="form-wrapper">
      <h1 class="form-title">Login</h1>

      <div class="form-group">
        <label for="email" class="required">Email</label>
        <input
          v-model="store.form.email"
          id="email"
          name="email"
          type="text"
          class="form-input"
          autofocus
          autocomplete="email"
          required
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="email" />
      </div>

      <div class="form-group">
        <label for="password" class="required">Password</label>
        <input
          v-model="store.form.password"
          id="password"
          name="password"
          type="password"
          class="form-password"
          autocomplete="current-password"
          required
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="password" />
      </div>

      <div class="form-remember">
        <label class="remember-label">
          <input
            v-model="store.form.remember"
            type="checkbox"
            class="remember-checkbox"
            :disabled="store.loading"
          />
          <span class="remember-text">Remember me</span>
        </label>
      </div>

      <div class="form-separator"></div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary" :disabled="store.loading">
          <IconSpinner class="spinner" v-show="store.loading" />
          Login
        </button>
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
  max-width: 24rem; /* md:w-96 */
  margin: 0 auto;
}

.form-title {
  font-size: 1.5rem; /* text-2xl */
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
}

.form-password {
  padding: 0.25rem;
  border: 1px solid #ccc;
  background-color: #f3f4f6; /* bg-gray-100 */
}

.form-remember {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.remember-label {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
}

.remember-checkbox {
  width: 1rem;
  height: 1rem;
}

.remember-text {
  user-select: none;
}

.form-separator {
  border-top: 1px solid #ccc;
  height: 1px;
  margin: 1.5rem 0;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Spinner animation */
.spinner {
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Example button style */
.btn {
  padding: 0.5rem 1rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.btn-primary {
  background-color: #2563eb; /* Tailwind blue-600 */
  color: white;
  border-radius: 0.375rem;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
