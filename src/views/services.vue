<script setup>
import { ref } from 'vue'
import { useI18n } from '../settings/i18n.js'

const { t } = useI18n()

const flipped = ref(null)

const services = [
  { icon: 'globe', title: 'services.guidedTours', desc: 'services.guidedToursDesc' },
  { icon: 'gorilla', title: 'services.gorillaTrekking', desc: 'services.gorillaTrekkingDesc' },
  { icon: 'tent', title: 'services.adventure', desc: 'services.adventureDesc' },
  { icon: 'hotel', title: 'services.hotelBooking', desc: 'services.hotelBookingDesc' },
  { icon: 'truck', title: 'services.transportation', desc: 'services.transportationDesc' },
  { icon: 'calendar', title: 'services.customItineraries', desc: 'services.customItinerariesDesc' }
]

const faqs = ref([
  { q: 'services.faqQ1', a: 'services.faqA1', open: false },
  { q: 'services.faqQ2', a: 'services.faqA2', open: false },
  { q: 'services.faqQ3', a: 'services.faqA3', open: false },
  { q: 'services.faqQ4', a: 'services.faqA4', open: false },
  { q: 'services.faqQ5', a: 'services.faqA5', open: false }
])

function toggleFlip(index) {
  flipped.value = flipped.value === index ? null : index
}

function toggleFaq(index) {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <div class="pt-20">
    <section class="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute top-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">{{ t('services.whatWeOffer') }}</p>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">{{ t('services.ourServices') }}</h1>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto mt-6 reveal reveal-delay-2">{{ t('services.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, i) in services" :key="i" @click="toggleFlip(i)" class="group perspective h-80 cursor-pointer reveal" :class="`reveal-delay-${i + 1}`">
            <div :class="['relative w-full h-full transition-transform duration-700 preserve-3d', flipped === i ? 'rotate-y-180' : '']">
              <div class="absolute inset-0 backface-hidden bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border border-green-100 flex flex-col items-center justify-center text-center">
                <div class="w-20 h-20 flex items-center justify-center rounded-2xl bg-green-100 mb-6 group-hover:scale-110 transition">
                  <svg v-if="service.icon === 'globe'" class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12h20"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                  <svg v-else-if="service.icon === 'gorilla'" class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  <svg v-else-if="service.icon === 'tent'" class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21l9-18 9 18"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21h18"/></svg>
                  <svg v-else-if="service.icon === 'hotel'" class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  <svg v-else-if="service.icon === 'truck'" class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1m9 0l2 1m-2-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v3m8 1a2 2 0 100-4 2 2 0 000 4zM5 17a2 2 0 100-4 2 2 0 000 4z"/></svg>
                  <svg v-else-if="service.icon === 'calendar'" class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ t(service.title) }}</h3>
                <p class="text-green-600 text-sm font-medium">{{ t('services.clickToLearn') }}</p>
              </div>
              <div class="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center text-white">
                <h3 class="text-2xl font-bold mb-4">{{ t(service.title) }}</h3>
                <p class="text-green-100 leading-relaxed">{{ t(service.desc) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">{{ t('services.faqSection') }}</p>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">{{ t('services.faqTitle') }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
        </div>
        <div class="space-y-4">
          <div v-for="(faq, i) in faqs" :key="i" class="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md reveal" :class="`reveal-delay-${i + 1}`">
            <button @click="toggleFaq(i)" class="w-full px-8 py-5 flex items-center justify-between text-left font-semibold text-gray-900 hover:text-green-600 transition">
              <span>{{ t(faq.q) }}</span>
              <span :class="['text-xl transition-transform duration-300', faq.open ? 'rotate-45' : '']" class="text-green-500">+</span>
            </button>
            <Transition name="fade">
              <div v-if="faq.open" class="px-8 pb-5">
                <p class="text-gray-600 leading-relaxed">{{ t(faq.a) }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="max-w-3xl mx-auto relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 reveal">{{ t('services.ctaTitle') }}</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">{{ t('services.ctaDesc') }}</p>
        <a href="/contact" class="bg-white text-green-700 px-12 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">{{ t('services.ctaButton') }}</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.perspective { perspective: 1000px; }
.preserve-3d { transform-style: preserve-3d; }
.backface-hidden { backface-visibility: hidden; }
.rotate-y-180 { transform: rotateY(180deg); }
</style>