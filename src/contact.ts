import './app.css'
import Contact from './Contact.svelte'

const app = new Contact({
    target: document.getElementById('app')!,
})

export default app
