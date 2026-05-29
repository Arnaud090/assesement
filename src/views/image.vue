<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 py-20"
  >
    <!-- Background Effects -->
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
          Explore Rwanda Gallery
        </h2>

        <div
          class="w-28 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6"
        ></div>

        <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the breathtaking beauty, wildlife, culture, and adventure
          that make Rwanda one of Africa’s most amazing destinations.
        </p>
      </div>

      <!-- Image Gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Image Card -->
        <div
          class="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop"
            alt="Rwanda Nature"
            class="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6"
          >
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">
                Beautiful Landscapes
              </h3>
              <p class="text-green-100">
                Experience Rwanda’s stunning hills and nature.
              </p>
            </div>
          </div>
        </div>

        <!-- Image Card -->
        <div
          class="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop"
            alt="Gorilla Trekking"
            class="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6"
          >
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">
                Gorilla Trekking
              </h3>
              <p class="text-green-100">
                Meet mountain gorillas in their natural habitat.
              </p>
            </div>
          </div>
        </div>

        <!-- Image Card -->
        <div
          class="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200&auto=format&fit=crop"
            alt="Culture"
            class="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6"
          >
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">
                Rich Culture
              </h3>
              <p class="text-green-100">
                Discover traditions, music, dance, and local experiences.
              </p>
            </div>
          </div>
        </div>

        <!-- Image Card -->
        <div
          class="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
            alt="Lake Kivu"
            class="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6"
          >
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">
                Lake Adventures
              </h3>
              <p class="text-green-100">
                Relax and explore the beauty of Rwanda’s lakes.
              </p>
            </div>
          </div>
        </div>

        <!-- Image Card -->
        <div
          class="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            alt="Wildlife"
            class="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6"
          >
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">
                Wildlife Safari
              </h3>
              <p class="text-green-100">
                Enjoy unforgettable safari experiences in Rwanda.
              </p>
            </div>
          </div>
        </div>

        <!-- Image Card -->
        <div
          class="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop"
            alt="Adventure"
            class="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
          />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6"
          >
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">
                Outdoor Adventure
              </h3>
              <p class="text-green-100">
                Hiking, camping, and exciting outdoor activities await.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-20">
        <button
          class="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition duration-300"
        >
          View More Destinations 📸
        </button>
      </div>
    </div>
  </section>
</template>