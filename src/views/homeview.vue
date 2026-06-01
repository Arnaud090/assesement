<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '../settings/i18n.js'
const { t } = useI18n()
import heroImg from '/src/assets/images/view.jpg'
import colobusImg from '/src/assets/images/100+ Colobus_ Primate Party.jfif'
import kigaliImg from '/src/assets/images/kigali.jpg'
import volcanoImg from '/src/assets/images/volcano.jpg'
import kivuImg from '/src/assets/images/kivu.jpg'
import akageraImg from '/src/assets/images/akagera giraffe.jpg'

const stats = ref([
  { label: 'home.statsHappy', value: 500, suffix: '+' },
  { label: 'home.statsSites', value: 30, suffix: '+' },
  { label: 'home.statsParks', value: 4, suffix: '' },
  { label: 'home.statsYears', value: 10, suffix: '+' }
])
const counted = ref(false)
const currentTestimonial = ref(0)
let autoTimer = null

const testimonials = [
  { name: 'home.testimonial1Name', role: 'home.testimonial1Role', text: 'home.testimonial1Text', rating: 5 },
  { name: 'home.testimonial2Name', role: 'home.testimonial2Role', text: 'home.testimonial2Text', rating: 5 },
  { name: 'home.testimonial3Name', role: 'home.testimonial3Role', text: 'home.testimonial3Text', rating: 5 }
]

const destinations = [
  { name: 'home.destKigali', desc: 'home.destKigaliDesc', img: kigaliImg },
  { name: 'home.destVolcanoes', desc: 'home.destVolcanoesDesc', img: volcanoImg },
  { name: 'home.destKivu', desc: 'home.destKivuDesc', img: kivuImg },
  { name: 'home.destAkagera', desc: 'home.destAkageraDesc', img: akageraImg }
]

function nextTestimonial() {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
  resetAutoTimer()
}

function prevTestimonial() {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length
  resetAutoTimer()
}

function resetAutoTimer() {
  if (autoTimer) clearInterval(autoTimer)
  autoTimer = setInterval(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
  }, 5000)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted.value) {
        counted.value = true
      }
    })
  })
  const el = document.getElementById('stats-section')
  if (el) observer.observe(el)
  resetAutoTimer()
})

onBeforeUnmount(() => {
  if (autoTimer) clearInterval(autoTimer)
})
</script>

<template>
  <div>
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img :src="heroImg" alt="Rwanda" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70"></div>
      </div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,163,74,0.15),transparent_70%)]"></div>
      <div class="relative z-10 text-center px-6 max-w-5xl">
        <p class="text-green-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">{{ t('home.heroSubtitle') }}</p>
        <h1 class="text-6xl md:text-8xl font-extrabold text-white leading-tight mb-6 animate-fade-in stagger-1">
          {{ t('home.heroTitleStart') }}
          <span class="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">{{ t('home.heroTitleHighlight') }}</span>
        </h1>
        <p class="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in stagger-2">
          {{ t('home.heroDesc') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-3">
          <a href="/services" class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 active:scale-95 inline-block">{{ t('home.exploreNow') }}</a>
          <a href="/about" class="border-2 border-white/40 hover:bg-white hover:text-gray-900 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm hover:border-white inline-block">{{ t('home.learnMore') }}</a>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div class="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div class="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>

    <section id="stats-section" class="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">{{ t('home.whySection') }}</p>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">{{ t('home.whyTitle') }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div class="relative reveal-left">
            <img :src="colobusImg" alt="Rwanda" class="rounded-3xl shadow-2xl w-full h-[500px] object-cover hover:shadow-3xl transition-shadow duration-500" />
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500/10 rounded-3xl -z-10"></div>
          </div>
          <div class="reveal-right">
            <h3 class="text-3xl font-bold text-gray-900 mb-6">{{ t('home.whySubtitle') }}</h3>
            <p class="text-gray-600 leading-relaxed mb-6">{{ t('home.whyDesc1') }}</p>
            <p class="text-gray-600 leading-relaxed mb-8">{{ t('home.whyDesc2') }}</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white p-5 rounded-2xl shadow-sm border border-green-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <p class="text-3xl font-bold text-green-600">1000+</p>
                <p class="text-gray-500 text-sm">{{ t('home.beautifulHills') }}</p>
              </div>
              <div class="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <p class="text-3xl font-bold text-blue-600">5</p>
                <p class="text-gray-500 text-sm">{{ t('home.nationalParks') }}</p>
              </div>
              <div class="bg-white p-5 rounded-2xl shadow-sm border border-yellow-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <p class="text-3xl font-bold text-yellow-600">30+</p>
                <p class="text-gray-500 text-sm">{{ t('home.touristSites') }}</p>
              </div>
              <div class="bg-white p-5 rounded-2xl shadow-sm border border-pink-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <p class="text-3xl font-bold text-pink-600">24/7</p>
                <p class="text-gray-500 text-sm">{{ t('home.hospitality') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="(stat, i) in stats" :key="i" class="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 reveal" :class="`reveal-delay-${i + 1}`">
            <p class="text-4xl md:text-5xl font-extrabold text-green-600">
              <span :class="counted ? 'animate-count-up' : ''">{{ counted ? stat.value : 0 }}</span>
              <span class="text-green-400">{{ stat.suffix }}</span>
            </p>
            <p class="text-gray-500 mt-2 font-medium">{{ t(stat.label) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">{{ t('home.exploreSection') }}</p>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">{{ t('home.topDestinations') }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(dest, i) in destinations" :key="i" class="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer h-96 card-stack reveal" :class="`reveal-delay-${i + 1}`">
            <img :src="dest.img" :alt="dest.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
              <h3 class="text-2xl font-bold text-white mb-2">{{ t(dest.name) }}</h3>
              <p class="text-green-200 text-sm opacity-0 group-hover:opacity-100 transition duration-300">{{ t(dest.desc) }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-12 reveal">
          <a href="/image" class="inline-block border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95">{{ t('home.viewAll') }}</a>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">{{ t('home.testimonialSection') }}</p>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">{{ t('home.testimonialTitle') }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
        </div>
        <div class="max-w-3xl mx-auto relative reveal-scale">
          <div class="bg-white rounded-3xl p-10 shadow-2xl border border-green-100 text-center relative">
            <div class="text-6xl text-green-200 mb-6 font-serif">"</div>
            <Transition name="fade" mode="out-in">
              <div :key="currentTestimonial">
                <p class="text-lg text-gray-600 leading-relaxed mb-8 italic">{{ t(testimonials[currentTestimonial].text) }}</p>
                <div class="flex justify-center gap-1 mb-4">
                  <span v-for="n in testimonials[currentTestimonial].rating" :key="n" class="text-yellow-400 text-xl">★</span>
                </div>
                <h4 class="font-bold text-gray-900 text-lg">{{ t(testimonials[currentTestimonial].name) }}</h4>
                <p class="text-green-600 text-sm">{{ t(testimonials[currentTestimonial].role) }}</p>
              </div>
            </Transition>
          </div>
          <button @click="prevTestimonial" class="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-200 transition-all duration-300 hover:scale-110">‹</button>
          <button @click="nextTestimonial" class="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-green-600 hover:border-green-200 transition-all duration-300 hover:scale-110">›</button>
          <div class="flex justify-center gap-2 mt-6">
            <button v-for="(t, i) in testimonials" :key="i" @click="currentTestimonial = i; resetAutoTimer()" :class="['w-3 h-3 rounded-full transition-all duration-300', i === currentTestimonial ? 'bg-green-500 w-8' : 'bg-gray-300 hover:bg-gray-400']"></button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-center px-6 relative overflow-hidden animate-gradient">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 reveal">{{ t('home.ctaTitle') }}</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">{{ t('home.ctaDesc') }}</p>
        <a href="/contact" class="bg-white text-green-700 px-12 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">{{ t('home.ctaButton') }}</a>
      </div>
    </section>
  </div>
</template>