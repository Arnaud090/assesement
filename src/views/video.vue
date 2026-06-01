<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../settings/i18n.js'
const { t } = useI18n()

const videos = [
  { id: 'prvGiinNSOQ', title: 'Tour du Rwanda - Cycling Race', cat: 'promo' },
  { id: 'C_9dJmH-ImM', title: 'Mountain Gorilla Family Encounter', cat: 'wildlife' },
  { id: 'D0K7sKPipmg', title: 'Rwanda - The Singapore of Africa', cat: 'city' },
  { id: 'OwWwG7Imubo', title: 'Gorilla Trekking in Rwanda', cat: 'wildlife' },
  { id: 'NWl-y1Gti6o', title: 'Bucket List Gorilla Trekking', cat: 'wildlife' },
  { id: 'tCpx12UF3Y4', title: 'Wild Mountain Gorillas Safari', cat: 'wildlife' },
  { id: 'FkAw3SMEsfo', title: 'Visit Rwanda Official Promo', cat: 'promo' },
  { id: 'dDXjGf3TYmQ', title: 'Rwanda Tourism Highlights', cat: 'promo' },
  { id: 'umu1_BWldmo', title: 'Rwanda News & Culture', cat: 'culture' },
  { id: 'A5bwLTltLOQ', title: 'Kigali City Apartment Tour', cat: 'city' },
  { id: 'PwZBaOqHmnU', title: '48 Hours in Rwanda', cat: 'culture' },
  { id: 'Mbb6Sx4h2T4', title: 'Rwanda Travel Documentary', cat: 'nature' }
]

const activeFilter = ref('all')

const categories = [
  { key: 'all', label: 'video.all' },
  { key: 'promo', label: 'video.promo' },
  { key: 'wildlife', label: 'video.wildlife' },
  { key: 'nature', label: 'video.nature' },
  { key: 'city', label: 'video.cities' },
  { key: 'culture', label: 'video.culture' },
  { key: 'adventure', label: 'video.adventure' }
]

const filteredVideos = computed(() => {
  if (activeFilter.value === 'all') return videos
  return videos.filter(v => v.cat === activeFilter.value)
})
</script>

<template>
  <div class="pt-20">
    <section class="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute top-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">{{ t('video.section') }}</p>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">{{ t('video.title') }}</h1>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto mt-6 reveal reveal-delay-2">{{ t('video.subtitle') }}</p>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-12 reveal reveal-delay-3">
          <button v-for="cat in categories" :key="cat.key" @click="activeFilter = cat.key" :class="['px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95', activeFilter === cat.key ? 'bg-green-600 text-white shadow-lg shadow-green-500/30' : 'bg-white text-gray-600 hover:text-green-600 border border-gray-200 hover:border-green-300']">
            {{ t(cat.label) }}
          </button>
        </div>

        <Transition name="fade" mode="out-in">
          <div :key="activeFilter" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(video, i) in filteredVideos" :key="i" class="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-stack">
              <div class="relative aspect-video">
                <iframe :src="`https://www.youtube.com/embed/${video.id}`" :title="video.title" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="p-5">
                <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 capitalize mb-2">{{ video.cat }}</span>
                <h3 class="font-bold text-gray-900">{{ video.title }}</h3>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  </div>
</template>