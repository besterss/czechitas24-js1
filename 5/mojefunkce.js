let validace = validator

const posliEmail = (email) => {
  alert('Poslal jsem email na adresu: ' + email)
}

/*
elementZprava.classList.add('msg--valid')
elementZprava.innerHTML = "<strong> Tento email " + email + " je validní </strong>"
*/

const hlaska = (hlaskaId, hlaskaText, hlaskaCss) => {
  let hlaskaElement = document.getElementById(hlaskaId)

  hlaskaElement.classList.add(hlaskaCss)
  hlaskaElement.innerHTML = hlaskaText

  return hlaskaElement
}

const validaceEmailu = (email) => {
    if(validace.isEmail(email)) {
      hlaska('msg', '<strong> Email je validní: ' + email + ' </strong>', 'msg--valid')
      posliEmail(email)
    }else{
      hlaska('msg', '<strong> Email není validní: '+ email +'</strong>', 'msg--invalid') 
    }
}

const overEmail = () => {
  let email = prompt("Zadej svou emailovou adresu")
  return validaceEmailu(email)
}