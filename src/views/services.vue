<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 py-20"
  >
    <!-- Background Effects -->
    <div
      class="absolute top-0 left-0 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-pulse"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2
          class="text-5xl font-extrabold text-green-700 mb-4 tracking-tight"
        >
          Our Services
        </h2>

        <div
          class="w-28 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6"
        ></div>

        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Discover Rwanda like never before with our premium tourism and travel
          services designed to create unforgettable experiences.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Service Card -->
        <div
          class="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-green-100 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 text-3xl mb-6 group-hover:scale-110 transition"
          >
            🌍
          </div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Guided Tours
          </h3>

          <p class="text-gray-600 leading-relaxed">
            Explore Rwanda’s most beautiful destinations with experienced local
            guides who provide rich historical and cultural insights.
          </p>
        </div>

        <!-- Service Card -->
        <div
          class="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-green-100 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-100 text-3xl mb-6 group-hover:scale-110 transition"
          >
            🦍
          </div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Gorilla Trekking
          </h3>

          <p class="text-gray-600 leading-relaxed">
            Experience the thrill of meeting mountain gorillas in their natural
            habitat with safe and unforgettable trekking adventures.
          </p>
        </div>

        <!-- Service Card -->
        <div
          class="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-green-100 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 text-3xl mb-6 group-hover:scale-110 transition"
          >
            🏕️
          </div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Adventure Activities
          </h3>

          <p class="text-gray-600 leading-relaxed">
            Enjoy hiking, camping, zip-lining, kayaking, and other exciting
            outdoor adventures across Rwanda’s landscapes.
          </p>
        </div>

        <!-- Service Card -->
        <div
          class="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-green-100 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-100 text-3xl mb-6 group-hover:scale-110 transition"
          >
            🏨
          </div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Hotel Booking
          </h3>

          <p class="text-gray-600 leading-relaxed">
            We arrange luxury, mid-range, and budget accommodations tailored to
            your comfort and travel preferences.
          </p>
        </div>

        <!-- Service Card -->
        <div
          class="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-green-100 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 text-3xl mb-6 group-hover:scale-110 transition"
          >
            🚐
          </div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Transportation
          </h3>

          <p class="text-gray-600 leading-relaxed">
            Comfortable and reliable transport services including airport
            pickups, private tours, and intercity travel.
          </p>
        </div>

        <!-- Service Card -->
        <div
          class="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-green-100 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-100 text-3xl mb-6 group-hover:scale-110 transition"
          >
            📅
          </div>

          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Custom Itineraries
          </h3>

          <p class="text-gray-600 leading-relaxed">
            Personalized travel plans crafted around your interests, budget,
            and preferred travel experience.
          </p>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div
        class="mt-20 bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-10 text-center text-white shadow-2xl"
      >
        <h3 class="text-4xl font-extrabold mb-4">
          Ready for Your Rwanda Adventure?
        </h3>

        <p class="text-green-100 text-lg max-w-2xl mx-auto mb-8">
          Let us help you create memories that last a lifetime with our
          world-class tourism services.
        </p>

        <button
          class="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition duration-300"
        >
          Explore Packages ✈️
        </button>
      </div>
    </div>
  </section>
</template>