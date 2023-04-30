// Bring in everything from the DOM
const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

// Show input error message
showError = (input, message) => {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

// Adding an event listenter for when we submit
form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess()
  }
})
