<script setup>
import viewImg from '/src/assets/images/view.jpg'
</script>

<template>
  <div class="bg-gray-50 text-gray-800">

    <!-- HERO SECTION -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center"
      :style="{ backgroundImage: `url(${viewImg})` }"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center px-6 max-w-4xl">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Discover
          <span class="text-green-400">Rwanda</span>
        </h1>

        <p class="text-lg md:text-2xl text-gray-200 mb-8">
          Experience the beauty of the land of a thousand hills,
          rich culture, wildlife, and unforgettable adventures.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold transition duration-300">
            Explore Now
          </button>

          <button class="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition duration-300 text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="py-20 px-6 md:px-20 bg-white">
      <div class="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="/src/assets/images/convertion.jpg"
            alt="Rwanda"
            class="rounded-3xl shadow-2xl"
          />
        </div>

        <div>
          <h2 class="text-4xl font-bold mb-6 text-green-600">
            Why Visit Rwanda?
          </h2>

          <p class="text-gray-600 text-lg leading-8 mb-6">
            Rwanda is one of Africa’s most beautiful and peaceful destinations.
            From breathtaking mountains and lakes to vibrant cities and wildlife,
            Rwanda offers an unforgettable experience for every traveler.
          </p>

          <div class="grid grid-cols-2 gap-4 mt-8">
            <div class="bg-green-100 p-5 rounded-2xl">
              <h3 class="font-bold text-2xl text-green-700">1000+</h3>
              <p class="text-gray-600">Beautiful Hills</p>
            </div>

            <div class="bg-blue-100 p-5 rounded-2xl">
              <h3 class="font-bold text-2xl text-blue-700">30+</h3>
              <p class="text-gray-600">Tourist Attractions</p>
            </div>

            <div class="bg-yellow-100 p-5 rounded-2xl">
              <h3 class="font-bold text-2xl text-yellow-700">4</h3>
              <p class="text-gray-600">National Parks</p>
            </div>

            <div class="bg-pink-100 p-5 rounded-2xl">
              <h3 class="font-bold text-2xl text-pink-700">24/7</h3>
              <p class="text-gray-600">Hospitality</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- DESTINATIONS -->
    <section class="py-20 px-6 md:px-20 bg-gray-100">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Top Destinations
        </h2>

        <p class="text-gray-600 text-lg">
          Explore the most beautiful places in Rwanda
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
          <img
            src="/src/assets/images/kigali.jpg"
            class="h-60 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3">Kigali City</h3>
            <p class="text-gray-600">
              Discover Rwanda’s clean and modern capital city full of culture and life.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
          <img
            src="/src/assets/images/volcano.jpg"
            class="h-60 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3">Volcanoes Park</h3>
            <p class="text-gray-600">
              Experience mountain gorillas and breathtaking volcanic landscapes.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
          <img
            src="/src/assets/images/kivu.jpg"
            class="h-60 w-full object-cover"
          />

          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3">Lake Kivu</h3>
            <p class="text-gray-600">
              Relax by one of Africa’s great lakes with amazing sunset views.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- SERVICES -->
    <section class="py-20 px-6 md:px-20 bg-white">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold mb-4">
          What We Offer
        </h2>

        <p class="text-gray-600 text-lg">
          Amazing services for your perfect trip
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8">

        <div class="bg-gray-100 p-8 rounded-3xl text-center hover:bg-green-100 transition">
          <div class="text-5xl mb-4">✈️</div>
          <h3 class="font-bold text-xl mb-3">Travel Tours</h3>
          <p class="text-gray-600">
            Guided tours to Rwanda’s best destinations.
          </p>
        </div>

        <div class="bg-gray-100 p-8 rounded-3xl text-center hover:bg-blue-100 transition">
          <div class="text-5xl mb-4">🏨</div>
          <h3 class="font-bold text-xl mb-3">Hotels</h3>
          <p class="text-gray-600">
            Comfortable and affordable accommodations.
          </p>
        </div>

        <div class="bg-gray-100 p-8 rounded-3xl text-center hover:bg-yellow-100 transition">
          <div class="text-5xl mb-4">🚗</div>
          <h3 class="font-bold text-xl mb-3">Transport</h3>
          <p class="text-gray-600">
            Safe and reliable transport services.
          </p>
        </div>

        <div class="bg-gray-100 p-8 rounded-3xl text-center hover:bg-pink-100 transition">
          <div class="text-5xl mb-4">📸</div>
          <h3 class="font-bold text-xl mb-3">Photography</h3>
          <p class="text-gray-600">
            Capture your best memories during your trip.
          </p>
        </div>

      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="py-24 bg-green-600 text-white text-center px-6">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        Start Your Adventure Today
      </h2>

      <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
        Explore Rwanda’s beauty, culture, and unforgettable experiences with us.
      </p>

      <button class="bg-white text-green-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition duration-300">
        Book Now
      </button>
    </section>

   

  </div>
</template>