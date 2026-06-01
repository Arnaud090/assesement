import { ref, watch } from 'vue'
import en from './translations/en.js'
import rw from './translations/rw.js'
import fr from './translations/fr.js'

const translations = { en, rw, fr }
const defaultLang = 'en'

const savedLang = localStorage.getItem('app-lang')
const currentLang = ref(savedLang && translations[savedLang] ? savedLang : defaultLang)

function setLanguage(lang) {
  if (translations[lang]) {
    currentLang.value = lang
    localStorage.setItem('app-lang', lang)
    document.documentElement.lang = lang
  }
}

function t(path) {
  const keys = path.split('.')
  let result = translations[currentLang.value]
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key]
    } else {
      let fallback = translations[defaultLang]
      for (const k of keys) {
        if (fallback && typeof fallback === 'object' && k in fallback) {
          fallback = fallback[k]
        } else {
          return path
        }
      }
      return fallback
    }
  }
  if (typeof result === 'string') return result
  return path
}

const availableLanguages = Object.keys(translations).map(key => ({
  code: key,
  label: translations[key].label,
  lang: translations[key].lang
}))

watch(currentLang, (val) => {
  document.documentElement.lang = val
})

document.documentElement.lang = currentLang.value

export function useI18n() {
  return { currentLang, t, setLanguage, availableLanguages }
}
