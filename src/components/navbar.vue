<template>
  <nav class="bg-green-600 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    
      <img
        src="../assets/images/rwandalogo.png"
        alt="Logo"
        class="h-10 w-10"
      />

     
      <ul class="flex gap-6 text-lg items-center">

      
        <li>
          <a href="/" class="hover:text-yellow-300">
            Home
          </a>
        </li>

     
        <li>
          <a href="/about" class="hover:text-yellow-300">
            About 
          </a>
        </li>

        <li>
          <a href="/services" class="hover:text-yellow-300">
            Services
          </a>
        </li>

      
        <li>
          <a href="/contact" class="hover:text-yellow-300">
            Contact
          </a>
        </li>

        <li class="relative group">
          <a
            href="#"
            class="hover:text-yellow-300 inline-flex items-center gap-1"
          >
            Gallery <span>⌄</span>
          </a>

          <ul
            class="absolute left-0 top-full invisible opacity-0
                   group-hover:visible group-hover:opacity-100
                   transition duration-300
                   bg-white py-2 w-44 rounded shadow-lg z-50"
          >
            <li>
              <a
                href="/video"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                Videos
              </a>
            </li>

            <li>
              <a
                href="/image"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                Images
              </a>
            </li>
          </ul>
        </li>

        <li class="relative group">
          <a
            href="#"
            class="hover:text-yellow-300 inline-flex items-center gap-1"
          >
            Destination <span>⌄</span>
          </a>

          <ul
            class="absolute left-0 top-full invisible opacity-0
                   group-hover:visible group-hover:opacity-100
                   transition duration-300
                   bg-white py-2 w-52 rounded shadow-lg z-50"
          >

            <li>
              <a
                href="/west"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                Western Province
              </a>
            </li>

            <li>
              <a
                href="/east"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                Eastern Province
              </a>
            </li>

            <li>
              <a
                href="/north"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                Northern Province
              </a>
            </li>

            <li>
              <a
                href="/south"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                Southern Province
              </a>
            </li>

            <li>
              <a
                href="/kigali"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                Kigali City
              </a>
            </li>

          </ul>
        </li>
      <li class="relative group">
          <a
            href="#"
            class="hover:text-yellow-300 inline-flex items-center gap-1"
          >
      English 友
          </a>

          <ul
            class="absolute left-0 top-full invisible opacity-0
                   group-hover:visible group-hover:opacity-100
                   transition duration-300
                   bg-white py-2 w-44 rounded shadow-lg z-50"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                English
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block px-4 py-2 text-black hover:bg-green-600 hover:text-white"
              >
                Kinyarwanda
              </a>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </nav>
</template>