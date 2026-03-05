<template>
  <section class="section">
    <div class="container">
      <h1 class="section-title">All Joys Cookery Class Gallery</h1>
      <p class="section-subtitle">Food stories, happy guests, and delicious moments from our hands-on Sri Lankan cooking
        sessions in Ella.</p>

      <div class="gallery-responsive">
        <!-- Grid for desktop/tablet -->
        <div class="gallery-grid" v-if="!isMobile">
          <img v-for="(img, idx) in images" :key="img" :src="img" :alt="`All Joys Cookery Class photo ${idx + 1}`"
            loading="lazy" />
        </div>
        <!-- Slider for mobile -->
        <div class="gallery-single" v-else>
          <div class="gallery-image-wrap" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
            <img v-if="currentImage" :src="currentImage" :alt="`All Joys Cookery Class photo ${currentIndex + 1}`"
              loading="lazy" />

          </div>
          <!-- Dots for mobile -->
          <div v-if="images.length > 1" class="gallery-dots">
            <span v-for="(img, idx) in images" :key="'dot' + idx" class="dot" :class="{ active: idx === currentIndex }"
              @click="currentIndex = idx"></span>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({
  title: 'Gallery - All Joys Cookery Class Ella',
  description: 'See real photos and food moments from All Joys Cookery Class in Ella, Sri Lanka.',
  ogImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2a/eb/42/all-joys-cookery-class.jpg?w=1200&h=-1&s=1'
});

import { ref, computed, onMounted, onUnmounted } from 'vue';
const images = [
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2a/eb/42/all-joys-cookery-class.jpg?w=1200&h=-1&s=1',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/16/91/fc/getlstd-property-photo.jpg?w=1200&h=-1&s=1',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/8c/e8/05/alljoysella.jpg?w=1200&h=-1&s=1',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/8c/e8/04/alljoysella.jpg?w=1200&h=-1&s=1',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/8c/e8/03/alljoysella.jpg?w=1200&h=-1&s=1',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/2d/90/5a/all-joys-cookery-class.jpg?w=1200&h=-1&s=1'
];
const currentIndex = ref(0);
const intervalId = ref<number | undefined>(undefined);
const currentImage = computed(() => images.length ? images[currentIndex.value] : '');


const isMobile = ref(false);
function checkMobile() {
  isMobile.value = window.innerWidth <= 600;
}

// Swipe logic
let touchStartX = 0;
let touchEndX = 0;
function onTouchStart(e: TouchEvent) {
  if (e.touches && e.touches[0]) {
    touchStartX = e.touches[0].clientX;
  }
}
function onTouchMove(e: TouchEvent) {
  if (e.touches && e.touches[0]) {
    touchEndX = e.touches[0].clientX;
  }
}
function onTouchEnd() {
  const deltaX = touchEndX - touchStartX;
  if (Math.abs(deltaX) > 40) { // threshold for swipe
    if (deltaX < 0) {
      nextImage(); // swipe left
    } else {
      prevImage(); // swipe right
    }
  }
  touchStartX = 0;
  touchEndX = 0;
}

function prevImage() {
  if (images.length < 2) return;
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
}
function nextImage() {
  if (images.length < 2) return;
  currentIndex.value = (currentIndex.value + 1) % images.length;
}

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  if (intervalId.value) clearInterval(intervalId.value);
  intervalId.value = window.setInterval(() => {
    if (isMobile.value && images.length > 1) {
      nextImage();
    }
  }, 3000);
});
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  if (intervalId.value) clearInterval(intervalId.value);
});
</script>

<style scoped>
.gallery-grid {
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
}

img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 1rem;
  border: 1px solid rgba(201, 164, 106, 0.3);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

img:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 32px rgba(0, 0, 0, 0.45);
}

/* Dots for mobile slider */
.gallery-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.7rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e0e0e0;
  display: inline-block;
  cursor: pointer;
  transition: background 0.2s;
}

.dot.active {
  background: #222;
}

@media (min-width: 601px) {
  .gallery-dots {
    display: none;
  }
}

.gallery-note {
  margin-top: 1rem;
  border: 1px solid rgba(201, 164, 106, 0.3);
  background: rgba(20, 28, 42, 0.72);
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  color: var(--muted);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 24px rgba(45, 69, 47, 0.12);
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    display: none;
  }

  .gallery-single {
    display: block;
  }
}
</style>
