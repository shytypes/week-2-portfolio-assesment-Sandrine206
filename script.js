const form = document.getElementById('contactForm')
const displayBox = document.getElementById('formDataDisplay')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  // Collect form data
  const firstName = document.getElementById('firstName').value
  const secondName = document.getElementById('secondName').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  // Create a container to display the form data
  const submittedData = document.createElement('div')
  submittedData.classList.add('submitted-data')

  // Add content with DOM manipulation
  submittedData.innerHTML = `
      <h3>Submitted Info:</h3>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Second Name:</strong> ${secondName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `

  // Append or replace the display box content
  displayBox.innerHTML = '' // Clear previous output
  displayBox.appendChild(submittedData)

  // Reset form fields
  form.reset()
})
