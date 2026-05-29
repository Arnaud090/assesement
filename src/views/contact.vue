<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 py-20"
  >
    <!-- Background Glow -->
    <div
      class="absolute top-0 left-0 w-72 h-72 bg-green-300 opacity-20 rounded-full blur-3xl animate-pulse"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 opacity-20 rounded-full blur-3xl animate-pulse"
    ></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Heading -->
      <div class="text-center mb-14">
        <h2
          class="text-5xl font-extrabold text-green-700 mb-4 tracking-tight"
        >
          Contact Us
        </h2>

        <div
          class="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mb-6"
        ></div>

        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Send us your questions, feedback.
        </p>
      </div>

      <!-- Contact Card -->
      <div
        class="max-w-5xl mx-auto grid md:grid-cols-2 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-green-100"
      >
        <!-- Left Side -->
        <div
          class="bg-gradient-to-br from-green-600 to-emerald-500 text-white p-10 flex flex-col justify-center relative"
        >
          <h3 class="text-3xl font-bold mb-6">Get In Touch</h3>

          <p class="text-green-100 leading-relaxed mb-8">
            Whether you have a project idea, need support, or want to connect,
            our team is ready to help you anytime.
          </p>

          <div class="space-y-5">
            <div
              class="flex items-center gap-4 hover:translate-x-2 transition duration-300"
            >
              <div
                class="bg-white/20 p-3 rounded-full backdrop-blur-md shadow-lg"
              >
                📍
              </div>
              <span>Kigali, Rwanda</span>
            </div>

            <div
              class="flex items-center gap-4 hover:translate-x-2 transition duration-300"
            >
              <div
                class="bg-white/20 p-3 rounded-full backdrop-blur-md shadow-lg"
              >
                📞
              </div>
              <span>+250 788 654 321</span>
            </div>

            <div
              class="flex items-center gap-4 hover:translate-x-2 transition duration-300"
            >
              <div
                class="bg-white/20 p-3 rounded-full backdrop-blur-md shadow-lg"
              >
                ✉️
              </div>
              <span>ahantunyaburanga@gmail.com</span>
            </div>
          </div>

          <!-- Decorative -->
          <div
            class="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
          ></div>
        </div>

        <!-- Right Side Form -->
        <div class="p-10">
          <form class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                class="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 outline-none transition duration-300 shadow-sm hover:shadow-md"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 outline-none transition duration-300 shadow-sm hover:shadow-md"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                class="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 outline-none transition duration-300 shadow-sm hover:shadow-md resize-none"
              ></textarea>
            </div>

            <!-- Button -->
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>