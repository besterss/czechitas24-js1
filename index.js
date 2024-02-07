/*
## Realitka

Mějme následující objekt představující inzerát na stránkách nějaké realitní kanceláře.
*/
const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

/*
Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

1. Pomocí tečkové notace vypište do stránky dispozici bytu.
2. Vypište do stránky čistý nájem bez poplatků.
3. Vypište do stránky celý objekt představující výměru bytu.
4. Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
5. Změnte stav inzerátu z `'free'` na `'taken'`.

*/

const elementRealitka = document.getElementById("realitka")


let mena = apartment.price.currency
let najem = apartment.price.rent

switch(mena) {
  case 'czk':
    mena = "Kč"
    break;
  case 'gbp':
    mena = "£"
    break;
  case 'eur':
    mena = "€"
      break;
  case 'usd':
    mena = "$"
      break;
  default:
    mena = "neznámá měna"
}

const ukoly = {
  //1. Pomocí tečkové notace vypište do stránky dispozici bytu.
  ukol1: {
    vysledek: apartment.disposition
  },
  //2. Vypište do stránky čistý nájem bez poplatků.
  ukol2: {
    vysledek: najem + ' ' + mena
  },
  //3. Vypište do stránky celý objekt představující výměru bytu.
  ukol3: {
    vysledek: {
      plocha: apartment.area.floorage,
      balkony: apartment.area.balcony
    }
  },
  //4. Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
  ukol4: {
    vysledek: {
      mesto: apartment.city,
      mestoCast: apartment.district
    }
  }
}

//elementRealitka.innerHTML = "<strong>Dispozice bytu: </strong>" + apartment.disposition
elementRealitka.innerHTML = "<strong>Dispozice bytu: </strong>" + ukoly.ukol1.vysledek

elementRealitka.innerHTML += "<br /><strong>Čistý nájem bytu bez poplatků: </strong>" + ukoly.ukol2.vysledek

elementRealitka.innerHTML += "<br /><strong>Rozměry bytu: </strong>" + ukoly.ukol3.vysledek.plocha + "m2 + " + ukoly.ukol3.vysledek.balkony + " balkónů"

const mesto = ukoly.ukol4.vysledek.mesto
const mestoCast = ukoly.ukol4.vysledek.mestoCast

elementRealitka.innerHTML += "<br /><strong>Byt se nachází ve městě: " + mesto + " v části: " + mestoCast + "</strong> <br />"

const statusByt = apartment.status
elementRealitka.innerHTML += "<strong> Byt k pronájmu :  </strong> <span id=\"statusByt\"> " + statusByt + "</span>"
//5. Změnte stav inzerátu z `'free'` na `'taken'`.

function zmenStav() {
  const elementStatusByt = document.getElementById("statusByt")
  const elementTlacitkoRezervace = document.getElementById("tlacitkoRezervace")

  elementStatusByt.innerText = "Zabraný"
  elementTlacitkoRezervace.disabled = true
  apartment.status = 'taken'

  //const mail = prompt("Zadej email:")
  //alert("Na váš email byla zasláno potvrzení o rezervaci" + mail)

  console.log(apartment)
}

elementRealitka.innerHTML += '<button id="tlacitkoRezervace" onClick="(zmenStav())"> Zarezervovat </button>'


/*

1. V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. 
    Uvažte, jaké vlastnosti může taková kniha mít. 
    Rozhodně budeme chtít název, autora a počet stran. 
    Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.

2. Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.`

*/

const knihovna = {
  kniha1 : {
    autor: 'J.K. Rowling',
    nazev: 'Harry Potter a Kámen mudrců',
    pocetStran: 380,
    pujceno: true, 
    posledniPujcka: {
      jmeno: 'Martin',
      prijmeni: 'Bauer',
      dobaPujceniDny: 10
    }
  },
  kniha2 : {
    autor: 'J.K. Rowling',
    nazev: 'Harry Potter a Tajemná komnata',
    pocetStran: 300,
    pujceno: false,
    posledniPujcka: {
      jmeno: 'Daniela',
      prijmeni: 'Pavlátoá',
      dobaPujceniDny: 1
    }
  }
}

const elementKnihovna = document.getElementById("knihovna")

elementKnihovna.innerHTML = "<h1> můj pozdrav z Javascriptu podruhé </h1>"

console.log(knihovna.kniha1)
console.log(knihovna.kniha2)

/*
## Očkování – objekty

Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

1. Vytvořte objekt `person`, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
   ```js
   {
     name: 'Květoslav Voňavý',
     age: 67,
   }
   ```
1. Přidejte do objektu `person` údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu `window`.
2. Poté, co uživatel zadá všechny údaje, vypište do stránky objekt `person` se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.

*/
const person = {
  name: prompt("Zadej jméno"),
  age: Number(prompt("Zadej věk")),
  language: window.navigator.language
}

console.log(person)
const elementOckovani = document.getElementById("ockovaniObjekty")

const jazyk = person.language === 'cs-CZ' ? "Čeština" : "Anglicky" 
elementOckovani.innerHTML = "<h1> Registrace očkovaného: </h1>" + person.name + " věk:"+ person.age + " komunikovat s ní/m budeme v: " + jazyk
