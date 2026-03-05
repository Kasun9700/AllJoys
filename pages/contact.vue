<template>
  <section class="section">
    <div class="container contact-grid">
      <div>
        <h1 class="section-title">Contact All Joys Today</h1>
        <p class="section-subtitle">
          We currently confirm reservations manually. Please contact us by phone, WhatsApp, or email.
        </p>
        <div class="actions">
          <a class="btn btn-primary" href="tel:+94771234567">Call Now</a>
          <a class="btn btn-ghost" href="https://wa.me/94771234567" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>

      <div class="contact-card">
        <h2>Details</h2>
        <p><strong>Phone:</strong> +94 77 123 4567</p>
        <p><strong>Email:</strong> stay@alljoysella.com</p>
        <p><strong>Address:</strong> No. 12, Kitalella Road, Ella 90090, Sri Lanka</p>
        <p><strong>Check-in / Check-out:</strong> 2:00 PM / 11:00 AM</p>
        <p class="helper">Future online booking module can be added with minimal page changes.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({
  title: 'Contact - All Joys Guest House Ella',
  description: 'Get in touch with All Joys Guest House for room availability and inquiries in Ella.',
  ogImage: '/cover.jpg'
});
</script>

<style scoped>
.contact-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1.2fr 0.8fr;
}

.actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.contact-card {
  border: 1px solid rgba(201, 164, 106, 0.3);
  background: rgba(20, 28, 42, 0.72);
  border-radius: 1rem;
  padding: 1rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
}

.contact-card h2 {
  margin: 0 0 0.7rem;
}

.contact-card p {
  margin: 0.4rem 0;
}

.helper {
  color: var(--muted);
  margin-top: 0.8rem;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
