<template>
  <section class="hero">
    <div class="container hero-wrap">
      <div class="hero-left">
          <p class="eyebrow">AUTHENTIC SRI LANKAN COOKERY CLASS</p>
          <h1>
            Experience <span>Traditional Sri Lankan</span><br>
            Cuisine in Ella
          </h1>
          <p class="lead">Join Wijita and family for a hands-on culinary journey. Every dish is rooted in Sri Lankan tradition—learn to prepare classic favorites like rice & curry, hoppers, sambols, and more. Immerse yourself in the vibrant flavors and culture of Sri Lanka, and take home recipes to recreate the island's tastes.</p>
        <div class="actions">
          <a class="btn btn-primary" href="https://wa.me/94703320262" target="_blank" rel="noopener">Book Your Class</a>
        </div>
        <div class="chips">
          <span>Traditional Sri Lankan Dishes</span>
          <span>Cultural Experience</span>
          <span>Hands-on Cooking</span>
          <span>Vegetarian/Vegan Friendly</span>
          <span>All Ingredients Provided</span>
          <span>Recipes to Take Home</span>
        </div>
      </div>

      <div class="hero-right">
        <div class="visual-bg"></div>
        <img src="/cookery-hero.jpg" alt="All Joys Cookery Class in Ella" class="hero-image" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props needed for cookery class hero
</script>

<style scoped>
.hero {
  min-height: calc(100dvh - 100px);
  padding: 0.8rem 0 1.2rem;
  background: #fff;
  display: flex;
  align-items: center;
}

.hero-wrap {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
}

.hero-left {
  padding: 0.5rem 0;
}

.eyebrow {
  color: var(--brand);
  margin: 0 0 1rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.72rem;
  font-weight: 500;
}

h1 {
  margin: 0;
  font-size: clamp(2.3rem, 5.2vw, 5.2rem);
  line-height: 1.03;
  max-width: 12ch;
  color: var(--text);
  font-weight: 800;
}

h1 span {
  color: var(--brand);
}

.lead {
  margin: 0;
  color: var(--muted);
  max-width: 52ch;
  margin-top: 1.2rem;
  font-size: 1.07rem;
}

.actions {
  margin-top: 1.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.chips {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  max-width: 520px;
}

.chips span {
  border: 1px solid #d6dbe2;
  border-radius: 999px;
  padding: 0.38rem 0.78rem;
  font-size: 0.82rem;
  color: #68717d;
  background: #fff;
}

.hero-right {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.visual-bg {
  position: absolute;
  inset: 70px 8px 50px 70px;
  border-radius: 2.3rem;
  background: linear-gradient(145deg, #0c5a4f, #0d7c68);
}

.hero-image {
  position: absolute;
  z-index: 2;
  width: min(100%, 540px);
  max-height: 520px;
  left: 34px;
  bottom: 18px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(18, 28, 38, 0.2);
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 1.4rem 0 1.2rem;
  }

  .hero-wrap {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 100%;
  }

  .hero-right {
    min-height: 360px;
  }

  .visual-bg {
    inset: 20px 8px 20px 8px;
  }

  .hero-image {
    position: relative;
    left: 0;
    bottom: 0;
    max-height: 320px;
  }
}
</style>
