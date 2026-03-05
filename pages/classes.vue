<template>
  <section id="classes" class="section rooms-preview">
    <div class="container">
      <h2 class="section-title">Class Packages</h2>
      <p class="section-subtitle">Choose your experience. All classes are hands-on and suitable for all skill levels.</p>
      <div class="grid rooms-grid">
        <ClassCard />
        <!-- Add more <ClassCard /> as needed -->
      </div>
      <div class="section-cta">
        <a class="btn btn-primary" href="https://wa.me/94703320262" target="_blank" rel="noopener">Book Now</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ClassCard from '~/components/ClassCard.vue';
</script>

<style scoped>
/* ...existing styles from rooms.vue... */
</style>
