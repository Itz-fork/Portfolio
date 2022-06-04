import { writable } from 'svelte/store';


const contact_data = writable({
  name: "",
  email: "",
  subject: "",
  msg: ""
})

const alert_data = writable({
  "is_null": false,
  "is_fetch_success": false,
  "is_fetch_suck": false
})


export { contact_data, alert_data }