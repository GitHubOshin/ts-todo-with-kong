const btnEl = document.getElementById('btn')! as HTMLButtonElement
const inputEl = document.getElementById('input')! as HTMLInputElement
const formEl = document.querySelector('form')!

formEl.addEventListener('submit', saveData)

function saveData(e: SubmitEvent) {
  e.preventDefault()
  console.log(inputEl.value)
}

// btnEl.addEventListener('click', function () {
//   console.log(inputEl.value)
// })
