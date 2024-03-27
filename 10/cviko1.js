/*
Cvičení provádějte ve vašem JavaScript souboru.

Vytvořte pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. 
Použijte metodu push a přidejte do pole počet diváků na novém představení.
Vytvořte pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních. 
Poté pomocí metody pop odstraňte poslední hodnotu v poli.

Vytvořte pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. 

Uložte toto pole do proměnné plays. Uložte do jiné proměnné druhou položku tohoto pole.
Uložte do proměnné reviews pole hodnocení, které obdržela divadelní hra 
Plyšáci na útěku v různých recenzních časopisech. Hodnocení je vždy objekt obsahující název recenzního
 časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10.

*/

let predstaveniDivaci = [
  120,
  60,
  10,
  150,
  75
]

predstaveniDivaci.push(100)


let predstaveniNazev = [
  'Pan prstenů 1',
  'Pan prstenů 2',
  'Pan prstenů 3',
  'Pan prstenů 4',
]

predstaveniNazev[3] = "Pan prstenu 4 - premiera"

console.log(predstaveniNazev)

// Plyšáci na útěku - hodnocení dle časopisu
let reviews = [
  {nazevCasopisu: 'ČSFD pro všechny', hodnoceni: 10},
  {nazevCasopisu: 'Mladá fronta', hodnoceni: 8},
  {nazevCasopisu: 'Moje super filmy', hodnoceni: 3},
]

console.log(reviews)


/*
Cvičení provádějte ve vašem JavaScript souboru.

Napište funkci first, která jako svůj parametr přijme pole a vrátí první prvek tohoto pole. 
Pokud pole bude prázdné, funkce vrátí undefined. 

Funkci otestujte s několika různými poli. Například:

first([3, 2, 1]); // ⟶ 3
first([]); // ⟶ undefined
*/


const first = (pole) => {
  console.log(pole)
  if(pole.length === 0){
    return undefined
  }else{
    return pole[0]
  }
}

let mojePole = [5,7,9]

console.log(first(mojePole))

/*
Napište funkci last, která jako svůj parametr přijme pole a vrátí poslední prvek tohoto pole. 
Pokud pole bude prázdné, funkce vrátí undefined. Funkci otestujte s několika různými poli. Například:

last([3, 2, 1]); // ⟶ 1
last([]); // ⟶ undefined

*/

const last = (pole) => {
  let pocetZaznamu = pole.length
  if(pocetZaznamu === 0) {
    return undefined
  }else{
    return pole[pocetZaznamu-1]
  }
}

console.log(last([22,33,44,55,66]))


/*
Napište funkci middle, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. Pokud pole bude prázdné, funkce vrátí undefined. Pokud pole bude obsahovat sudý počet prvků, vrátí funkce prvek vlevo od středu. Funkci otestujte s několika různými poli. Například:

middle([3, 2, 1]); // ⟶ 2
middle([3, 2, 1, 0]); // ⟶ 2
middle([]); // ⟶ undefined
Napište funkci middleMean, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. 
Pokud pole bude prázdné, funkce vrátí undefined. 
Pokud pole bude obsahovat sudý počet prvků, vrátí funkce průměr dvou prvků uprostřed. 
Funkci otestujte s několika různými poli. Například:

/*
middleMean([3, 2, 1]); // ⟶ 2
middleMean([3, 2, 1, 0]); // ⟶ 1.5
middleMean([]); // ⟶ undefined

*/

const middleMean = (pole) => {
  let pocetZaznamu = pole.length
  let vysledek = undefined

  if(pocetZaznamu % 2 == 0) {
    console.log("test")
    let vychoziIndex = pocetZaznamu/2

    vysledek = (pole[vychoziIndex]+pole[vychoziIndex+1])/2
  }else{
    let vychoziIndex = Math.floor(pocetZaznamu/2)
    vysledek = pole[vychoziIndex]
  }

  return vysledek
}
/*
Napište funkci insert, která jako první parametr přijme pole a jako druhý parametr nějakou hodnotu. Funkce zkontroluje, zda pole již obsahuje tuto hodnotu. Pokud ano, vrátí false. Pokud ne, vloží hodnotu na konec pole a vrátí true. Funkci otestujte s několika různými poli. Například:

insert([3, 2, 1], 4); // ⟶ true
insert([3, 2, 1], 3); // ⟶ false
*/

/*

Vytvořte JavaScriptový program, který vepíše do stránky ovčí příběh pro děti na dobrou noc. 
Výsledkem by měl být text počítající ovečky.

Pro rychlejší vytvoření základní struktury použijte příkaz níže:

npm init kodim-app@latest na-dobrou-noc html-css-js
Využijte následujících dvacet jmen oveček:

const ovciJmena = [
  'Bětuška',
  'Cína',
  'Dolly',
  'Heidy',
  'Líza',
  'Belinda',
  'Celia',
  'Elvíra',
  'Karla',
  'Otýlie',
  'Škraboška',
  'Kopretinka',
  'Berta',
  'Růženka',
  'Bobinka',
  'Žofka',
  'Dášenka',
  'Vlnka',
  'Květuše',
  'Pampeliška',
];
Pomocí metody forEach do stránky vepište deset za sebou jdoucích vět v následující podobě:

Ovečka Bětuška jako 1. přeskočila přes plot. Ovečka Cína jako 2. přeskočila přes plot. 
Ovečka Dolly jako 3. přeskočila přes plot…

*/

const ovciJmena = [
  'Bětuška',
  'Cína',
  'Dolly',
  'Heidy',
  'Líza',
  'Belinda',
  'Celia',
  'Elvíra',
  'Karla',
  'Otýlie',
  'Škraboška',
  'Kopretinka',
  'Berta',
  'Růženka',
  'Bobinka',
  'Žofka',
  'Dášenka',
  'Vlnka',
  'Květuše',
  'Pampeliška',
];

ovciJmena.forEach((jmeno,index) => {
  console.log("Ovečka: " + jmeno + " jako " + index+1 +". přeskočila přes plot \n")
})


