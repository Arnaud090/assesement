<script setup>
import { ref } from 'vue'
import canopyImg from '/src/assets/images/Nyungwe Canopy Walk.jfif'
import colobusImg from '/src/assets/images/100+ Colobus_ Primate Party.jfif'

const lightboxOpen = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')

const gallery = [
  { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop', alt: 'Beautiful Landscapes', label: 'Beautiful Landscapes', desc: 'Experience Rwanda\'s stunning hills and nature.' },
  { src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop', alt: 'Gorilla Trekking', label: 'Gorilla Trekking', desc: 'Meet mountain gorillas in their natural habitat.' },
  { src: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop', alt: 'Rich Culture', label: 'Rich Culture', desc: 'Discover traditions, music, dance, and local experiences.' },
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop', alt: 'Lake Adventures', label: 'Lake Adventures', desc: 'Relax and explore the beauty of Rwanda\'s lakes.' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', alt: 'Wildlife Safari', label: 'Wildlife Safari', desc: 'Enjoy unforgettable safari experiences in Rwanda.' },
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop', alt: 'Outdoor Adventure', label: 'Outdoor Adventure', desc: 'Hiking, camping, and exciting outdoor activities await.' },
  { src: canopyImg, alt: 'Nyungwe Canopy Walk', label: 'Nyungwe Canopy Walk', desc: 'Africa\'s highest canopy walk — suspended 70m above the forest.' },
  { src: colobusImg, alt: 'Colobus Monkeys', label: '100+ Colobus Monkeys', desc: 'Spot large troops of colobus monkeys in Nyungwe\'s rainforest.' }
]

function openLightbox(src, alt, label) {
  lightboxSrc.value = src
  lightboxAlt.value = alt
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <div class="pt-20">
    <section class="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 py-20">
      <div class="absolute top-0 left-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">Gallery</p>
          <h2 class="text-5xl font-extrabold text-green-700 mb-4 tracking-tight reveal reveal-delay-1">Explore Rwanda Gallery</h2>
          <div class="w-28 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6 reveal reveal-delay-2"></div>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto reveal reveal-delay-2">Discover the breathtaking beauty, wildlife, culture, and adventure that make Rwanda one of Africa's most amazing destinations.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div v-for="(item, i) in gallery" :key="i" class="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer reveal-scale" :class="`reveal-delay-${(i % 6) + 1}`" @click="openLightbox(item.src, item.alt, item.label)">
            <img :src="item.src" :alt="item.alt" class="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 class="text-2xl font-bold text-white mb-1">{{ item.label }}</h3>
                <p class="text-green-200 text-sm">{{ item.desc }}</p>
              </div>
            </div>
            <div class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <span class="text-white text-lg">+</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-16 reveal">
          <button class="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
            View More Destinations 📸
          </button>
        </div>
      </div>
    </section>

    <Transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 z-[9998] flex items-center justify-center bg-black/90 backdrop-blur-sm lightbox-overlay" @click.self="closeLightbox">
        <div class="relative max-w-5xl w-full mx-4 lightbox-content">
          <button @click="closeLightbox" class="absolute -top-12 right-0 text-white/70 hover:text-white text-3xl transition-colors duration-200 z-10 hover:scale-110">✕</button>
          <img :src="lightboxSrc" :alt="lightboxAlt" class="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
          <p class="text-white/70 text-center mt-4 text-sm">{{ lightboxAlt }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>