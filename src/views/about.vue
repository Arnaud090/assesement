<script setup>
import { useI18n } from '../settings/i18n.js'
const { t } = useI18n()

const milestones = [
  { year: 2016, title: 'about.milestone1Title', desc: 'about.milestone1Desc' },
  { year: 2018, title: 'about.milestone2Title', desc: 'about.milestone2Desc' },
  { year: 2020, title: 'about.milestone3Title', desc: 'about.milestone3Desc' },
  { year: 2022, title: 'about.milestone4Title', desc: 'about.milestone4Desc' },
  { year: 2024, title: 'about.milestone5Title', desc: 'about.milestone5Desc' },
  { year: 2026, title: 'about.milestone6Title', desc: 'about.milestone6Desc' }
]
</script>

<template>
  <div class="pt-20">
    <section class="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute top-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">{{ t('about.whoWeAre') }}</p>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">{{ t('about.aboutUs') }}</h1>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
        </div>
        <div class="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div class="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-2xl border border-green-100 reveal-left">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ t('about.subtitle') }}</h2>
            <p class="text-gray-600 leading-relaxed mb-4">{{ t('about.desc1') }}</p>
            <p class="text-gray-600 leading-relaxed mb-4">{{ t('about.desc2') }}</p>
            <p class="text-gray-600 leading-relaxed">{{ t('about.desc3') }}</p>
          </div>
          <div class="grid grid-cols-2 gap-4 reveal-right">
            <div class="bg-white p-6 rounded-2xl shadow-md border border-green-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p class="text-4xl font-extrabold text-green-600">10+</p>
              <p class="text-gray-500 text-sm mt-1">{{ t('about.yearsExp') }}</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-md border border-green-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p class="text-4xl font-extrabold text-green-600">500+</p>
              <p class="text-gray-500 text-sm mt-1">{{ t('about.travelers') }}</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-md border border-green-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p class="text-4xl font-extrabold text-green-600">5</p>
              <p class="text-gray-500 text-sm mt-1">{{ t('about.provinces') }}</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-md border border-green-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p class="text-4xl font-extrabold text-green-600">24/7</p>
              <p class="text-gray-500 text-sm mt-1">{{ t('about.support') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">{{ t('about.journey') }}</p>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">{{ t('about.timeline') }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
        </div>
        <div class="max-w-4xl mx-auto relative">
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-emerald-400 to-green-400 hidden md:block"></div>
          <div v-for="(m, i) in milestones" :key="i" class="relative pl-0 md:pl-20 pb-12 last:pb-0 reveal" :class="`reveal-delay-${i + 1}`">
            <div class="hidden md:flex absolute left-4 top-1 w-8 h-8 rounded-full bg-green-500 text-white items-center justify-center text-xs font-bold shadow-lg shadow-green-500/30">✓</div>
            <div :class="['bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-stack', i % 2 === 0 ? 'md:mr-20' : 'md:ml-20']">
              <span class="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-3">{{ m.year }}</span>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t(m.title) }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ t(m.desc) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="max-w-3xl mx-auto relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 reveal">{{ t('about.ctaTitle') }}</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">{{ t('about.ctaDesc') }}</p>
        <a href="/services" class="bg-white text-green-700 px-12 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">{{ t('about.ctaButton') }}</a>
      </div>
    </section>
  </div>
</template>
