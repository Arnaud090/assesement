<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 py-20"
  >
    <!-- Background Decorative Effects -->
    <div
      class="absolute top-0 left-0 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-pulse"
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
          About Us
        </h2>

        <div
          class="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6"
        ></div>

        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Welcome to
          <span class="font-bold text-green-700">Tembera U Rwanda</span> —
          your trusted partner for unforgettable travel experiences across the
          Land of a Thousand Hills.
        </p>
      </div>

      <!-- Main Content -->
      <div
        class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        <!-- Left Content -->
        <div
          class="bg-white/80 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-green-100"
        >
          <h3 class="text-3xl font-bold text-green-700 mb-6">
            Discover Rwanda With Passion
          </h3>

          <p class="text-gray-600 leading-relaxed mb-6">
            At <span class="font-semibold">Tembera U Rwanda</span>, we believe
            that travel is more than just visiting places — it’s about creating
            memories, discovering cultures, and experiencing adventure in the
            most authentic way possible.
          </p>

          <p class="text-gray-600 leading-relaxed mb-6">
            Our mission is to connect travelers with the beauty of Rwanda
            through expertly crafted tours, cultural experiences, wildlife
            adventures, and personalized travel services.
          </p>

          <p class="text-gray-600 leading-relaxed">
            Whether you are looking for gorilla trekking, luxury safaris,
            breathtaking hiking trails, or cultural immersion, we are dedicated
            to making your journey exceptional from start to finish.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-10">
            <div
              class="text-center p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition"
            >
              <h4 class="text-3xl font-extrabold text-green-700">10+</h4>
              <p class="text-gray-600 text-sm">Years Experience</p>
            </div>

            <div
              class="text-center p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition"
            >
              <h4 class="text-3xl font-extrabold text-green-700">500+</h4>
              <p class="text-gray-600 text-sm">Happy Travelers</p>
            </div>

            <div
              class="text-center p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition"
            >
              <h4 class="text-3xl font-extrabold text-green-700">24/7</h4>
              <p class="text-gray-600 text-sm">Customer Support</p>
            </div>
          </div>
        </div>

        <!-- Right Image / Feature Cards -->
        <div class="space-y-6">
          <!-- Card -->
          <div
            class="group flex items-start gap-5 bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition duration-500"
          >
            <div
              class="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 text-3xl group-hover:scale-110 transition"
            >
              🌍
            </div>

            <div>
              <h4 class="text-2xl font-bold text-green-700 mb-2">
                Authentic Experiences
              </h4>

              <p class="text-gray-600 leading-relaxed">
                Experience Rwanda’s culture, traditions, and breathtaking
                landscapes through carefully designed travel adventures.
              </p>
            </div>
          </div>

          <!-- Card -->
          <div
            class="group flex items-start gap-5 bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition duration-500"
          >
            <div
              class="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-100 text-3xl group-hover:scale-110 transition"
            >
              🦍
            </div>

            <div>
              <h4 class="text-2xl font-bold text-green-700 mb-2">
                Wildlife Adventures
              </h4>

              <p class="text-gray-600 leading-relaxed">
                Get closer to nature with gorilla trekking, safaris, and eco
                tourism experiences guided by professionals.
              </p>
            </div>
          </div>

          <!-- Card -->
          <div
            class="group flex items-start gap-5 bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition duration-500"
          >
            <div
              class="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-100 text-3xl group-hover:scale-110 transition"
            >
              ❤️
            </div>

            <div>
              <h4 class="text-2xl font-bold text-green-700 mb-2">
                Customer Satisfaction
              </h4>

              <p class="text-gray-600 leading-relaxed">
                We prioritize comfort, safety, and unforgettable memories for
                every traveler who chooses to explore Rwanda with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div
        class="mt-20 bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-10 text-center text-white shadow-2xl"
      >
        <h3 class="text-4xl font-extrabold mb-4">
          Explore Rwanda With Confidence
        </h3>

        <p class="text-green-100 text-lg max-w-2xl mx-auto mb-8">
          Join hundreds of travelers who have discovered the beauty, culture,
          and adventure of Rwanda with Tembera U Rwanda.
        </p>

        <button
          class="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition duration-300"
        >
          Start Your Journey 🌿
        </button>
      </div>
    </div>
  </section>
</template>