<script setup>
import musanzeCavesImg from '/src/assets/images/musanzecaves.jpg'
import ruhondoImg from '/src/assets/images/ruhondo.jpg'
import north1Img from '/src/assets/images/north1.jpg'

const heroImg = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80'
const gorillaImg = 'https://images.unsplash.com/photo-1557177324-5655d5e80e2a?w=800&q=80'

const attractions = [
  { name: 'Volcanoes National Park', desc: 'Home to endangered mountain gorillas and five majestic volcanoes. A UNESCO Biosphere Reserve.', img: north1Img },
  { name: 'Gorilla Trekking', desc: 'One of the world\'s most extraordinary wildlife experiences — meet mountain gorillas up close.', img: gorillaImg },
  { name: 'Musanze Caves', desc: 'Explore ancient lava tubes and caves formed by volcanic activity thousands of years ago.', img: musanzeCavesImg },
  { name: 'Lake Ruhondo', desc: 'A stunning twin lake at the foot of the volcanoes, perfect for hiking and photography.', img: ruhondoImg }
]
</script>

<template>
  <div>
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img :src="heroImg" alt="Northern Province" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <p class="text-green-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4 reveal">Province</p>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 reveal reveal-delay-1">Northern Province</h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal reveal-delay-2">Land of volcanoes, gorillas, and breathtaking mountain scenery — the crown jewel of Rwandan adventure.</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Explore the North</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
        </div>
        <div class="max-w-4xl mx-auto text-center mb-16 reveal reveal-delay-2">
          <p class="text-gray-600 text-lg leading-relaxed">The Northern Province is Rwanda's adventure heartland. Dominated by the magnificent Virunga volcanic range, it offers world-class gorilla trekking, breathtaking hikes, and deep cultural heritage. This is where Rwanda's most iconic natural wonders await.</p>
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
            <h2 class="text-3xl font-bold text-gray-900 mb-6 reveal-left">Why Visit the North?</h2>
            <ul class="space-y-4">
              <li v-for="(item, i) in [
                'World-famous mountain gorilla trekking in Volcanoes National Park',
                'Hike volcanoes: Mount Bisoke, Karisimbi, and Muhabura',
                'Visit the Dian Fossey Gorilla Fund research center',
                'Beautiful twin lakes: Burera and Ruhondo',
                'Rich cultural heritage and traditional dance performances'
              ]" :key="i" class="flex items-start gap-3 reveal-left" :class="`reveal-delay-${i + 1}`">
                <span class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shrink-0 mt-1">✓</span>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="relative reveal-right">
            <img :src="north1Img" alt="Volcanoes" class="rounded-3xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Find the North on the Map</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
          <p class="text-gray-600 text-lg mt-6 max-w-3xl mx-auto reveal reveal-delay-2">The Northern Province is dominated by the Virunga Mountains and is home to Volcanoes National Park. Use the map below to explore the region's location and plan your visit.</p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 reveal">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.724538444321!2d29.6046!3d-1.4996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd4c5e5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sMusanze%2C%20Rwanda!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Northern Province Map"></iframe>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Volcanoes Region</h3>
            <p class="text-gray-600 text-sm">The province is home to five of the eight Virunga volcanoes, with Mount Karisimbi being the highest at 4,507 metres.</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-1">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Proximity to Kigali</h3>
            <p class="text-gray-600 text-sm">Just a 2-hour drive from Kigali, the Northern Province is the most accessible region for adventure tourism.</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-2">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Twin Lakes</h3>
            <p class="text-gray-600 text-sm">Lakes Burera and Ruhondo sit at the foot of the volcanoes, offering stunning scenery and boat excursions.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-6 reveal">Conquer the North</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">From gorilla encounters to volcanic summits, the north delivers the adventure of a lifetime.</p>
        <a href="/contact" class="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">Book Gorilla Trek</a>
      </div>
    </section>
  </div>
</template>