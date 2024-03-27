const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];

/*
Pomocí metody map vždy vytvořte pole dle zadání a vypište jej pro kontrolu do konzole (použijte console.log).

Vytvořte nové pole, které bude obsahovat všechna čísla z pole cisla vynásobená dvěma.
*/

const novePole = cisla.map((cislo) => cislo*2)

console.log(novePole)

/*
Vytvořte nové pole, které bude obsahovat délky všech řetězců z pole zvirata.
*/

const delkaSlovZvirata = zvirata.map((zvire) => zvire.length)

console.log(delkaSlovZvirata)
/*
Vytvořte nové pole, které bude obsahovat pouze názvy všech nápojů z pole napoje.
*/

const nazvyNapoje = napoje.map((napoj) => napoj.nazev)

console.log(nazvyNapoje)

/*
Vytvořte nové pole, které bude obsahovat pouze název nápoje z pole napoje, pokud je nápoj skladem, 
v opačném případě bude obsahovat řetězec Není skladem.
*/

const sklademNapoje = napoje.map((napoje) => napoje.skladem === true ? napoje.nazev : 'Není skladem: ' + napoje.nazev)

console.log(sklademNapoje)

/*
Pracujete na velkém e-shopu a vaším úkolem je z nezaplacených objednávek vybrat všechny identifikátory a e-maily zákazníků pro zpracování dalšími systémy. 

Vycházejte ze šablony na GitHubu cviceni-nezaplacene-objednavky.

Upravte soubor app.js tak, aby nachystal dvě nová pole identifikatory a emaily.

Pole const identifikatory = []a const emaily = [] jsou již předpřipravené. 
Upravte části za rovnítky. Využijte metodu map na poli nezaplaceneObjednavky.

Zařiďte, aby v prvním poli identifikatory byly pouze čísla, jednotlivá id z původního pole nezaplaceneObjednavky.
 Představte si, že čísla bude zpracovávat skladový systém, který je potřebuje přesně v této podobě.

V druhém poli by měly být pouze řetězce, jména s e-maily zákazníků ve formátu Jméno <jmeno@server.cz>, 
aby se daly snadno zpracovat e-mailovým serverem.

Poslední dva předchystané řádky nijak neupravujte. 
Představte si, že místo nich bude jednou kód, který předá vámi vytvořená pole dalším systémům.

processEmails(emaily);
processIdentifiers(identifikatory);
*/