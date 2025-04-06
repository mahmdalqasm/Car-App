<script setup>
import { onBeforeUnmount } from "vue";
import { useChangePassword } from "@/stores/changePassword";

const store = useChangePassword();

onBeforeUnmount(store.resetForm);
</script>

<template>
  <form @submit.prevent="store.updatePassword" class="form-container">
    <div class="form-wrapper">
      <h1 class="form-title">Change password</h1>

      <div class="alert alert-success" v-show="store.status">
        {{ store.status }}
      </div>

      <div class="form-group">
        <label for="current_password" class="required">Current password</label>
        <input
          type="password"
          name="current_password"
          id="current_password"
          class="form-input"
          v-model="store.form.current_password"
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="current_password" />
      </div>

      <div class="form-group">
        <label for="password" class="required">New password</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-input"
          v-model="store.form.password"
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="password" />
      </div>

      <div class="form-group">
        <label for="password_confirmation" class="required">
          Confirm new password
        </label>
        <input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
          class="form-input"
          v-model="store.form.password_confirmation"
          :disabled="store.loading"
        />
      </div>

      <div class="form-separator"></div>

      <button type="submit" class="btn btn-primary" :disabled="store.loading">
        <IconSpinner class="spinner" v-show="store.loading" />
        Update password
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
  background-color: #d1fae5; /* green-100 */
  color: #065f46; /* green-800 */
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
  border-radius: 0.25rem;
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
