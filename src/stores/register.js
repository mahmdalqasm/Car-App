// import { reactive } from 'vue'
// import { defineStore } from 'pinia'

// export const useRegister = defineStore('register', () => {
//   const errors = reactive({})
//   const form = reactive({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//   })

//   function resetForm() {
//     form.name = ''
//     form.email = ''
//     form.password = ''
//     form.password_confirmation = ''

//     errors.value = {}
//   }

//   async function handleSubmit() {
//     errors.value = {}

//     return window.axios
//       .post('auth/register', form)
//       .then((response) => {
//         console.log(response.data)
//       })
//       .catch((error) => {
//         if (error.response.status === 422) {
//           errors.value = error.response.data.errors
//         }
//       })
//       .finally(() => {
//         form.password = ''
//         form.password_confirmation = ''
//       })
//   }

//   return { form, errors, resetForm, handleSubmit }
// })

import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useRegister = defineStore('register', () => {
  const errors = reactive({})
  const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  function resetForm() {
    form.name = ''
    form.email = ''
    form.password = ''
    form.password_confirmation = ''

    Object.keys(errors).forEach(key => delete errors[key])
  }

  async function handleSubmit() {
    Object.keys(errors).forEach(key => delete errors[key])

    try {
      const response = await window.axios.post('auth/register', form)
      console.log(response.data)
    } catch (error) {
      if (error?.response?.status === 422) {
        Object.assign(errors, error.response.data.errors)
      } else {
        console.error('Unexpected error:', error)
      }
    } finally {
      form.password = ''
      form.password_confirmation = ''
    }
  }

  console.log("s",window.axios.defaults.baseURL);

  return { form, errors, resetForm, handleSubmit }
})
