<script setup>
import nyanzaImg from '/src/assets/images/nyanza palace.jpg'
import huyeImg from '/src/assets/images/huye.jpg'
import busanzeImg from '/src/assets/images/Rwanda Busanze Coffee.jfif'
import { useI18n } from '../settings/i18n.js'
const { t } = useI18n()

const heroImg = busanzeImg
const nyungweImg = 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80'
const akageraImg = 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80'
const landscapeImg = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80'

const attractions = [
  { name: 'Nyungwe National Park', desc: 'One of Africa\'s oldest rainforests, home to chimpanzees, monkeys, and the famous canopy walkway.', img: nyungweImg },
  { name: 'Butare (Huye)', desc: 'Rwanda\'s intellectual and cultural capital, home to the National Museum and ethnographic treasures.', img: huyeImg },
  { name: 'Nyanza Palace', desc: 'The former royal palace of the Rwandan king, offering deep insights into pre-colonial history.', img: nyanzaImg },
  { name: 'Akagera South', desc: 'The southern reaches of Akagera offer stunning landscapes and diverse wildlife viewing opportunities.', img: akageraImg }
]
</script>

<template>
  <div>
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img :src="heroImg" alt="Southern Province" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <p class="text-green-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4 reveal">{{ t('south.province') }}</p>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 reveal reveal-delay-1">{{ t('south.title') }}</h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal reveal-delay-2">{{ t('south.subtitle') }}</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">{{ t('south.exploreTitle') }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
        </div>
        <div class="max-w-4xl mx-auto text-center mb-16 reveal reveal-delay-2">
          <p class="text-gray-600 text-lg leading-relaxed">{{ t('south.desc') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(attraction, i) in attractions" :key="i" class="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-stack reveal" :class="`reveal-delay-${i + 1}`">
            <div class="h-56 overflow-hidden">
              <img :src="attraction.img" :alt="attraction.name" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ attraction.name }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ attraction.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 reveal-left">{{ t('south.whyVisitTitle') }}</h2>
            <ul class="space-y-4">
              <li v-for="(item, i) in [
                'Explore Nyungwe National Park — one of Africa\'s most ancient rainforests',
                'Discover Rwanda\'s royal history at the Nyanza Palace Museum',
                'Visit the National Museum in Butare — Rwanda\'s finest cultural collection',
                'Chimpanzee and colobus monkey trekking in Nyungwe',
                'Africa\'s highest canopy walk — 70m above the forest floor'
              ]" :key="i" class="flex items-start gap-3 reveal-left" :class="`reveal-delay-${i + 1}`">
                <span class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shrink-0 mt-1">✓</span>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="relative reveal-right">
            <img :src="landscapeImg" alt="Southern Landscape" class="rounded-3xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">{{ t('south.mapTitle') }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
          <p class="text-gray-600 text-lg mt-6 max-w-3xl mx-auto reveal reveal-delay-2">{{ t('south.mapDesc') }}</p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 reveal">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.724538444321!2d29.7444!3d-2.6011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c2c5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sHuye%2C%20Rwanda!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Southern Province Map"></iframe>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ t('south.feature1Title') }}</h3>
            <p class="text-gray-600 text-sm">{{ t('south.feature1Desc') }}</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-1">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ t('south.feature2Title') }}</h3>
            <p class="text-gray-600 text-sm">{{ t('south.feature2Desc') }}</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-2">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ t('south.feature3Title') }}</h3>
            <p class="text-gray-600 text-sm">{{ t('south.feature3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-6 reveal">{{ t('south.ctaTitle') }}</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">{{ t('south.ctaDesc') }}</p>
        <a href="/contact" class="bg-white text-green-700 px-12 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">{{ t('south.ctaButton') }}</a>
      </div>
    </section>
  </div>
</template>