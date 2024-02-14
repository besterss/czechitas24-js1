

let mujNazevFilmu

let aktualizujNazevFilmu = () => {
  mujNazevFilmu = document.getElementById('mujNazevFilmu')
  vysledekZadani = document.getElementById('vysledekVlastnosti')

  vysledekZadani.innerHTML = zformatujTextPodleZadani(mujNazevFilmu.value)
}

/*
V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

Vypište do stránky počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vypište z názvu prvních pět písmen.
Vypište z názvu posledních pět písmen.
*/

let zformatujTextPodleZadani = (mujText) => {
  let novyText = null
  //Vypište do stránky počet znaků názvu.
  novyText = "Počet znaků názvu: " + mujText.length + "<br>"
  //Vypište název filmu převedený na velká písmena.
  novyText += "Název filmu velkými písmeny: " + mujText.toUpperCase() + "<br>"
  //Vypište z názvu prvních pět písmen.
  novyText += "Prvních pět písmen: " + mujText.slice(0, 5) + "<br>"
  //Vypište z názvu posledních pět písmen.
  novyText += "Posledních pět písmen: " + mujText.slice(-5)

  return novyText
}

console.log("hej")