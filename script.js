// get and store a ref to forms
// get and store ref to input
// return values from input to console

const form = document.querySelector('form')

function handleSubmit(e) {
  //disables default form submission
  e.preventDefault()

  // returns various values from input
  const firstName = document.querySelector('#firstName').value
  const lastName = document.querySelector('#lastName').value
  const email = document.querySelector('#email').value
  const age = document.querySelector('#age').value
  const resultULView = document.querySelector('#result-view')
  const ageErrorSpan = document.querySelector('#age-error-span')

  if (age < 22) {
    alert('You must be 22 years or older to fill this form')
    ageErrorSpan.innerHTML = `<p style="color red;">${errorMsg}</p>`
  }

  //store data in an object
  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
  }
  console.log(formData)

  const firstString = 'Coding seems difficult'
  const lastString = ' is but i will get it'
  const resultString = firstString + 'it' + lastString
  const resultString2 = `${firstString} it ${lastString} `

  console.log(resultString2)

  //update our DOM via DOM manipulation
  resultULView.innerHTML = `<li>first Name: ${formData.firstName}</li>
  <li> lastName : ${formData.lastName}</li>
  <li> email: ${formData.email}</li>
  <li> age : ${formData.age}</li> `
}

form.addEventListener('submit', handleSubmit)
