<script setup>
import kivuImg from '/src/assets/images/kivu.jpg'
import lakeKivuImg from '/src/assets/images/Lake Kivu from Rwanda.jfif'
import volcanoImg from '/src/assets/images/volcano.jpg'
import serenaImg from '/src/assets/images/Lake Kivu Serena Hotel _ Serenity on the Gisenyi___.jfif'
import canopyImg from '/src/assets/images/Nyungwe Canopy Walk.jfif'
import colobusImg from '/src/assets/images/100+ Colobus_ Primate Party.jfif'

const attractions = [
  { name: 'Lake Kivu', desc: 'One of Africa\'s Great Lakes, offering stunning beaches, island adventures, and mesmerizing sunsets.', img: kivuImg },
  { name: 'Gisenyi', desc: 'A beautiful lakeside resort town with pristine beaches, water sports, and vibrant nightlife.', img: serenaImg },
  { name: 'Nyungwe National Park', desc: 'Ancient rainforest with chimpanzee trekking, canopy walk, and breathtaking biodiversity.', img: volcanoImg },
  { name: 'Chimpanzee Trekking', desc: 'Track our closest relatives through the lush forests of Nyungwe National Park.', img: lakeKivuImg },
  { name: 'Nyungwe Canopy Walk', desc: 'Walk among the treetops — Africa\'s highest canopy walk suspended 70m above the forest floor.', img: canopyImg },
  { name: 'Colobus Monkeys', desc: 'Spot troops of 100+ colobus monkeys leaping through the ancient rainforest canopy.', img: colobusImg }
]
</script>

<template>
  <div>
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img :src="volcanoImg" alt="Western Province" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <p class="text-green-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4 reveal">Province</p>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 reveal reveal-delay-1">Western Province</h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal reveal-delay-2">Where towering volcanoes meet pristine lakes and ancient rainforests teem with life.</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Explore the West</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
        </div>
        <div class="max-w-4xl mx-auto text-center mb-16 reveal reveal-delay-2">
          <p class="text-gray-600 text-lg leading-relaxed">The Western Province is Rwanda's adventure capital. From the sparkling waters of Lake Kivu to the misty volcanoes and chimpanzee-filled forests of Nyungwe, this region offers some of the most breathtaking experiences in all of Africa.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h2 class="text-3xl font-bold text-gray-900 mb-6 reveal-left">Why Visit the West?</h2>
            <ul class="space-y-4">
              <li v-for="(item, i) in [
                'Stunning Lake Kivu beach resorts and water activities',
                'Chimpanzee trekking in Nyungwe National Park',
                'Africa\'s highest canopy walk — suspended 70m above the forest floor',
                'Beautiful tea plantations and coffee farms',
                'Cultural experiences with the region\'s diverse communities'
              ]" :key="i" class="flex items-start gap-3 reveal-left" :class="`reveal-delay-${i + 1}`">
                <span class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shrink-0 mt-1">✓</span>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="relative reveal-right">
            <img :src="colobusImg" alt="Colobus Monkeys" class="rounded-3xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-6 reveal">Experience Western Rwanda</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">From tranquil lake retreats to thrilling rainforest adventures, the west awaits you.</p>
        <a href="/contact" class="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">Plan Your Trip</a>
      </div>
    </section>
  </div>
</template>