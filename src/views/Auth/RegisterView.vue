<template>
  <form @submit.prevent="store.handleSubmit" novalidate>
    <div class="form-container">
      <h1 class="form-title">Register</h1>

      <div class="form-group">
        <label for="name" class="required">Name</label>
        <input
          v-model="store.form.name"
          id="name"
          name="name"
          type="text"
          class="form-input"
          autocomplete="name"
          required
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="name" />
      </div>

      <div class="form-group">
        <label for="email" class="required">Email</label>
        <input
          v-model="store.form.email"
          id="email"
          name="email"
          type="email"
          class="form-input"
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
          class="form-input"
          autocomplete="new-password"
          required
          :disabled="store.loading"
        />
        <ValidationError :errors="store.errors" field="password" />
      </div>

      <div class="form-group">
        <label for="password_confirmation" class="required">
          Confirm password
        </label>
        <input
          v-model="store.form.password_confirmation"
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          class="form-input"
          autocomplete="new-password"
          required
          :disabled="store.loading"
        />
      </div>

      <div class="divider"></div>

      <div class="form-group">
        <button type="submit" class="btn-primary">
          <IconSpinner v-show="store.loading" />
          Register
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { onBeforeUnmount } from "vue";
import { useRegister } from "@/stores/register";

const store = useRegister();

onBeforeUnmount(store.resetForm);
</script>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 384px; /* md:w-96 = 24rem = 384px */
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
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
}

.form-input:focus {
  border-color: #3182ce; /* Tailwind's blue-600 */
  box-shadow: 0 0 0 1px #3182ce;
}

.btn-primary {
  padding: 0.75rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #2563eb; /* Slightly darker blue */
}

.divider {
  border-top: 1px solid #ccc;
  margin: 1.5rem 0;
}

.required::after {
  content: "*";
  color: red;
  margin-left: 4px;
}
</style>
