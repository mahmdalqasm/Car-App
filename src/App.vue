<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuth } from '@/stores/auth'

const auth = useAuth()
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <h2 class="logo">
            <div class="logo-icon">P</div>
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

  <div class="main-content">
    <RouterView />
  </div>
</template>

<style>
.header {
  padding: 1.5rem 0;
  background-color: #f3f4f6; /* gray-100 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #2563eb; /* blue-600 */
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  text-align: center;
  border-radius: 0.375rem;
  font-weight: normal;
}

.router-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

.router-link:hover {
  text-decoration: underline;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
