<template>
  <section class="section">
    <div class="container about-grid">
      <div>
        <h1 class="section-title">About All Joys Guest House</h1>
        <p class="section-subtitle">
          We are a local family-run guest house in Kitalella, Ella focused on clean rooms, calm atmosphere,
          and warm hospitality. Our goal is to make your stay simple, comfortable, and affordable.
        </p>
        <p class="body-text">
          Nearby highlights include Nine Arch Bridge, Little Adam's Peak, Ravana Falls, and Ella town center.
          This website structure is prepared for easy future integration of online booking.
        </p>
      </div>
      <div class="about-card">
        <h2>What you get</h2>
        <ul>
          <li>Clean, private rooms</li>
          <li>Friendly host support</li>
          <li>Quiet location in Ella</li>
          <li>Breakfast available on request</li>
          <li>Great value for budget stays</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({
  title: 'About - All Joys Guest House Ella',
  description: 'Learn about All Joys Guest House in Kitalella, Ella, with friendly hosts and easy access to top attractions.',
  ogImage: '/cover.jpg'
});
</script>

<style scoped>
.about-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1.4fr 0.8fr;
}

.body-text {
  color: var(--muted);
}

.about-card {
  border: 1px solid rgba(201, 164, 106, 0.3);
  border-radius: 1rem;
  background: rgba(20, 28, 42, 0.72);
  padding: 1rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
}

.about-card h2 {
  margin: 0;
}

.about-card ul {
  margin: 0.7rem 0 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.35rem;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
