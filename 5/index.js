
let validace =  validator

let email = prompt("Zadej svůj email:")

let elementZprava = document.getElementById('msg')

console.log(elementZprava)
console.log(email)

if(validace.isEmail(email)) {
  elementZprava.classList.add('msg--valid')
  elementZprava.innerHTML = "<strong> Tento email " + email + " je validní </strong>" 
}else{
  elementZprava.classList.add('msg--invalid')
  elementZprava.innerHTML = "<strong> Tento email " + email + " není validní </strong>" 
}