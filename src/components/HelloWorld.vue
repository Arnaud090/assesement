<script setup>
import { useI18n } from '../settings/i18n.js'
const { t } = useI18n()
</script>

<template>
  <section class="bg-gray-100 min-h-screen flex items-center justify-center p-6">
    
    <div class="bg-white shadow-xl rounded-3xl p-8 max-w-3xl w-full">
      
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-blue-700 mb-2">
          {{ t('helloWorld.title') }}
        </h1>

        <p class="text-gray-500">
          {{ t('helloWorld.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">

        <div class="bg-blue-50 rounded-2xl p-6 text-center shadow">
          <h2 class="text-xl font-bold text-gray-800">
            {{ t('helloWorld.principal') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ t('helloWorld.principalName') }}
          </p>
        </div>

        <div class="bg-green-50 rounded-2xl p-6 text-center shadow">
          <h2 class="text-xl font-bold text-gray-800">
            {{ t('helloWorld.disciplineDirector') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ t('helloWorld.principalName') }}
          </p>
        </div>

        <div class="bg-purple-50 rounded-2xl p-6 text-center shadow">
          <h2 class="text-xl font-bold text-gray-800">
            {{ t('helloWorld.studiesDirector') }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ t('helloWorld.studiesDirectorName') }}
          </p>
        </div>

      </div>

    </div>

  </section>
</template>