<template>
    <div class="app-bg">
        <div class="app-shell">
            <NuxtRouteAnnouncer />
            <Navbar />
            <main>
                <NuxtPage />
            </main>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

:root {
    color-scheme: light;
    --bg: #f8f6f2;
    --surface: #fff;
    --text: #232329;
    --muted: #7a7a7a;
    --brand: #1fa463;
    --brand-dark: #0e7c3a;
    --accent-yellow: #ffe066;
    --accent-orange: #ffb347;
    --accent-red: #ff5e5b;
    --accent-green: #e6f9e6;
    --line: #e5e5e5;
    --glass-blur: blur(18px);
    --glass-shadow: 0 20px 45px 0 rgba(30, 34, 40, 0.10);
}

body,
html,
#__nuxt {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: var(--bg);
    color: var(--text);
}

.app-bg {
    min-height: 100vh;
    width: 100vw;
    background: var(--bg);
    display: block;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}

.app-shell {
    min-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    display: grid;
    grid-template-rows: auto 1fr auto;
    background: var(--surface);
    box-shadow: 0 14px 34px rgba(30, 34, 40, 0.10);
    border-radius: 0;
    margin: 0;
    overflow-x: hidden;
    border: none;
    padding: 0;
}

main {
    width: 100%;
}


.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
}

.section {
    padding: 3.2rem 0 2.2rem 0;
}

.section-title {
    margin: 0 0 0.75rem;
    font-size: clamp(2.1rem, 2vw + 1.2rem, 2.8rem);
    line-height: 1.18;
    color: var(--text);
    font-family: 'Poppins', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 800;
    letter-spacing: -0.01em;
    margin-bottom: 0.5rem;
    word-break: break-word;
}

.section-subtitle {
    margin: 0;
    color: var(--muted);
    max-width: 65ch;
    font-size: 1.08rem;
}

.btn {
    display: inline-block;
    text-decoration: none;
    padding: 0.95rem 1.5rem;
    border-radius: 999px;
    border: none;
    transition: 0.2s cubic-bezier(.4, 0, .2, 1);
    font-weight: 700;
    font-size: 1.13rem;
    box-shadow: 0 6px 18px 0 rgba(31, 164, 99, 0.10);
}

.btn-primary {
    color: #232329;
    background: var(--accent-yellow);
    font-weight: 700;
    border: none;
    box-shadow: 0 4px 12px 0 rgba(255, 224, 102, 0.18);
}

.btn-primary:hover {
    background: var(--accent-orange);
}

.btn-ghost {
    color: var(--brand);
    background: var(--accent-green);
    border: none;
}

.btn-ghost:hover {
    background: var(--accent-yellow);
    color: #232329;
}

@media (max-width: 900px) {
    .app-bg {
        padding: 0;
    }

    .app-shell {
        min-height: 100vh;
        border-radius: 0;
        width: 100vw;
        max-width: 100vw;
        margin: 0;
        border: none;
        box-shadow: none;
        padding: 0;
    }

    .container {
        width: 100vw;
        max-width: 100vw;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .section {
        padding: 2.2rem 0 1.2rem 0;
    }

    .section-title {
        font-size: clamp(1.2rem, 4vw + 1rem, 1.7rem);
    }

    .section-subtitle {
        font-size: 0.98rem;
    }
}

@media (max-width: 600px) {

    html,
    body,
    #__nuxt,
    .app-bg,
    .app-shell {
        width: 100vw !important;
        min-width: 0 !important;
        max-width: 100vw !important;
        overflow-x: hidden !important;
    }

    .container {
        width: 100vw !important;
        max-width: 100vw !important;
        min-width: 0 !important;
        padding-left: 0.1rem;
        padding-right: 0.1rem;
        box-sizing: border-box;
    }

    .section {
        padding: 0.7rem 0 0.3rem 0;
    }

    .section-title {
        font-size: 1.05rem;
        word-break: break-word;
    }

    .section-subtitle {
        font-size: 0.91rem;
        word-break: break-word;
    }

    main,
    .main,
    .app-shell {
        padding: 0 !important;
    }

    *[class*="grid"],
    *[class*="row"],
    *[class*="layout"],
    *[class*="mix"] {
        display: block !important;
        width: 100% !important;
        max-width: 100vw !important;
        min-width: 0 !important;
        box-sizing: border-box;
    }

    img,
    video {
        max-width: 100vw !important;
        height: auto !important;
    }

    .btn,
    button,
    input,
    textarea {
        font-size: 1rem !important;
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
