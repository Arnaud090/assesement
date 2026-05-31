<script setup>
import nyanzaImg from '/src/assets/images/nyanza palace.jpg'
import huyeImg from '/src/assets/images/huye.jpg'
import busanzeImg from '/src/assets/images/Rwanda Busanze Coffee.jfif'

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
        <p class="text-green-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4 reveal">Province</p>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 reveal reveal-delay-1">Southern Province</h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal reveal-delay-2">Where Rwanda's rich cultural heritage meets ancient rainforests and rolling green hills.</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Explore the South</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
        </div>
        <div class="max-w-4xl mx-auto text-center mb-16 reveal reveal-delay-2">
          <p class="text-gray-600 text-lg leading-relaxed">The Southern Province is Rwanda's cultural heartland. From the ancient rainforest of Nyungwe to the historic royal palace of Nyanza, this region offers a perfect blend of natural beauty and deep cultural heritage. It's a place where travelers connect with Rwanda's soul.</p>
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
            <h2 class="text-3xl font-bold text-gray-900 mb-6 reveal-left">Why Visit the South?</h2>
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

    <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-6 reveal">Discover the South</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">From rainforest adventures to royal history, the south is a journey through Rwanda's heart and soul.</p>
        <a href="/contact" class="bg-white text-green-700 px-12 py-4 rounded-full font-bold text-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">Start Exploring</a>
      </div>
    </section>
  </div>
</template>