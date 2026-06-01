<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from './settings/i18n.js'
const { t, currentLang } = useI18n()
import Navbar from './components/navbar.vue'
import { RouterView } from 'vue-router'
import Footer from './components/footer.vue'

const loading = ref(true)
const showBackToTop = ref(false)

watch(currentLang, () => {
  document.title = 'Tembera u Rwanda'
})

onMounted(() => {
  document.title = 'Tembera u Rwanda'
  setTimeout(() => { loading.value = false }, 1800)
  window.addEventListener('scroll', handleScroll)
  initScrollReveal()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  showBackToTop.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer2.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    observer.observe(el)
  })

  document.querySelectorAll('.stagger-item').forEach(el => {
    observer2.observe(el)
  })

  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el)
      }
    })
    document.querySelectorAll('.stagger-item').forEach(el => {
      if (!el.classList.contains('revealed')) {
        observer2.observe(el)
      }
    })
  })

  mutationObserver.observe(document.body, { childList: true, subtree: true })
}

const handleSwipe = (() => {
  let touchStartX = 0
  return {
    start(e) { touchStartX = e.touches[0].clientX },
    end(e) {
      const diff = e.changedTouches[0].clientX - touchStartX
      if (Math.abs(diff) > 100) {
        const links = document.querySelectorAll('nav a[href]')
        const paths = Array.from(links).map(l => l.getAttribute('href')).filter(h => h && h.startsWith('/'))
        const current = window.location.pathname
        const idx = paths.indexOf(current)
        if (idx !== -1) {
          if (diff > 0 && idx > 0) window.location.href = paths[idx - 1]
          else if (diff < 0 && idx < paths.length - 1) window.location.href = paths[idx + 1]
        }
      }
    }
  }
})()
</script>

<template>
  <div class="min-h-screen bg-white" @touchstart="handleSwipe.start" @touchend="handleSwipe.end">
    <Transition name="fade">
      <div v-if="loading" class="fixed inset-0 z-[9999] bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 flex flex-col items-center justify-center">
        <div class="relative">
          <img src="/rwandalogo.png" alt="Rwanda" class="w-24 h-24 mb-6 animate-float" />
        </div>
        <div class="w-16 h-16 border-4 border-green-300 border-t-white rounded-full animate-spin mb-4"></div>
        <h2 class="text-white text-2xl font-bold font-[Playfair_Display]">Tembera u Rwanda</h2>
        <p class="text-green-200 text-sm mt-2 animate-pulse">{{ t('htmlDesc') }}</p>
      </div>
    </Transition>

    <Navbar />
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <Footer />

    <Transition name="fade">
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 animate-pulse-glow active:scale-95"
        aria-label="Back to top"
      >
        ↑
      </button>
    </Transition>
  </div>
</template>