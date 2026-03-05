<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-brand">
        <div class="brand-title">AllJoys<span class="dot">.</span></div>
        <div class="brand-desc">Enjoy your fav meal with AllJoys Cookery Class</div>
      </div>
      <div class="footer-section">
        <div class="footer-heading">Visit us</div>
        <div class="footer-text">No. 02, Halpe Road, Ella, Sri Lanka</div>
        <div class="footer-text"><b>Open:</b> 10:00 AM - 09:00 PM</div>
      </div>
      <div class="footer-section">
        <div class="footer-heading">Know more</div>
        <ul>
          <li><NuxtLink to="/about">About us</NuxtLink></li>
          <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
          <li><NuxtLink to="/classes">Classes</NuxtLink></li>
        </ul>
      </div>
      <div class="footer-section">
        <div class="footer-heading">Help centre</div>
        <ul>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><a href="mailto:vijitha.dissanayaka@yahoo.com">Email us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-social-row">
      <div class="footer-social-label">Social Profiles <span class="footer-social-count">4</span></div>
      <div class="footer-social-pills">
        <a href="#" class="pill linkedin">Linkedin</a>
        <a href="#" class="pill instagram">Instagram</a>
        <a href="#" class="pill facebook">Facebook</a>
        <a href="#" class="pill youtube">YouTube</a>
      </div>
    </div>
    <div class="footer-copyright">© {{ new Date().getFullYear() }} AllJoys Cookery Class. All rights reserved.</div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* --- Footer Redesign --- */
.footer {
  margin-top: 2.5rem;
  background: #fdfaf4;
  color: #232323;
  border-top: 1.5px solid #ece7d8;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  padding-bottom: 0.5rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 2.5rem;
  padding: 2.2rem 2.5rem 1.2rem 2.5rem;
  align-items: flex-start;
  border-bottom: 1px solid #ece7d8;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.brand-title {
  font-size: 2.1rem;
  font-weight: 700;
  color: #2d4c2f;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
}
.brand-title .dot {
  color: #e4572e;
  font-size: 2.3rem;
  margin-left: 2px;
}
.brand-desc {
  font-size: 1.08rem;
  color: #6b6b6b;
  font-weight: 400;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.footer-heading {
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: #232323;
}
.footer-text {
  font-size: 0.98rem;
  color: #4a4a4a;
  margin-bottom: 0.1rem;
}
.footer-section ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.footer-section a {
  color: #2d4c2f;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.18s;
}
.footer-section a:hover {
  color: #e4572e;
}

.footer-social-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.1rem 2.5rem 0.5rem 2.5rem;
  justify-content: flex-start;
}
.footer-social-label {
  font-size: 1.08rem;
  font-weight: 600;
  color: #232323;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.footer-social-count {
  font-size: 1.1rem;
  font-weight: 500;
  color: #b2b2b2;
  margin-left: 0.2rem;
}
.footer-social-pills {
  display: flex;
  gap: 0.7rem;
}
.pill {
  display: inline-block;
  padding: 0.38em 1.2em;
  border-radius: 2em;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(30,34,40,0.07);
  transition: transform 0.13s, box-shadow 0.13s;
}
.pill.linkedin {
  background: #2d4c2f;
}
.pill.instagram {
  background: #e4572e;
}
.pill.facebook {
  background: #f7d047;
  color: #232323;
}
.pill.youtube {
  background: #e6e3d6;
  color: #232323;
}
.pill:hover {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 4px 16px rgba(30,34,40,0.13);
}

.footer-copyright {
  text-align: center;
  color: #b2b2b2;
  font-size: 0.93rem;
  padding: 0.7rem 0 0.2rem;
}

@media (max-width: 1100px) {
  .footer-main {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }
}
@media (max-width: 800px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
    padding: 1.2rem 1rem 0.7rem 1rem;
  }
  .footer-social-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
    padding: 0.7rem 1rem 0.3rem 1rem;
  }
}
@media (max-width: 600px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 0.7rem;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  }
}
</style>
