<template>
  <div class="active-parkings-container">
    <h1 class="title">Active parkings</h1>

    <RouterLink
      :to="{ name: 'parkings.create' }"
      class="order-parking-btn"
    >
      Order parking
    </RouterLink>

    <div class="divider"></div>

    <div class="active-parkings-list">[active parkings list]</div>
  </div>
</template>

<style scoped>
.active-parkings-container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}

.order-parking-btn {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-parking-btn:disabled {
  background-color: #a5b4fc;
}

.divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 1.5rem 0;
}

.active-parkings-list {
  font-size: 1rem;
  color: #4b5563;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
}
</style>