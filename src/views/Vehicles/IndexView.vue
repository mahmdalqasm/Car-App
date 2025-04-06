<template>
  <div class="vehicles-wrapper">
    <h1 class="page-title">My vehicles</h1>

    <RouterLink :to="{ name: 'vehicles.create' }" class="btn btn-primary w-full">
      Add vehicle
    </RouterLink>

    <div class="form-separator"></div>

    <div>There will be our vehicles list.</div>
  </div>
</template>

<style scoped>
.vehicles-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
}

.page-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.form-separator {
  border-top: 1px solid #ccc;
  height: 1px;
  margin: 1.5rem 0;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.375rem;
  text-align: center;
  display: inline-block;
  text-decoration: none;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
  width: 100%;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
