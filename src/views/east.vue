<script setup>
import easternImg from '/src/assets/images/eastern (2).jfif'
import img2Img from '/src/assets/images/img2.jpg'
import akageraImg from '/src/assets/images/Akagera National Park Safari.jfif'
import muhaziImg from '/src/assets/images/UMVA Muhazi.jfif'
import hippoImg from '/src/assets/images/hippos safari.jfif'

const attractions = [
  { name: 'Akagera National Park', desc: 'Rwanda\'s only savanna park with the Big Five — lions, elephants, buffalo, leopards, and rhinos.', img: akageraImg },
  { name: 'Lake Muhazi', desc: 'A stunning ribbon lake stretching across the eastern plains, perfect for boat rides and bird watching.', img: hippoImg },
  { name: 'Muhazi', desc: 'A charming lakeside area known for serene views, community tourism, and beautiful landscapes.', img: muhaziImg },
  { name: 'Nyagatare Ranch', desc: 'Experience Rwanda\'s cattle culture and vast open landscapes in the heart of the east.', img: easternImg }
]
</script>

<template>
  <div>
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img :src="easternImg" alt="Eastern Province" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <p class="text-green-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4 reveal">Province</p>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 reveal reveal-delay-1">Eastern Province</h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal reveal-delay-2">Discover the vast savannas, big game safaris, and the wild beauty of Rwanda's eastern reaches.</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Explore the East</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
        </div>
        <div class="max-w-4xl mx-auto text-center mb-16 reveal reveal-delay-2">
          <p class="text-gray-600 text-lg leading-relaxed">The Eastern Province is Rwanda's largest region, known for its rolling savannas, wildlife-rich national parks, and vibrant agricultural landscapes. It offers a dramatically different side of Rwanda — wide open skies, golden plains, and thrilling safari adventures.</p>
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
            <h2 class="text-3xl font-bold text-gray-900 mb-6 reveal-left">Why Visit the East?</h2>
            <ul class="space-y-4">
              <li v-for="(item, i) in [
                'Home to Akagera National Park — Rwanda\'s only Big Five safari destination',
                'Wide open landscapes offering spectacular sunrise and sunset views',
                'Rich agricultural heritage — known as Rwanda\'s breadbasket',
                'Cultural experiences with the region\'s pastoral communities',
                'Bird watching paradise with over 500 recorded species'
              ]" :key="i" class="flex items-start gap-3 reveal-left" :class="`reveal-delay-${i + 1}`">
                <span class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shrink-0 mt-1">✓</span>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="relative reveal-right">
            <img :src="hippoImg" alt="Hippos Safari" class="rounded-3xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Find the East on the Map</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
          <p class="text-gray-600 text-lg mt-6 max-w-3xl mx-auto reveal reveal-delay-2">The Eastern Province is Rwanda's largest region, bordering Tanzania. It is home to Akagera National Park and vast savanna landscapes. Use the map below to explore the area.</p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 reveal">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.724538444321!2d30.3292!3d-1.2938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd4c5e5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sNyagatare%2C%20Rwanda!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Eastern Province Map"></iframe>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Akagera National Park</h3>
            <p class="text-gray-600 text-sm">Rwanda's only Big Five safari destination spans over 1,200 square kilometres of savanna, wetlands, and lakes.</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-1">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1m9 0l2 1m-2-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v3m8 1a2 2 0 100-4 2 2 0 000 4zM5 17a2 2 0 100-4 2 2 0 000 4z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Border Region</h3>
            <p class="text-gray-600 text-sm">The east shares a long border with Tanzania, with the Akagera River forming part of the natural boundary.</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-2">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Getting There</h3>
            <p class="text-gray-600 text-sm">A 2.5-hour drive from Kigali, the eastern province is easily accessible via paved roads.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-6 reveal">Plan Your Eastern Safari</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">From thrilling game drives to serene lake views, the east offers an unforgettable Rwandan adventure.</p>
        <a href="/contact" class="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">Book a Safari</a>
      </div>
    </section>
  </div>
</template>