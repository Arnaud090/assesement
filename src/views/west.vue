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

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Find the West on the Map</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
          <p class="text-gray-600 text-lg mt-6 max-w-3xl mx-auto reveal reveal-delay-2">The Western Province hugs the shores of Lake Kivu and is home to Nyungwe National Park and the Congo Nile Trail. Use the map below to explore the region.</p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 reveal">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.724538444321!2d29.3480!3d-2.0580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c2c5e5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sKarongi%2C%20Rwanda!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Western Province Map"></iframe>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Lake Kivu Shoreline</h3>
            <p class="text-gray-600 text-sm">Lake Kivu is one of Africa's Great Lakes, offering beautiful beaches, resort towns like Kibuye and Gisenyi, and boat trips to Napoléon Island.</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-1">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Congo Nile Trail</h3>
            <p class="text-gray-600 text-sm">A 227-km multi-day hiking/biking trail along Lake Kivu that is considered one of Africa's most scenic routes.</p>
          </div>
          <div class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal reveal-delay-2">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Nyungwe National Park</h3>
            <p class="text-gray-600 text-sm">Spanning the southern part of the province, Nyungwe is one of Africa's most ancient montane rainforests.</p>
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