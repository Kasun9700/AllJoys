<template>
  <div class="hours-card">
    <button class="hours-header" @click="toggleOpen">
      <span>Hours</span>
      <span :class="['arrow', { open: isOpen }]">&#9662;</span>
    </button>
    <transition name="fade">
      <div v-if="isOpen" class="hours-list">
        <div class="open-now">Open now</div>
        <div v-for="(hours, day) in orderedHours" :key="day" class="hours-row">
          <span class="day">{{ day }}</span>
          <span class="time">{{ hours }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const isOpen = ref(true);
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const hoursData: Record<string, string> = {
  Thursday: '3:00 PM - 8:00 PM',
  Friday: '3:00 PM - 8:00 PM',
  Saturday: '10:00 AM - 8:00 PM',
  Sunday: '10:00 AM - 8:00 PM',
  Monday: '3:00 PM - 8:00 PM',
  Tuesday: '3:00 PM - 8:00 PM',
  Wednesday: '3:00 PM - 8:00 PM',
};

const dayOrder = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const orderedHours = computed(() => {
  return Object.fromEntries(
    dayOrder.map(day => [day, hoursData[day]])
  );
});
</script>

<style scoped>
.hours-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  max-width: 320px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  font-family: 'Inter', Arial, sans-serif;
}
.hours-header {
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
}
.arrow {
  transition: transform 0.2s;
}
.arrow.open {
  transform: rotate(180deg);
}
.hours-list {
  padding: 0 1rem 1rem 1rem;
}
.open-now {
  color: #1db954;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.hours-row {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0;
  font-size: 1rem;
}
.day {
  font-weight: 600;
}
.time {
  color: #444;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
