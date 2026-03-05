<template>
    <div id="home" class="landing">
        <section class="hero section">
            <div class="container hero-grid">
                <article class="tile tile-green left-panel">
                    <div style="position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;gap:0.8em;padding:0.8em 0.5em;max-width:95%;margin:0.7em auto;overflow:hidden;">
                        <span style="display:inline-block;background:linear-gradient(90deg,#ffe36e 60%,#fffbe6 100%);color:#0e5c46;font-weight:800;font-size:1.05rem;padding:0.32em 1.1em;border-radius:1.2em;box-shadow:0 2px 8px #ffe36e33;letter-spacing:0.13em;margin-bottom:0.5em;">All Joys</span>
                        <h1 style="font-size:2.3rem;font-weight:900;line-height:1.08;margin-bottom:0.4rem;color:#fff;text-shadow:0 2px 16px #0e5c4622,0 1.5px 0 #0002;letter-spacing:0.01em;">Authentic Sri Lankan<br>Cookery Class in Ella</h1>
                        <p style="font-size:1.13rem;color:#d5f6e7;margin-bottom:1.1rem;line-height:1.5;max-width:520px;">Discover the vibrant flavors of Sri Lanka. <span style='color:#ffe36e;font-weight:700;'>Join Wijita and family</span> for a hands-on class where you’ll cook traditional dishes like <span style='color:#ffe36e;font-weight:700;'>rice & curry, hoppers, sambols, and coconut roti</span>. Experience true Sri Lankan hospitality and culture in every bite.</p>
                        <a class="btn btn-primary" href="#contact" style="font-size:1.13rem;padding:0.7em 2.2em;border-radius:2em;box-shadow:0 4px 24px #ffe36e77,0 1.5px 0 #f7b50011;background:linear-gradient(90deg,#fffbe6 60%,#ffe36e 100%);color:#0e5c46;font-weight:800;transition:background 0.18s, color 0.18s;">Book Your Class</a>
                    </div>
                    <div style="position:absolute;left:-40px;top:-40px;width:120px;height:120px;background:radial-gradient(circle at 40% 40%,#fffbe6cc 60%,#ffe36ecc 100%);border-radius:50%;z-index:1;opacity:0.7;"></div>
                    <div style="position:absolute;right:-30px;bottom:-30px;width:80px;height:80px;background:radial-gradient(circle at 60% 60%,#fffbe6cc 60%,#ffe36ecc 100%);border-radius:50%;z-index:1;opacity:0.5;"></div>
                </article>

                <article class="tile tile-image">
                    <video src="/videos/cooking.mp4" autoplay muted loop playsinline style="max-height:600px;width:100%;object-fit:cover;border-radius:1.25rem;"></video>
                </article>

                <article class="tile tile-yellow right-panel highlight-bg" style="position:relative;overflow:hidden;background-image:url('/images/curry-bowl.jpg');background-size:cover;background-position:center;min-height:320px;">
                    <div style="position:absolute;right:-40px;top:-40px;width:140px;height:140px;background:radial-gradient(circle at 40% 40%,#fffbe6cc 60%,#ffe36ecc 100%);border-radius:50%;z-index:1;opacity:0.7;"></div>
                    <div style="position:absolute;left:-30px;bottom:-30px;width:90px;height:90px;background:radial-gradient(circle at 60% 60%,#fffbe6cc 60%,#ffe36ecc 100%);border-radius:50%;z-index:1;opacity:0.5;"></div>
                    <div style="position:relative;z-index:2;background:rgba(255,255,255,0.82);backdrop-filter:blur(2px);border-radius:1.1em;padding:1.2em 1.1em;max-width:90%;margin:1.2em auto;box-shadow:0 4px 24px #ffe36e33;">
                        <p class="label" style="letter-spacing:0.13em;font-size:1.02rem;color:#b88c00;">Today’s Highlight</p>
                        <h2 style="font-size:2rem;font-weight:900;line-height:1.1;margin-bottom:0.5rem;color:#2d2d2d;">Rice & Curry Feast</h2>
                        <p style="font-size:1.08rem;color:#4d4d4d;margin-bottom:1.2rem;">Experience the heart of Sri Lankan cuisine! Master the art of rice & curry with hand-ground spices, garden-fresh veggies, and time-honored family recipes. Every class is a flavorful journey you’ll remember—and recreate—at home. Share laughter, learn local secrets, and bring the taste of Ella to your own kitchen.</p>
                        <a class="btn btn-primary" href="#classes" style="font-size:1.13rem;padding:0.7em 2.2em;border-radius:2em;box-shadow:0 4px 24px #ffe36e77,0 1.5px 0 #f7b50011;background:linear-gradient(90deg,#fffbe6 60%,#ffe36e 100%);color:#0e5c46;font-weight:800;transition:background 0.18s, color 0.18s;">See Menu</a>
                    </div>
                </article>
            </div>
        </section>

        <section id="classes" class="section">
            <div class="container">
                <div class="section-head">
                    <h2 class="section-title">Signature class menu</h2>
                    <p class="section-subtitle">Choose your favorite dishes, cook with us, and enjoy a fresh meal
                        together.</p>
                </div>

                <div class="class-row">
                    <article v-for="item in classCards" :key="item.title" class="class-item">
                        <img :src="item.image" :alt="item.title">
                        <div>
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.description }}</p>
                            <span class="meta">{{ item.highlight }} · {{ item.level }}</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section class="section split">
            <div class="container split-grid">
                <article class="tile tile-yellow burger-card">
                    <p class="label">Chef’s pick</p>
                    <h3>Crispy potato wedges with extra crunch.</h3>
                    <img src="https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80"
                        alt="Potato wedges">
                </article>

                <article class="flavour-content">
                    <p class="script">Taste a bite</p>
                    <h2 class="section-title">Snacks crafted for taste & cravings</h2>
                    <p class="section-subtitle">Learn spice timing, coconut milk balancing, sambal prep, and plating
                        tips from our family recipe flow.</p>
                    <div class="pill-row">
                        <span class="pill">Private class</span>
                        <span class="pill">Group class</span>
                        <span class="pill">Vegan options</span>
                    </div>
                    <a class="btn btn-primary" href="https://wa.me/94703320262" target="_blank" rel="noopener">Taste the
                        magic</a>
                </article>
            </div>
        </section>

        <Gallery />

        <section class="section reviews-wrap">
            <div class="container review-layout">
                <div>
                    <div class="container review-vertical-layout">
                        <div class="review-form-panel">
                            <p class="script">Guest Reviews</p>
                            <h2 class="section-title">What our guests say about the All Joys experience</h2>
                            <p class="section-subtitle">Real stories, honest ratings, and delicious memories from our
                                cookery classes in Ella.</p>
                            <form class="modern-review-form" @submit.prevent="submitReview" autocomplete="off"
                                :key="formKey" enctype="multipart/form-data">
                                <div class="modern-form-row">
                                    <label for="reviewer">Your name</label>
                                    <input id="reviewer" v-model="newReview.name" required maxlength="32"
                                        placeholder="Name" autocomplete="off">
                                </div>
                                <div class="modern-form-row">
                                    <label>Rating</label>
                                    <div class="star-rating-input">
                                        <span v-for="n in 5" :key="n" class="star"
                                            :class="{ active: n <= Number(newReview.rating) }"
                                            @click="newReview.rating = n">★</span>
                                    </div>
                                </div>
                                <div class="modern-form-row">
                                    <label for="review-text">Your review</label>
                                    <textarea id="review-text" v-model="newReview.text" required maxlength="300"
                                        placeholder="Share your experience..." autocomplete="off"></textarea>
                                </div>
                                <div class="modern-form-row">
                                    <label class="modern-upload-label">Upload a photo (optional)</label>
                                    <div class="modern-upload-wrap">
                                        <input id="review-image" type="file" accept="image/*"
                                            @change="(e) => onImageChange(e)" class="modern-upload-input" />
                                        <label for="review-image" class="modern-upload-btn">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                style="vertical-align:middle;margin-right:0.5em;">
                                                <path d="M12 16V4M12 4L7 9M12 4L17 9" stroke="#2d4c2f" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <rect x="4" y="16" width="16" height="4" rx="2" fill="#2d4c2f" />
                                            </svg>
                                            <span>{{ newReview.imagePreview ? 'Change Photo' : 'Choose Photo' }}</span>
                                        </label>
                                        <span v-if="newReview.imagePreview" class="modern-upload-filename">Photo
                                            selected</span>
                                    </div>
                                    <div v-if="newReview.imagePreview" class="image-preview">
                                        <img :src="newReview.imagePreview" alt="Image preview"
                                            style="max-width: 120px; max-height: 120px; border-radius: 0.5rem; margin-top: 0.5rem;" />
                                    </div>
                                </div>

                                <button class="btn btn-primary" type="submit">Submit Review</button>
                            </form>
                        </div>
                        <div class="review-right-panel">
                            <div class="mixed-reviews-slider">
                                <h3 class="review-section-title">All Reviews</h3>
                                <div class="slider-controls">
                                    <button v-if="mixedReviews.length > 1" class="slider-arrow left"
                                        @click="prevMixedReview" aria-label="Previous review">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="12" fill="#fff" stroke="#e0e0e0"
                                                stroke-width="1.5" />
                                            <path d="M14.5 7L10 12L14.5 17" stroke="#222" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                    <transition name="fade-slide" mode="out-in">
                                        <article v-if="currentMixedReview" :key="currentMixedReview?.key"
                                            :class="['review-card', currentMixedReview?.isTripAdvisor ? 'tripadvisor' : 'website', 'slider-item']">
                                            <div class="review-rating">
                                                <span v-for="n in currentMixedReview.rating" :key="n"
                                                    class="star">★</span>
                                                <span v-for="n in 5 - currentMixedReview.rating" :key="'empty' + n"
                                                    class="star empty">★</span>
                                            </div>
                                            <div v-if="currentMixedReview.image" class="review-image-wrap"
                                                style="margin-bottom: 0.5rem; text-align: center;">
                                                <img :src="currentMixedReview.image" alt="Review photo"
                                                    style="max-width: 180px; max-height: 180px; border-radius: 0.7rem; box-shadow: 0 2px 12px #0001;" />
                                            </div>
                                            <p class="review-text">“{{ currentMixedReview.text }}”</p>
                                            <p class="review-meta">
                                                {{ currentMixedReview.name }} · {{ currentMixedReview.when }}
                                                <span v-if="currentMixedReview.isTripAdvisor"
                                                    class="tripadvisor-badge">TripAdvisor</span>
                                            </p>
                                        </article>
                                    </transition>

                                    <button v-if="mixedReviews.length > 1" class="slider-arrow right"
                                        @click="nextMixedReview" aria-label="Next review">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="12" r="12" fill="#fff" stroke="#e0e0e0"
                                                stroke-width="1.5" />
                                            <path d="M9.5 7L14 12L9.5 17" stroke="#222" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div v-if="mixedReviews.length > 1" class="slider-dots">
                                    <span v-for="(review, idx) in mixedReviews" :key="'dot' + idx" class="dot"
                                        :class="{ active: idx === mixedReviewIndex }"
                                        @click="goToMixedReview(idx)"></span>
                                </div>
                                <a v-if="!tripAdvisorLoading && !tripAdvisorError" class="btn btn-ghost"
                                    href="https://www.tripadvisor.com/Attraction_Review-g616035-d15771515-Reviews-All_Joys_Cookery_Class-Ella_Uva_Province.html"
                                    target="_blank" rel="noopener">See all reviews on TripAdvisor</a>
                                <div v-if="tripAdvisorLoading" class="review-loading">Loading TripAdvisor reviews…</div>
                                <div v-else-if="tripAdvisorError" class="review-error">{{ tripAdvisorError }}</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="section cta-panel">
            <div class="container cta-grid">
                <article>
                    <p class="script">Book now</p>
                    <h2 class="section-title">Satisfy your craving, it's fast & easy</h2>
                    <p class="section-subtitle">WhatsApp us your date, group size, and dietary preferences. We confirm
                        quickly.
                    </p>
                    <div class="contact-actions">
                        <a class="btn btn-primary" href="https://wa.me/94703320262" target="_blank" rel="noopener">Book
                            on
                            WhatsApp</a>
                        <a class="btn btn-ghost" href="tel:+94703320262">Call +94 70 332 0262</a>
                    </div>
                </article>

                <article class="contact-card">
                    <h3>Class Info</h3>
                    <p><strong>Location:</strong> No. 02, Halpe Road, Ella, Sri Lanka</p>
                    <p><strong>Duration:</strong> 1–2 hours (3:00 PM – 8:00 PM)</p>
                    <p><strong>Email:</strong> vijitha.dissanayaka@yahoo.com</p>
                    <p><strong>Includes:</strong> Ingredients, guidance, recipes, and meal.</p>
                </article>
            </div>
        </section>
    </div>
</template>


<script setup lang="ts">

import { useSeoMeta } from 'nuxt/app';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Gallery from '~/pages/gallery.vue';
let reviewInterval: number | undefined;

useSeoMeta({
    title: 'All Joys Cookery Class - Ella Sri Lanka',
    description: 'Modern Sri Lankan cookery class website in Ella with hands-on classes and easy booking.',
    ogImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80'
});

const websiteReviewIndex = ref(0);
function prevWebsiteReview() {
    if (allReviews.value.length < 2) return;
    websiteReviewIndex.value = (websiteReviewIndex.value - 1 + allReviews.value.length) % allReviews.value.length;
}
function nextWebsiteReview() {
        
    if (allReviews.value.length < 2) return;
    websiteReviewIndex.value = (websiteReviewIndex.value + 1) % allReviews.value.length;
}
function goToWebsiteReview(idx: number) {
    websiteReviewIndex.value = idx;
}

let mixedReviewInterval: number | undefined;
onMounted(() => {
    if (mixedReviewInterval) clearInterval(mixedReviewInterval);
    mixedReviewInterval = window.setInterval(() => {
        if (mixedReviews.value.length > 1) {
            nextMixedReview();
        }
    }, 3000);
});
onUnmounted(() => {
    if (mixedReviewInterval) clearInterval(mixedReviewInterval);
});

const mixedReviewIndex = ref(0);
function prevMixedReview() {
    if (mixedReviews.value.length < 2) return;
    mixedReviewIndex.value = (mixedReviewIndex.value - 1 + mixedReviews.value.length) % mixedReviews.value.length;
}
function nextMixedReview() {
    if (mixedReviews.value.length < 2) return;
    mixedReviewIndex.value = (mixedReviewIndex.value + 1) % mixedReviews.value.length;
}
function goToMixedReview(idx: number) {
    mixedReviewIndex.value = idx;
}

// Computed for current mixed review
const currentMixedReview = computed(() =>
    mixedReviews.value.length && mixedReviewIndex.value >= 0 && mixedReviewIndex.value < mixedReviews.value.length
        ? mixedReviews.value[mixedReviewIndex.value]
        : null
);

const classCards = [
    {
        title: 'Traditional Sri Lankan Breakfast',
        description: 'Enjoy egg hoppers, pol sambol, fresh tropical fruits, and authentic Ceylon tea for a perfect start to your day.',
        highlight: 'Morning energy & local flavors',
        level: 'Beginner',
        image: 'images/breakfast.jpg'
    },
    {
        title: 'Rice & Curry Lunch Feast',
        description: 'Savor a classic Sri Lankan lunch with red rice, chicken curry, dhal, pumpkin curry, and sweet watalappan dessert.',
        highlight: 'Hearty, authentic midday meal',
        level: 'Intermediate',
        image: 'images/meal.jpg'
    },
    {
        title: 'Tropical Drinks Experience',
        description: 'Refresh with king coconut, Ceylon tea, and passion fruit juice—pure island flavors in every sip.',
        highlight: 'Cool, refreshing island drinks',
        level: 'All levels',
        image: 'images/refreshment.jpg'
    }
];

const defaultReviews: Review[] = [];

interface Review {
    name: string;
    when: string;
    rating: number;
    text: string;
    image?: string;
    imagePreview?: string;
}

const reviews = ref<Review[]>([]);

const newReview = ref<Review>({ name: '', when: '', rating: 0, text: '', image: '', imagePreview: '' });
const formKey = ref(Date.now());
function saveReviewsToStorage() {
    try {
        localStorage.setItem('alljoysella-reviews', JSON.stringify(reviews.value));
    } catch (e) { }
}

function loadReviewsFromStorage() {
    try {
        const stored = localStorage.getItem('alljoysella-reviews');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                reviews.value = parsed;
                return;
            }
        }
    } catch (e) { }
    reviews.value = [...defaultReviews];
}

function onImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            newReview.value.imagePreview = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    } else {
        newReview.value.imagePreview = '';
    }
}

function resetReviewForm() {
    newReview.value = { name: '', when: '', rating: 0, text: '', image: '', imagePreview: '' };
    formKey.value = Date.now(); // force form re-render
}

function submitReview() {
    if (!newReview.value.name || !newReview.value.rating || !newReview.value.text) return;
    reviews.value.unshift({
        name: newReview.value.name,
        when: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        rating: Number(newReview.value.rating),
        text: newReview.value.text,
        image: newReview.value.imagePreview || ''
    });
    saveReviewsToStorage();
    resetReviewForm();
}

const allReviews = computed<Review[]>(() => reviews.value);
const currentWebsiteReview = computed(() => allReviews.value[websiteReviewIndex.value]);


interface TripAdvisorReview {
    name: string;
    date: string;
    rating: number;
    text: string;
    image?: string;
    isTripAdvisor?: boolean;
    key?: string;
    when?: string;
}
const tripAdvisorReviews = ref<TripAdvisorReview[]>([]);
const tripAdvisorLoading = ref(true);
const tripAdvisorError = ref('');

const mixedReviews = computed<TripAdvisorReview[]>(() => {
    const websiteReviewsWithKey = allReviews.value.map((r, idx) => ({ ...r, key: `website-${idx}`, isTripAdvisor: false, date: r.when }));
    const tripAdvisorWithKey = tripAdvisorReviews.value.map((r, idx) => ({ ...r, key: `ta-${idx}`, isTripAdvisor: true, when: r.date }));
    return [...websiteReviewsWithKey, ...tripAdvisorWithKey];
});
onMounted(async () => {
    loadReviewsFromStorage();
    resetReviewForm();
    // Start auto-advance for website reviews
    reviewInterval = window.setInterval(() => {
        if (allReviews.value.length > 1) {
            nextWebsiteReview();
        }
    }, 2000);
    try {
        tripAdvisorLoading.value = true;
        const res = await fetch('/api/tripadvisor-reviews');
        if (!res.ok) throw new Error('Failed to fetch TripAdvisor reviews');
        tripAdvisorReviews.value = await res.json();
        tripAdvisorError.value = '';
    } catch (e) {
        tripAdvisorError.value = 'Could not load TripAdvisor reviews.';
    } finally {
        tripAdvisorLoading.value = false;
    }
});

onUnmounted(() => {
    if (reviewInterval) clearInterval(reviewInterval);
});

</script>

<style scoped>
.main-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: #fff;
    z-index: 100;
    box-shadow: 0 2px 12px #0001;
    padding: 0.2rem 0;
}

.navbar-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2.5vw;
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: 800;
    color: #0e5c46;
    letter-spacing: 0.01em;
}

.navbar-links {
    display: flex;
    gap: 1.5rem;
}

.nav-link {
    color: #222;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.05rem;
    transition: color 0.18s;
}

.nav-link:hover {
    color: #f7b500;
}

.navbar-search {
    background: #fff;
    border: none;
    border-radius: 50%;
    padding: 0.4em;
    cursor: pointer;
    box-shadow: 0 1px 4px #0001;
    transition: box-shadow 0.18s;
}

.navbar-search:hover {
    box-shadow: 0 2px 8px #f7b50033;
}

.hero-fullwidth {
    width: 100vw;
    min-height: 100vh;
    margin-top: 3.5rem;
    display: flex;
    align-items: stretch;
    background: #fff;
    overflow-x: hidden;
}

.hero-3col {
    display: grid;
    grid-template-columns: 1fr 1.1fr 1fr;
    width: 100vw;
    min-height: 100vh;
}

.hero-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 1.5rem;
    min-height: 100vh;
}

.hero-col-green {
    background: #0e5c46 url('https://www.transparenttextures.com/patterns/food.png');
    color: #fff;
    position: relative;
    text-align: center;
}

.hero-burger {
    width: 120px;
    margin-bottom: 1.5rem;
    border-radius: 50%;
    box-shadow: 0 2px 12px #0002;
}

.hero-title {
    font-size: 2.1rem;
    font-weight: 800;
    margin: 0.7rem 0 0.5rem 0;
    line-height: 1.1;
}

.hero-desc {
    font-size: 1.1rem;
    color: #d5f6e7;
    margin-bottom: 1.5rem;
}

.hero-btn {
    background: #fff;
    color: #0e5c46;
    font-weight: 700;
    border: none;
    border-radius: 2em;
    padding: 0.7em 2.1em;
    font-size: 1.1rem;
    box-shadow: 0 2px 8px #0001;
    cursor: pointer;
    transition: background 0.18s, color 0.18s;
    margin-top: 0.5rem;
}

.hero-btn.ghost {
    background: #fff;
    color: #f7b500;
    border: 2px solid #f7b500;
}

.hero-btn:hover {
    background: #f7b500;
    color: #fff;
}

.hero-col-image {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.hero-main-img {
    width: 100%;
    max-width: 420px;
    border-radius: 1.5rem;
    box-shadow: 0 4px 32px #0002;
}

.hero-col-yellow {
    background: #ffe36e;
    color: #222;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-pizza-img {
    width: 110px;
    margin: 0 auto 1.2rem auto;
}

.hero-pizza-img img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 2px 12px #0002;
}

.hero-yellow-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero-yellow-links {
    display: flex;
    gap: 1.1rem;
    margin-bottom: 0.7rem;
    justify-content: center;
}

.hero-yellow-links .nav-link {
    color: #222;
    font-weight: 600;
    font-size: 1.05rem;
    text-decoration: none;
    transition: color 0.18s;
}

.hero-yellow-links .nav-link:hover {
    color: #0e5c46;
}

@media (max-width: 1100px) {
    .hero-3col {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .hero-main-img {
        max-width: 320px;
    }
}

@media (max-width: 900px) {
    .hero-3col {
        grid-template-columns: 1fr;
    }

    .hero-col,
    .hero-col-green,
    .hero-col-yellow {
        min-height: 340px;
        padding: 2rem 0.7rem;
    }

    .hero-main-img {
        max-width: 90vw;
    }
}

@media (max-width: 600px) {
    .main-navbar {
        padding: 0.1rem 0;
    }

    .navbar-content {
        padding: 0.5rem 1vw;
    }

    .hero-title {
        font-size: 1.2rem;
    }

    .hero-desc {
        font-size: 0.97rem;
    }

    .hero-btn {
        font-size: 0.97rem;
        padding: 0.5em 1.2em;
    }

    .hero-burger,
    .hero-pizza-img {
        width: 70px;
    }
}

.landing {
    background: var(--bg);
}

.section-head {
    margin-bottom: 1rem;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.8rem;
}

.tile {
    border-radius: 1.25rem;
    border: 1px solid var(--line);
    padding: 1rem;
    position: relative;
    overflow: hidden;
}

.tile h1,
.tile h2,
.tile h3 {
    margin: 0.35rem 0;
    line-height: 1.1;
}

.tile p {
    margin: 0;
    color: var(--muted);
}

.tile-green {
    background: #0e5c46;
    color: #fff;
}

.tile-green p {
    color: #d5f6e7;
}

.tile-yellow {
    background: var(--accent-yellow);
}

.brand-mini {
    font-weight: 700;
    color: #fff !important;
}

.website-reviews-title {
    color: #2d4c2f;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    text-align: left;
    width: 100%;
    padding-left: 0.2rem;
}

.label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 700;
}

.tile-image {
    padding: 0;
    min-height: 230px;
}

.tile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.class-row {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: 1fr;
}

.class-item {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 1rem;
    padding: 0.7rem;
    display: grid;
    grid-template-columns: 78px 1fr;
    gap: 0.7rem;
    align-items: center;
}

.class-item img {
    width: 78px;
    height: 78px;
    border-radius: 0.8rem;
    object-fit: cover;
}

.class-item h3 {
    margin: 0;
    font-size: 1rem;
}

.class-item p {
    margin: 0.25rem 0;
    font-size: 0.86rem;
    color: var(--muted);
}

.meta {
    font-size: 0.76rem;
    font-weight: 600;
    color: var(--brand-dark);
}

.split-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.burger-card img {
    width: 100%;
    border-radius: 1rem;
    margin-top: 0.6rem;
    height: 220px;
    object-fit: cover;
}

.script {
    color: #f26d4a;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.78rem;
    margin: 0;
    font-weight: 700;
}

.flavour-content {
    padding: 0.6rem 0.2rem;
}

.pill-row {
    margin: 0.9rem 0 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.pill {
    padding: 0.35rem 0.72rem;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: #fff;
    font-size: 0.78rem;
    font-weight: 600;
}

.gallery-mix {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
}

.gallery-mix img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 1rem;
    border: 1px solid var(--line);
}

.reviews-wrap {
    background: #fffdf8;
}


/* New vertical review layout */
.review-vertical-layout {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    align-items: flex-start;
}

.review-form-panel {
    flex: 1 1 0;
    min-width: 320px;
    max-width: 520px;
}

.review-right-panel {
    flex: 1 1 0;
    min-width: 320px;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
}

.tripadvisor-reviews.vertical {
    background: #fffdf8;
    border-radius: 1rem;
    padding: 1.2rem 1rem 1.2rem 1rem;
    margin-top: 0;
}

.tripadvisor-reviews.vertical h3 {
    color: #2d4c2f;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
}

.tripadvisor-reviews.vertical .review-card {
    background: #f7fcfa;
    border-left: 4px solid #34e0a1;
}

.review-cards {
    display: grid;
    gap: 0.8rem;
}

.review-card {
    background: #fff;
    border: 1.5px solid #e0e0e0;
    border-radius: 1.3rem;
    padding: 1.3rem 1.1rem 1.1rem 1.1rem;
    margin-bottom: 1.3rem;
    box-shadow: 0 4px 24px #0001, 0 1.5px 0 #f7b50011;
    min-width: 260px;
    max-width: 380px;
    transition: box-shadow 0.2s, border 0.2s;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.review-card .review-image-wrap {
    margin-bottom: 0.7rem;
    width: 100%;
    display: flex;
    justify-content: center;
}

.review-card .review-image-wrap img {
    max-width: 180px;
    max-height: 180px;
    border-radius: 0.7rem;
    box-shadow: 0 2px 12px #0001;
    object-fit: cover;
}

.review-card .review-rating {
    margin-bottom: 0.5rem;
    font-size: 1.25em;
}

.review-card .review-text {
    font-size: 1.13rem;
    color: #2d4c2f;
    margin: 0.7rem 0 0.2rem 0;
    text-align: center;
    font-weight: 500;
    line-height: 1.5;
}

.review-card .review-meta {
    margin: 0.5rem 0 0;
    font-size: 0.93rem;
    color: #888;
    text-align: center;
    font-style: italic;
}

.review-card:hover {
    box-shadow: 0 8px 32px #0002, 0 2px 0 #f7b50022;
    border: 1.5px solid #f7b500;
}

.website-reviews-slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-width: 320px;
    max-width: 350px;
    margin: 0 auto 1.5rem auto;
}

.slider-item {
    width: 100%;
    min-width: 280px;
    max-width: 350px;
}

.slider-arrow {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s, border 0.2s;
    border-radius: 50%;
    box-shadow: 0 2px 8px #0000000a;
}

.slider-arrow svg {
    display: block;
}

.slider-arrow.left {
    left: -2.2rem;
}

.slider-arrow.right {
    right: -2.2rem;
}

.slider-arrow:focus {
    outline: 2px solid #f7b500;
    border: 1.5px solid #f7b500;
}

.slider-arrow:hover svg circle {
    stroke: #f7b500;
}

.slider-arrow:hover svg path {
    stroke: #f7b500;
}

.slider-arrow.left {
    left: -2.2rem;
}

.slider-arrow.right {
    right: -2.2rem;
}

.slider-arrow:focus {
    outline: 2px solid #f7b500;
}

.slider-dots {
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

/* Fade and slide animation for slider */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(40px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.website-reviews-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* Slide-in animation for website reviews */
.slide-left-item {
    opacity: 1;
    transform: translateX(0);
    transition: transform 2s cubic-bezier(0.23, 1, 0.32, 1), opacity 2s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide-left-enter-from,
.slide-left-leave-to {
    opacity: 0;
    transform: translateX(100vw);
}

.slide-left-enter-to,
.slide-left-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.review-text {
    margin: 0;
    color: #3d3d3d;
}

.review-meta {
    margin: 0.55rem 0 0;
    font-size: 0.82rem;
    color: var(--muted);
}

.cta-panel {
    background: #fff;
}

.cta-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.contact-actions {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
}

.contact-card {
    border-radius: 1rem;
    border: 1px solid var(--line);
    background: var(--accent-green);
    padding: 1rem;
}

.contact-card h3 {
    margin: 0 0 0.5rem;
}

.contact-card p {
    margin: 0.35rem 0;
    color: #2f2f2f;
}

.review-card {
    position: relative;
}

.review-rating {
    margin-bottom: 0.3rem;
}

.star {
    color: #f7b500;
    font-size: 1.1em;
    margin-right: 1px;
}

.star.empty {
    color: #e0e0e0;
}

.modern-review-form {
    background: none;
    border: none;
    box-shadow: none;
    padding: 0;
    margin-bottom: 1.2rem;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.modern-form-row {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}

.modern-form-row label {
    font-size: 0.98rem;
    font-weight: 600;
    margin-bottom: 0.1rem;
}

.modern-review-form input,
.modern-review-form textarea {
    border: none;
    border-bottom: 2px solid var(--line);
    border-radius: 0;
    padding: 0.45rem 0.1rem 0.45rem 0.1rem;
    font-size: 1rem;
    font-family: inherit;
    background: none;
    outline: none;
    transition: border-color 0.2s;
}

.modern-review-form input:focus,
.modern-review-form textarea:focus {
    border-bottom: 2px solid #f26d4a;
}

.modern-review-form textarea {
    min-height: 70px;
    resize: vertical;
}

.star-rating-input {
    display: flex;
    gap: 0.18rem;
    font-size: 1.7rem;
    cursor: pointer;
    margin-top: 0.1rem;
}

.star-rating-input .star {
    color: #e0e0e0;
    transition: color 0.15s;
    padding: 0 2px;
}


.mixed-reviews-slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-width: 600px;
}

@media (max-width: 900px) {
    .hero-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
    }

    .class-row {
        grid-template-columns: 1fr;
        gap: 0.7rem;
    }

    .split-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .gallery-mix {
        grid-template-columns: 1fr 1fr;
        gap: 0.7rem;
    }

    .review-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .review-vertical-layout {
        flex-direction: column;
        gap: 2rem;
    }

    .review-form-panel,
    .review-right-panel {
        min-width: 0;
        max-width: 100%;
    }

    .cta-grid {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
}

@media (max-width: 600px) {
    .hero-grid {
        gap: 0.4rem;
    }

    .tile {
        padding: 0.7rem 0.2rem;
    }

    .slider-item {
        font-size: 0.97em;
        padding: 0.8rem 0.1rem 0.8rem 0.1rem;
        min-width: 0;
        max-width: 100vw;
        box-sizing: border-box;
        word-break: break-word;
    }

    .review-card {
        min-width: 0;
        max-width: 100vw;
        width: 100%;
        font-size: 0.97em;
        padding: 0.7rem 0.1rem 0.7rem 0.1rem;
        box-sizing: border-box;
        word-break: break-word;
    }

    .review-text {
        font-size: 0.98em;
        word-break: break-word;
        white-space: normal;
    }

    .gallery-mix {
        grid-template-columns: 1fr;
        gap: 0.4rem;
    }

    .review-form-panel,
    .review-right-panel {
        min-width: 0;
        max-width: 100vw;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
    }

    .review-vertical-layout {
        gap: 0.7rem;
    }

    .class-row {
        gap: 0.3rem;
    }

    .section {
        padding: 0.7rem 0 0.3rem 0;
    }

    .cta-grid {
        grid-template-columns: 1fr;
        gap: 0.7rem;
    }
}


.slider-arrow.left {
    left: -2.2rem;
}

.slider-arrow.right {
    right: -2.2rem;
}

.slider-arrow:focus {
    outline: 2px solid #f7b500;
    border: 1.5px solid #f7b500;
}

.slider-arrow:hover svg circle {
    stroke: #f7b500;
}

.slider-arrow:hover svg path {
    stroke: #f7b500;
}

.slider-dots {
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

@media (max-width: 600px) {
  .slider-arrow {
    display: none !important;
  }
}

@media (max-width: 900px) {
    .mixed-reviews-slider {
        min-width: 0;
        max-width: 100%;
        width: 100%;
    }

    .slider-item {
        min-width: 0;
        max-width: 100%;
        width: 100%;
    }
}

@media (max-width: 600px) {
    .slider-item {
        font-size: 0.97em;
        padding: 0.8rem 0.1rem 0.8rem 0.1rem;
        min-width: 0;
        max-width: 100vw;
        box-sizing: border-box;
        word-break: break-word;
    }

    .review-card {
        min-width: 0;
        max-width: 100vw;
        width: 100%;
        font-size: 0.97em;
        padding: 0.7rem 0.1rem 0.7rem 0.1rem;
        box-sizing: border-box;
        word-break: break-word;
    }

    .review-text {
        font-size: 0.98em;
        word-break: break-word;
        white-space: normal;
    }
}

.star-rating-input .star.active {
    color: #f7b500;
    text-shadow: 0 1px 4px #f7b50022;
}

.tripadvisor-reviews {
    margin-top: 2.2rem;
}

.tripadvisor-reviews h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
    color: #2d4c2f;
}

.tripadvisor {
    border-left: 4px solid #34e0a1;
    background: #f7fcfa;
}

.mixed-reviews-list {
    width: 100%;
}

.review-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    justify-content: flex-start;
}

.review-card {
    flex: 1 1 320px;
    min-width: 260px;
    max-width: 420px;
    box-sizing: border-box;
    word-break: break-word;
    overflow-wrap: break-word;
}

.tripadvisor-badge {
    display: inline-block;
    background: #34e0a1;
    color: #fff;
    font-size: 0.85em;
    font-weight: 700;
    border-radius: 0.7em;
    padding: 0.18em 0.7em;
    margin-left: 0.7em;
    vertical-align: middle;
    letter-spacing: 0.04em;
}

@media (max-width: 900px) {
    .review-cards {
        flex-direction: column;
        gap: 1.1rem;
    }

    .review-card {
        min-width: 0;
        max-width: 100%;
        width: 100%;
        font-size: 1em;
        padding: 1.1rem 0.7rem 1rem 0.7rem;
    }
}

@media (max-width: 600px) {
    .review-card {
        font-size: 0.97em;
        padding: 0.8rem 0.3rem 0.8rem 0.3rem;
    }
}

/* Modern upload styles */
.modern-upload-wrap {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: 0.2rem;
}

.modern-upload-input {
    display: none;
}

.modern-upload-btn {
    display: inline-flex;
    align-items: center;
    background: #f7b500;
    color: #2d4c2f;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    border-radius: 0.6rem;
    padding: 0.45em 1.1em;
    cursor: pointer;
    box-shadow: 0 2px 8px #0001;
    transition: background 0.18s, color 0.18s;
}

.modern-upload-btn:hover {
    background: #ffd966;
    color: #222;
}

.modern-upload-filename {
    color: #2d4c2f;
    font-size: 0.97em;
    font-style: italic;
    margin-left: 0.2em;
}

@media (min-width: 900px) {
    .hero-grid {
        grid-template-columns: 1.1fr 1.25fr 1fr;
        gap: 1rem;
    }

    .tile-image {
        min-height: 350px;
    }

    .class-row {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .class-item {
        grid-template-columns: 1fr;
        text-align: left;
    }

    .class-item img {
        width: 100%;
        height: 180px;
    }

    .split-grid {
        grid-template-columns: 0.95fr 1.05fr;
        align-items: center;
    }

    .gallery-mix {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .review-layout {
        grid-template-columns: 0.9fr 1.1fr;
        align-items: start;
    }

    .review-cards {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .cta-grid {
        grid-template-columns: 1.1fr 0.9fr;
        align-items: center;
    }
}
</style>
