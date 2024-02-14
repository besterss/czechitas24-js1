
/*
V JavaScriptovém programu si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). Proveďte následující úkoly.

Vypište do stránky počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vypište z názvu prvních pět písmen.
Vypište z názvu posledních pět písmen.
*/

let title = "John Wick 4"

let vysledekVlastnosti = document.getElementById('vysledekVlastnosti')

vysledekVlastnosti.innerHTML = "<strong> Název našeho filmu je: " + title + "</strong> </br>"

//Vypište do stránky počet znaků názvu.
vysledekVlastnosti.innerHTML += "počet znaků v názvu je: " + title.length + "<br />"
//Vypište název filmu převedený na velká písmena.
vysledekVlastnosti.innerHTML += "převod na velké písmena " + title.toUpperCase() + "<br />"
//Vypište z názvu prvních pět písmen.
vysledekVlastnosti.innerHTML += "prvních pět písmen názvu filmu: " + title.slice(0,5) + "<br />"
//Vypište z názvu posledních pět písmen.
vysledekVlastnosti.innerHTML += "posledních pět písmen názvu filmu: " + title.slice(-5) + "<br />"


/*

Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.

Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
  userName: 'slavomir.ponuchalek',
  domain: 'yahoo.com',
};
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.

*/

// Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
let email = prompt("Zadej svůj email")

let elementEmail = document.getElementById("vysledekEmail")

// Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
let atIndex = email.indexOf("@")

//Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
elementEmail.innerHTML = email.slice(0,atIndex)

//Dále z e-mailu získejte název domény tedy například gmail.com.
elementEmail.innerHTML += "<br />"

elementEmail.innerHTML += email.slice(atIndex+1, email.length)

elementEmail.innerHTML += "<br />"
elementEmail.innerHTML += "<br />"

//Ze získaných informací vytvořte objekt, který bude vypadat například takto:¨

const parsedEmail = {
    userName:  email.slice(0,atIndex),
    domain:  email.slice(atIndex+1, email.length),
};

console.log(parsedEmail)

elementEmail.innerHTML += `<p>username: ${parsedEmail.userName}</p>` 
elementEmail.innerHTML += "<p>domain:" + parsedEmail.domain + "</p>"


/*Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
  <p>Pod Stájemi 67</p>
  <p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.*/

let ulice = prompt("Zadej ulici")
let cisloDomu = prompt("Zadej číslo domu")
let mesto = prompt("Zadej mesto")
let psc = prompt("Zadej PSČ")

let vysledekDorucovani = document.getElementById("vysledekDorucovani")

vysledekDorucovani.innerHTML = 
`
<address>
  <p>${ulice} ${cisloDomu}</p>
  <p>${psc} ${mesto}</p>
</address>
`