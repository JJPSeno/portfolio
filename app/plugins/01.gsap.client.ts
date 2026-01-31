import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export default defineNuxtPlugin({
  name: 'gsap',
  async setup() {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    return {
      provide: {
        gsap,
        ScrollTrigger,
        SplitText,
      },
    }
  },
})
