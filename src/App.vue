<script setup>
import { RouterLink, RouterView } from "vue-router";
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
          <RouterLink class="router-link" :to="{ name: 'home' }">
            Home
          </RouterLink>
        </div>
        <div class="nav-right">
          <RouterLink class="router-link" :to="{ name: 'register' }">
            Register
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <div class="container content">
    <RouterView />
  </div>
</template>

<style>
.header {
  padding: 1.5rem 0;
  background-color: #f3f4f6; /* gray-100 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

.nav {
  display: flex;
  justify-content:start;
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
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
}

.router-link {
  text-decoration: none;
  color: #2563eb;
  font-weight: 500;
}

.router-link:hover {
  text-decoration: underline;
}

.content {
  padding-top: 2rem;
}

@media (min-width: 768px) {
  .content {
    padding-top: 4rem;
  }
}
</style>
