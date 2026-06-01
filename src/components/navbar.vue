<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '../settings/i18n.js'

const route = useRoute()
const { t, currentLang, setLanguage, availableLanguages } = useI18n()
const mobileOpen = ref(false)
const scrolled = ref(false)

const isActive = (path) => route.path === path
const langDropdownOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function switchLang(code) {
  setLanguage(code)
  langDropdownOpen.value = false
  mobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['fixed top-0 left-0 right-0 z-[999] transition-all duration-500', scrolled ? 'glass-dark shadow-2xl' : 'bg-green-700/90 backdrop-blur-sm']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 sm:h-20">

        <a href="/" class="flex items-center gap-3 group">
          <img src="../assets/images/rwandalogo.png" alt="Logo" class="h-9 w-9 sm:h-10 sm:w-10 transition-transform duration-300 group-hover:scale-110" />
          <span class="text-white font-bold text-base sm:text-lg tracking-tight hidden sm:block">Tembera u Rwanda</span>
        </a>

        <div class="hidden lg:flex items-center gap-1">
          <a href="/" :class="['px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10', isActive('/') ? 'text-yellow-300' : 'text-white/90 hover:text-yellow-300']">{{ t('nav.home') }}</a>
          <a href="/about" :class="['px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10', isActive('/about') ? 'text-yellow-300' : 'text-white/90 hover:text-yellow-300']">{{ t('nav.about') }}</a>
          <a href="/services" :class="['px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10', isActive('/services') ? 'text-yellow-300' : 'text-white/90 hover:text-yellow-300']">{{ t('nav.services') }}</a>

          <div class="relative group">
            <button class="px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 inline-flex items-center gap-1 cursor-pointer" :class="isActive('/video') || isActive('/image') ? 'text-yellow-300' : 'text-white/90 hover:text-yellow-300'">
              {{ t('nav.gallery') }} <span class="text-xs transition-transform duration-300 group-hover:rotate-180 inline-block">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div class="bg-white/95 backdrop-blur-xl rounded-2xl py-2 w-44 shadow-2xl border border-white/20 overflow-hidden">
                <a href="/video" :class="['block px-5 py-2.5 text-sm font-medium transition-all duration-200', isActive('/video') ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700']">{{ t('nav.videos') }}</a>
                <a href="/image" :class="['block px-5 py-2.5 text-sm font-medium transition-all duration-200', isActive('/image') ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700']">{{ t('nav.images') }}</a>
              </div>
            </div>
          </div>

          <div class="relative group">
            <button class="px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 inline-flex items-center gap-1 cursor-pointer" :class="isActive('/west') || isActive('/east') || isActive('/north') || isActive('/south') || isActive('/kigali') ? 'text-yellow-300' : 'text-white/90 hover:text-yellow-300'">
              {{ t('nav.destinations') }} <span class="text-xs transition-transform duration-300 group-hover:rotate-180 inline-block">▼</span>
            </button>
            <div class="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div class="bg-white/95 backdrop-blur-xl rounded-2xl py-2 w-52 shadow-2xl border border-white/20 overflow-hidden">
                <a href="/west" :class="['block px-5 py-2.5 text-sm font-medium transition-all duration-200', isActive('/west') ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700']">{{ t('nav.western') }}</a>
                <a href="/east" :class="['block px-5 py-2.5 text-sm font-medium transition-all duration-200', isActive('/east') ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700']">{{ t('nav.eastern') }}</a>
                <a href="/north" :class="['block px-5 py-2.5 text-sm font-medium transition-all duration-200', isActive('/north') ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700']">{{ t('nav.northern') }}</a>
                <a href="/south" :class="['block px-5 py-2.5 text-sm font-medium transition-all duration-200', isActive('/south') ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700']">{{ t('nav.southern') }}</a>
                <a href="/kigali" :class="['block px-5 py-2.5 text-sm font-medium transition-all duration-200', isActive('/kigali') ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700']">{{ t('nav.kigali') }}</a>
              </div>
            </div>
          </div>

          <a href="/contact" :class="['px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10', isActive('/contact') ? 'text-yellow-300' : 'text-white/90 hover:text-yellow-300']">{{ t('nav.contact') }}</a>

          <div class="relative group" @mouseenter="langDropdownOpen = true" @mouseleave="langDropdownOpen = false">
            <button class="text-white/90 hover:text-yellow-300 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 inline-flex items-center gap-1 cursor-pointer">
              {{ availableLanguages.find(l => l.code === currentLang)?.label || 'English' }} <span class="text-xs transition-transform duration-300 group-hover:rotate-180 inline-block">▼</span>
            </button>
            <div class="absolute right-0 top-full pt-2" :class="langDropdownOpen ? 'visible opacity-100' : 'invisible opacity-0'">
              <div class="bg-white/95 backdrop-blur-xl rounded-2xl py-2 w-40 shadow-2xl border border-white/20 overflow-hidden transition-all duration-300" :class="langDropdownOpen ? 'translate-y-0' : 'translate-y-2'">
                <a v-for="lang in availableLanguages" :key="lang.code" href="#" @click.prevent="switchLang(lang.code)" :class="['block px-5 py-2.5 text-sm font-medium transition-all duration-200', currentLang === lang.code ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-green-50 hover:text-green-700']">{{ lang.label }}</a>
              </div>
            </div>
          </div>
        </div>

        <button @click="mobileOpen = !mobileOpen" class="lg:hidden relative w-10 h-10 flex items-center justify-center text-white" aria-label="Toggle menu">
          <div class="w-6 flex flex-col gap-1.5">
            <span :class="['block h-0.5 bg-white rounded-full transition-all duration-300', mobileOpen ? 'rotate-45 translate-y-2' : '']"></span>
            <span :class="['block h-0.5 bg-white rounded-full transition-all duration-300', mobileOpen ? 'opacity-0' : '']"></span>
            <span :class="['block h-0.5 bg-white rounded-full transition-all duration-300', mobileOpen ? '-rotate-45 -translate-y-2' : '']"></span>
          </div>
        </button>
      </div>
    </div>

    <Transition name="slide-down">
      <div v-if="mobileOpen" class="lg:hidden border-t border-white/10 bg-green-800/95 backdrop-blur-xl">
        <div class="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <a href="/" @click="mobileOpen = false" :class="['block px-4 py-3 rounded-xl text-sm font-medium transition-all', isActive('/') ? 'text-yellow-300 bg-white/10' : 'text-white/90 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.home') }}</a>
          <a href="/about" @click="mobileOpen = false" :class="['block px-4 py-3 rounded-xl text-sm font-medium transition-all', isActive('/about') ? 'text-yellow-300 bg-white/10' : 'text-white/90 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.about') }}</a>
          <a href="/services" @click="mobileOpen = false" :class="['block px-4 py-3 rounded-xl text-sm font-medium transition-all', isActive('/services') ? 'text-yellow-300 bg-white/10' : 'text-white/90 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.services') }}</a>
          <a href="/contact" @click="mobileOpen = false" :class="['block px-4 py-3 rounded-xl text-sm font-medium transition-all', isActive('/contact') ? 'text-yellow-300 bg-white/10' : 'text-white/90 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.contact') }}</a>
          <div class="pt-2 pb-1">
            <p class="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">{{ t('nav.gallery') }}</p>
            <a href="/video" @click="mobileOpen = false" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-all', isActive('/video') ? 'text-yellow-300 bg-white/10' : 'text-white/80 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.videos') }}</a>
            <a href="/image" @click="mobileOpen = false" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-all', isActive('/image') ? 'text-yellow-300 bg-white/10' : 'text-white/80 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.images') }}</a>
          </div>
          <div class="pt-2 pb-1">
            <p class="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">{{ t('nav.destinations') }}</p>
            <a href="/west" @click="mobileOpen = false" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-all', isActive('/west') ? 'text-yellow-300 bg-white/10' : 'text-white/80 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.western') }}</a>
            <a href="/east" @click="mobileOpen = false" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-all', isActive('/east') ? 'text-yellow-300 bg-white/10' : 'text-white/80 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.eastern') }}</a>
            <a href="/north" @click="mobileOpen = false" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-all', isActive('/north') ? 'text-yellow-300 bg-white/10' : 'text-white/80 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.northern') }}</a>
            <a href="/south" @click="mobileOpen = false" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-all', isActive('/south') ? 'text-yellow-300 bg-white/10' : 'text-white/80 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.southern') }}</a>
            <a href="/kigali" @click="mobileOpen = false" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-all', isActive('/kigali') ? 'text-yellow-300 bg-white/10' : 'text-white/80 hover:text-yellow-300 hover:bg-white/5']">{{ t('nav.kigali') }}</a>
          </div>
          <div class="pt-2 pb-1">
            <p class="px-4 text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">{{ t('nav.language') }}</p>
            <a v-for="lang in availableLanguages" :key="lang.code" href="#" @click.prevent="switchLang(lang.code)" :class="['block px-4 py-2.5 rounded-xl text-sm font-medium transition-all', currentLang === lang.code ? 'text-yellow-300' : 'text-white/80 hover:text-yellow-300 hover:bg-white/5']">{{ lang.label }}</a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>