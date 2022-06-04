import { writable } from 'svelte/store';

export const contact_data = writable({
  name: "",
  email: "",
  subject: "",
  msg: ""
})
