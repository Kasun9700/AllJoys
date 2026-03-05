<template>
  <article class="class-card glass-3d">
    <div class="card-bg" :style="{ backgroundImage: `url(${image})` }">
      <div class="image-overlay"></div>
      <div class="card-header">
        <span class="class-type">{{ type }}</span>
        <span class="class-duration">{{ duration }}</span>
      </div>
      <div class="card-title">{{ title }}</div>
      <div class="card-desc">{{ description }}</div>
      <ul class="class-features">
        <li v-for="feature in features" :key="feature">{{ feature }}</li>
      </ul>
    </div>
    <div class="card-footer">
      <span class="participants">👨‍🍳 Up to {{ maxParticipants }} participants</span>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: 'Signature Sri Lankan Curry Class' },
  description: { type: String, default: 'Prepare 5–7 authentic dishes including curries, sambal, and coconut roti. All ingredients and recipes provided.' },
  type: { type: String, default: 'Group Class' },
  duration: { type: String, default: '2 hours' },
  maxParticipants: { type: Number, default: 8 },
  features: { type: Array as () => string[], default: () => [
    'Vegetarian/vegan options',
    'Printed/digital recipes',
    'Flexible menu',
    'Hands-on experience'
  ] },
  image: { type: String, default: '/gallery-cook1.jpg' }
});
</script>


