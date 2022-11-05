import './index.css'
import 'bigger-picture/css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
