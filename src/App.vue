<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuth } from '@/stores/auth'

const auth = useAuth()
</script>

<template>
  <header class="main-header">
    <div class="container">
      <nav class="nav-bar">
        <div class="nav-left">
          <h2 class="brand-title">
            <div class="brand-icon">P</div>
            myParking
          </h2>

          <template v-if="auth.check">
            <RouterLink class="router-link" :to="{ name: 'vehicles.index' }"> Vehicles </RouterLink>
          </template>
          <template v-else>
            <RouterLink class="router-link" :to="{ name: 'home' }"> Home </RouterLink>
          </template>
        </div>
        <div class="nav-right">
          <template v-if="auth.check">
            <RouterLink class="router-link" :to="{ name: 'profile.edit' }"> Profile </RouterLink>
            <RouterLink class="router-link" :to="{ name: 'profile.change-password' }">
              Change password
            </RouterLink>
            <button @click="auth.logout" class="router-link">Logout</button>
          </template>
          <template v-else>
            <RouterLink class="router-link" :to="{ name: 'login' }"> Login </RouterLink>
            <RouterLink class="router-link" :to="{ name: 'register' }"> Register </RouterLink>
          </template>
        </div>
      </nav>
    </div>
  </header>

  <div class="main-content container">
    <RouterView />
  </div>
</template>

<style scoped>
.main-header {
  padding: 1.5rem 0;
  background-color: #f3f4f6; /* bg-gray-100 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* shadow */
}

.container {
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1024px;
}

@media (min-width: 768px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.nav-left,
.nav-right {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.brand-title {
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2563eb; /* blue-600 */
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  border-radius: 0.375rem;
  font-size: 1rem;
}

.router-link {
  color: #1f2937; /* gray-800 */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.router-link:hover {
  color: #2563eb; /* hover effect like Tailwind's hover:text-blue-600 */
}

.main-content {
  padding-top: 2rem;
}

@media (min-width: 768px) {
  .main-content {
    padding-top: 4rem;
  }
}
</style>
