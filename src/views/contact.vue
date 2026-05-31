<script setup>
import { ref, reactive } from 'vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

function validate() {
  let valid = true
  if (!form.name.trim()) { errors.name = 'Name is required'; valid = false } else { errors.name = '' }
  if (!form.email.trim()) { errors.email = 'Email is required'; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Invalid email format'; valid = false }
  else { errors.email = '' }
  if (!form.message.trim()) { errors.message = 'Message is required'; valid = false } else { errors.message = '' }
  return valid
}

function handleSubmit() {
  if (validate()) {
    submitted.value = true
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
    setTimeout(() => { submitted.value = false }, 5000)
  }
}
</script>

<template>
  <div class="pt-20">
    <section class="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div class="absolute top-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <p class="text-green-600 font-semibold tracking-widest uppercase text-sm reveal">Get in Touch</p>
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mt-3 reveal reveal-delay-1">Contact Us</h1>
          <div class="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full mt-4 reveal reveal-delay-2"></div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-6 reveal reveal-delay-2">We'd love to hear from you. Send us your questions, feedback, or travel inquiries.</p>
        </div>

        <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div class="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-2xl border border-green-100 reveal-left">
            <Transition name="fade">
              <div v-if="submitted" class="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl mb-6 font-medium flex items-center gap-3">
                <svg class="w-6 h-6 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>Message sent successfully!</span> We'll get back to you soon.
              </div>
            </Transition>
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label class="block text-gray-700 font-medium mb-2 text-sm">Full Name</label>
                <input v-model="form.name" type="text" placeholder="Your name" class="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 outline-none transition text-sm" :class="errors.name ? 'border-red-300 bg-red-50' : ''" />
                <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
              </div>
              <div>
                <label class="block text-gray-700 font-medium mb-2 text-sm">Email Address</label>
                <input v-model="form.email" type="email" placeholder="your@email.com" class="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 outline-none transition text-sm" :class="errors.email ? 'border-red-300 bg-red-50' : ''" />
                <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
              </div>
              <div>
                <label class="block text-gray-700 font-medium mb-2 text-sm">Subject</label>
                <input v-model="form.subject" type="text" placeholder="How can we help?" class="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 outline-none transition text-sm" />
              </div>
              <div>
                <label class="block text-gray-700 font-medium mb-2 text-sm">Message</label>
                <textarea v-model="form.message" rows="5" placeholder="Write your message..." class="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 outline-none transition text-sm resize-none" :class="errors.message ? 'border-red-300 bg-red-50' : ''"></textarea>
                <p v-if="errors.message" class="text-red-500 text-xs mt-1">{{ errors.message }}</p>
              </div>
              <button type="submit" class="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300">Send Message</button>
            </form>
          </div>

          <div class="space-y-8">
            <div class="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border border-green-100 reveal-right">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div class="space-y-5">
                <div v-for="(item, i) in [
                  { icon: 'map-pin', label: 'Address', value: 'Kigali, Rwanda' },
                  { icon: 'phone', label: 'Phone', value: '+250 788 654 321' },
                  { icon: 'mail', label: 'Email', value: 'ahantunyaburanga@gmail.com' },
                  { icon: 'clock', label: 'Working Hours', value: 'Mon - Sat: 8:00 AM - 6:00 PM' }
                ]" :key="i" class="flex items-start gap-4 group hover:bg-green-50 p-3 rounded-2xl transition-all duration-300">
                  <div class="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg v-if="item.icon === 'map-pin'" class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <svg v-else-if="item.icon === 'phone'" class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <svg v-else-if="item.icon === 'mail'" class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <svg v-else-if="item.icon === 'clock'" class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">{{ item.label }}</p>
                    <p class="text-gray-500 text-sm">{{ item.value }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border border-green-100 reveal-right reveal-delay-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Find Us</h3>
              <div class="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center text-gray-400 group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div class="text-center group-hover:scale-105 transition-transform duration-300">
                  <svg class="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
                  <p class="font-medium text-gray-600">Kigali, Rwanda</p>
                  <p class="text-sm text-green-600">View on Google Maps ↗</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>