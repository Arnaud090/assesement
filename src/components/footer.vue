<script setup>
import { useI18n } from '../settings/i18n.js'
const { t } = useI18n()
</script>

<template>
  <footer class="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white relative overflow-hidden">
    <div class="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-6 py-16 relative z-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        <div class="reveal">
          <div class="flex items-center gap-3 mb-5">
            <img src="../assets/images/rwandalogo.png" alt="Rwanda" class="h-10 w-10" />
            <h3 class="text-yellow-300 text-xl font-bold font-[Playfair_Display]">Tembera U Rwanda</h3>
          </div>
          <p class="text-green-200 text-sm leading-relaxed mb-6">{{ t('footer.tagline') }}</p>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-xl flex items-center justify-center text-white hover:text-green-900 transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-xl flex items-center justify-center text-white hover:text-green-900 transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-xl flex items-center justify-center text-white hover:text-green-900 transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-xl flex items-center justify-center text-white hover:text-green-900 transition-all duration-300 hover:scale-110">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        <div class="reveal reveal-delay-1">
          <h3 class="text-yellow-300 text-lg font-bold mb-5 font-[Playfair_Display]">{{ t('footer.quickLinks') }}</h3>
          <ul class="space-y-3">
            <li><a href="/" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.home') }}</a></li>
            <li><a href="/about" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.about') }}</a></li>
            <li><a href="/services" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.services') }}</a></li>
            <li><a href="/contact" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.contactUs') }}</a></li>
          </ul>
        </div>

        <div class="reveal reveal-delay-2">
          <h3 class="text-yellow-300 text-lg font-bold mb-5 font-[Playfair_Display]">{{ t('footer.destinations') }}</h3>
          <ul class="space-y-3">
            <li><a href="/west" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.western') }}</a></li>
            <li><a href="/east" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.eastern') }}</a></li>
            <li><a href="/north" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.northern') }}</a></li>
            <li><a href="/south" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.southern') }}</a></li>
            <li><a href="/kigali" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 hover:translate-x-1 inline-block">{{ t('footer.kigali') }}</a></li>
          </ul>
        </div>

        <div class="reveal reveal-delay-3">
          <h3 class="text-yellow-300 text-lg font-bold mb-5 font-[Playfair_Display]">{{ t('footer.contact') }}</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-yellow-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+250788123456" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300">{{ t('footer.phone') }}</a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-yellow-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:ahantunyaburanga@gmail.com" class="text-green-200 hover:text-yellow-300 text-sm transition-all duration-300 break-all">{{ t('footer.email') }}</a>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-yellow-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span class="text-green-200 text-sm">{{ t('footer.address') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-yellow-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="text-green-200 text-sm">{{ t('footer.workingHours') }}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="border-t border-white/10 relative z-10">
      <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-green-300 text-sm">{{ t('footer.rights') }}</p>
        <div class="flex gap-6 text-sm">
          <a href="#" class="text-green-300 hover:text-yellow-300 transition-all duration-300">{{ t('footer.privacy') }}</a>
          <a href="#" class="text-green-300 hover:text-yellow-300 transition-all duration-300">{{ t('footer.terms') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>