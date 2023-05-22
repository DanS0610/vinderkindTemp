import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"

export const useActiveHomePageStore = defineStore('activehome', {
  state: () => {
    return {

      activePage: useLocalStorage(''),
    }
  },
  actions: {}
})
