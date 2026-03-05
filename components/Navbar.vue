<template>
  <nav class="navbar">
    <div class="container navbar-inner">
      <NuxtLink to="/" class="brand"><span class="mark">🍲</span>All Joys Cookery Class</NuxtLink>

      <button class="menu-btn" type="button" @click="isOpen = !isOpen" aria-label="Toggle navigation menu">
        ☰
      </button>

      <ul :class="['nav-links', { open: isOpen }]" @click="isOpen = false">
        
        <li><NuxtLink to="/#about">About</NuxtLink></li>
        <li><NuxtLink to="/#classes">Classes</NuxtLink></li>
        <li><NuxtLink to="/#gallery">Gallery</NuxtLink></li>
        <li><NuxtLink to="/#contact">Contact</NuxtLink></li>
      </ul>

      <a href="https://wa.me/94703320262" class="consult-btn" target="_blank" rel="noopener">Book Class</a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(248, 246, 242, 0.9);
  backdrop-filter: blur(8px);
  padding: 0.55rem 0 0.45rem;
}

.navbar-inner {
  min-height: 68px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.9rem;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 999px;
  margin: 0 auto;
  padding: 0.35rem 0.9rem;
  box-shadow: 0 10px 24px rgba(30, 34, 40, 0.08);
}

.brand {
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.02em;
  color: var(--text);
  font-size: 0.98rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #f4fbf4;
  border: 1px solid #d8f0dc;
  border-radius: 999px;
  padding: 0.4rem 0.75rem;
  white-space: nowrap;
}

.mark {
  font-size: 1.02rem;
}

.menu-btn {
  display: none;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.nav-links a {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.86rem;
  padding: 0.44rem 0.7rem;
  border-radius: 999px;
  transition: 0.2s ease;
  white-space: nowrap;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #232329;
  background: #ffe066;
}

.consult-btn {
  text-decoration: none;
  color: #232329;
  background: #ffe066;
  border-radius: 999px;
  padding: 0.58rem 1rem;
  font-size: 0.82rem;
  font-weight: 700;
  border: 1px solid #ffd84a;
  transition: 0.2s ease;
  white-space: nowrap;
}

.consult-btn:hover {
  background: #ffb347;
}

@media (max-width: 1180px) {
  .brand {
    font-size: 0.9rem;
    padding: 0.34rem 0.62rem;
  }

  .nav-links a {
    font-size: 0.8rem;
    padding: 0.38rem 0.58rem;
  }

  .consult-btn {
    font-size: 0.77rem;
    padding: 0.5rem 0.82rem;
  }
}

@media (max-width: 980px) {
  .consult-btn {
    display: none;
  }

  .navbar-inner {
    grid-template-columns: auto 1fr;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.35rem 0 0.25rem;
  }

  .navbar-inner {
    position: relative;
    border-radius: 1rem;
    min-height: 60px;
    grid-template-columns: 1fr auto;
  }

  .brand {
    background: transparent;
    border: none;
    padding: 0;
  }

  .menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    padding: 0.35rem 0.65rem;
  }

  .nav-links {
    position: absolute;
    top: 68px;
    left: 0.35rem;
    right: 0.35rem;
    background: #fff;
    border: 1px solid var(--line);
    display: none;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.09);
    gap: 0.55rem;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    text-align: center;
    border: 1px solid var(--line);
    background: #fff;
  }

  .consult-btn {
    display: none;
  }
}
</style>
