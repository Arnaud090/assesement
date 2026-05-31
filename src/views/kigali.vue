<script setup>
import kigaliImg from '/src/assets/images/kigali.jpg'
import kigali2Img from '/src/assets/images/Kigali - Rwanda.jfif'
import viewImg from '/src/assets/images/view.jpg'
import genocideImg from '/src/assets/images/genocide.jfif'

const attractions = [
  {
    name: 'Kigali City Center',
    desc: 'A modern, clean capital with stunning hilltop views. The city center blends contemporary architecture with rolling hills, home to government buildings, hotels, and restaurants serving local and international cuisine.',
    img: kigaliImg
  },
  {
    name: 'Nyandungu Park',
    desc: 'A 120-hectare urban wetland eco-park in Kigali, opened in 2022. Features walking trails, medicinal gardens, bird hides, and scenic lakes with over 70 bird species. A peaceful escape from the city bustle.',
    img: kigali2Img
  },
  {
    name: 'Kigali Genocide Memorial',
    desc: 'A powerful tribute to the victims of the 1994 genocide. This UNESCO World Heritage site in Gisozi features exhibits on Rwanda\'s history, burial plots for over 250,000 victims, and a peaceful garden for reflection.',
    img: genocideImg
  }
]
</script>

<template>
  <div>
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img :src="kigaliImg" alt="Kigali" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70"></div>
      <div class="relative z-10 text-center px-6 max-w-4xl">
        <p class="text-green-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4 reveal">City</p>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 reveal reveal-delay-1">Kigali City</h1>
        <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto reveal reveal-delay-2">Africa's cleanest city — a vibrant capital of hills, innovation, culture, and warm Rwandan hospitality.</p>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Explore Kigali</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
        </div>
        <div class="max-w-4xl mx-auto text-center mb-16 reveal reveal-delay-2">
          <p class="text-gray-600 text-lg leading-relaxed">Kigali is the sparkling heart of Rwanda — a city of rolling hills, tree-lined boulevards, and a vibrant cultural scene. Known as Africa's cleanest city, it blends modern development with deep tradition. From world-class restaurants to lively markets and memorials, Kigali offers something for every traveler.</p>
          <p class="text-gray-600 text-lg leading-relaxed mt-6">Rebuilt after the 1994 genocide, Kigali today stands as a model of reconciliation and progress. Its streets are remarkably clean, plastic bags are banned, and it is considered one of the safest cities in Africa. With over one million people spread across multiple hills, the city offers panoramic views at every turn and a growing arts and food scene.</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(attraction, i) in attractions" :key="i" class="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 card-stack reveal" :class="`reveal-delay-${i + 1}`">
            <div class="h-56 overflow-hidden">
              <img :src="attraction.img" :alt="attraction.name" class="w-full h-full group-hover:scale-110 transition duration-700" :class="attraction.name === 'Kigali Genocide Memorial' ? 'object-contain bg-gray-100' : 'object-cover'" />
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
            <h2 class="text-3xl font-bold text-gray-900 mb-6 reveal-left">Why Visit Kigali?</h2>
            <ul class="space-y-4">
              <li v-for="(item, i) in [
                'Recognized as Africa\'s cleanest and safest city',
                'World-class dining with international and local cuisine',
                'Vibrant arts scene with galleries, craft markets, and cultural centers',
                'Kigali Genocide Memorial — a UNESCO World Heritage site',
                'Stunning panoramic views from the city\'s many hilltops'
              ]" :key="i" class="flex items-start gap-3 reveal-left" :class="`reveal-delay-${i + 1}`">
                <span class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs shrink-0 mt-1">✓</span>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="relative reveal-right">
            <img :src="kigali2Img" alt="Kigali View" class="rounded-3xl shadow-2xl w-full h-96 object-cover hover:shadow-3xl transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 reveal">Find Kigali on the Map</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-1"></div>
          <p class="text-gray-600 text-lg mt-6 max-w-3xl mx-auto reveal reveal-delay-2">Kigali is centrally located in Rwanda, making it the perfect starting point for exploring the country. The city sits at 1,567 metres elevation, giving it a pleasant climate year-round. Use the map below to explore its location.</p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255202.8414425031!2d29.999094436381465!3d-1.9705786405959372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x52b7d7c5a2a9c9c0!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Kigali City Map"
          ></iframe>
        </div>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div v-for="(item, i) in [
            { title: 'Central Location', desc: 'Kigali is within a 2-4 hour drive from most major attractions in Rwanda, including Akagera National Park and Nyungwe Forest.', icon: 'map-pin' },
            { title: 'Kigali International Airport', desc: 'Rwanda\'s main international gateway connects the city to major hubs across Africa, Europe, the Middle East, and Asia.', icon: 'plane' },
            { title: 'Climate & Weather', desc: 'Kigali enjoys a subtropical highland climate with average temperatures between 18-27°C (64-81°F) year-round.', icon: 'sun' }
          ]" :key="i" class="text-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 hover:-translate-y-1 reveal" :class="`reveal-delay-${i + 1}`">
            <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg v-if="item.icon === 'map-pin'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <svg v-else-if="item.icon === 'plane'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              <svg v-else-if="item.icon === 'sun'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-sm">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-center px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div class="relative z-10 max-w-3xl mx-auto">
        <h2 class="text-4xl font-bold text-white mb-6 reveal">Discover Kigali</h2>
        <p class="text-lg text-green-100 mb-10 reveal reveal-delay-1">Experience the energy, warmth, and beauty of Rwanda's remarkable capital city.</p>
        <a href="/contact" class="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl inline-block reveal reveal-delay-2">Plan Your Visit</a>
      </div>
    </section>
  </div>
</template>