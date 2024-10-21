# Week 1 - Hello Typescript
Week 1 codealongs, excersies and workshop.

Tisdags övningar:
Vecka 43 – Tisdagens Övningar:

Syfte: Befästa förståelsen för grundläggande TypeScript-koncept som introducerades under måndagen.

Sammanfattning av Ämnen som Övningarna Täcker:

- Installation och Grundläggande Verktyg: Hur man installerar TypeScript globalt och sätter upp ett projekt med tsconfig.json.
- Grundläggande Typer: Användning av number, string, boolean och typdeklarationer.
- Arrayer och Objekt: Hur man typar arrayer och objekt med egna typer och interface.
- Unions och Typalias: Användning av unions (|) och skapande av typalias med type.
- Enums och Literal Types: Definiera och använda enum-typer samt literal typer.
- TypeScript Compiler (tsc): Förståelse för kompilering av TypeScript till JavaScript.
- Grundläggande Funktioner: Typning av funktioner med parametrar och returvärden.

Steg 1 - Övningar
Övning 1: Installera och Konfigurera TypeScript
Uppgift:

Installation:

Installera TypeScript globalt via npm:
npm install -g typescript

Projektuppsättning:
Skapa en ny mapp för ditt projekt och initiera npm:
mkdir typescript-intro && cd typescript-intro
npm init -y

Skapa en tsconfig.json genom att köra:
tsc --init

Hello World:

Skapa en fil index.ts och skriv ett enkelt "Hello, World!"-program:
console.log("Hello, World!");

Kompilera TypeScript-filen till JavaScript:
tsc

Kör den genererade index.js-filen:
node index.js

Mål: Förstå hur man installerar och konfigurerar TypeScript i ett projekt.

Övning 2: Grundläggande Typer

Uppgift:

Variabeldeklarationer:

Deklarera variabler av typerna number, string och boolean:
let age: number = 25;
let name: string = "Alice";
let isStudent: boolean = true;

Funktioner:

Skriv en funktion som tar två number-parametrar och returnerar deras summa:
function add(a: number, b: number): number {
  return a + b;
}

Typkontroll:

Försök tilldela felaktiga typer och observera TypeScript-felen:
// Detta ska ge ett fel
let age: number = "tjugofem";

Mål: Förstå statisk typning och TypeScripts typkontroller.

Övning 3: Arrayer och Objekt
Uppgift:

Arrayer:

Skapa en array av tal och en array av strängar:
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "cherry"];

Objekt:

Skapa ett objekt som representerar en person:
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

let person: Person = {
  name: "Bob",
  age: 30,
  isStudent: false,
};

Funktion med Objekt:

Skriv en funktion som tar emot en Person och returnerar en hälsning:
function greet(person: Person): string {
  return `Hello, ${person.name}!`;
}

Mål: Lära sig deklarera och använda arrayer och objekt med typer.

Övning 4: Unions och Typalias
Uppgift:

Typalias och Unions:

Skapa ett typalias ID som kan vara number eller string:
type ID = number | string;

Användning:

Skriv en funktion som accepterar en parameter av typen ID:
function printID(id: ID): void {
  console.log(`ID: ${id}`);
}

Testa Funktionen:

Anropa funktionen med både ett nummer och en sträng:
printID(101);
printID("ABC123");

Mål: Förstå användningen av unions och typalias.

Övning 5: Enums och Literal Types
Uppgift:

Enum:

Definiera en enum för färger:
enum Color {
  Red,
  Green,
  Blue,
}

Användning:

Skriv en funktion som tar emot en Color och returnerar en beskrivning:
function describeColor(color: Color): string {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Green:
      return "Green";
    case Color.Blue:
      return "Blue";
  }
}

Literal Types:

Skapa en variabel som bara kan vara "start" eller "stop":
let action: "start" | "stop";
action = "start"; // OK
action = "pause"; // Error

Mål: Lära sig använda enums och literal types.

Övning 6: tsconfig.json-Fördjupning (Detta ämne han vi inte gå igenom utan kommer nästa vecka)
Uppgift:

Utforska Inställningar:
Ändra target till es5 eller es6 och observera skillnaderna i utdata.
Sätt strict till true och försök skriva kod som bryter mot strikta regler.

Experimentera:
Lägg till eller ta bort inställningar som noImplicitAny, strictNullChecks.
Dokumentera hur dessa påverkar kompileringen.

Mål: Förstå betydelsen av olika inställningar i TypeScript-projekt.

Övning 7: Mini-projekt – Enkel Kalkylator
Uppgift:

Bygg en enkel kalkylatorapplikation som:
Tar två tal som inmatning.
Utför grundläggande operationer: addition, subtraktion, multiplikation, division.
Returnerar resultatet.
Säkerställ att alla funktioner och variabler är korrekt typade.
Hantera potentiella division med noll-fel.

Mål: Tillämpa de lärda koncepten i ett praktiskt sammanhang.

Avancerade Övningar

Övning 8: Implementera en Enkel Spellista
Uppgift:

Skapa ett interface Song med egenskaperna title (string), artist (string), duration (number i sekunder).
Skapa en klass Playlist som kan:
  Lägga till låtar till en intern lista.
  Ta bort låtar baserat på titel.
  Visa total speltid för spellistan.
Använd TypeScripts klass- och interfacefunktioner för att säkerställa korrekt typning.

Mål: Förstå hur man använder klasser och interface tillsammans, och hur man hanterar mer komplexa datastrukturer.

Övning 9: TypeScript med Moduler
Uppgift:

Dela upp koden från tidigare övningar i flera filer/moduler:
  En fil för typer (types.ts).
  En fil för funktioner (functions.ts).
  En huvudfil (main.ts) som importerar och använder dessa.
Konfigurera tsconfig.json för att möjliggöra modulhantering.
Kompilera och kör projektet.

Mål: Lära sig organisera kod i moduler och förstå hur TypeScript hanterar imports och exports.

Övning 10: Implementera Enhetstester med TypeScript
Uppgift:

Välj några av funktionerna från tidigare övningar.
Skriv enhetstester för dessa funktioner med hjälp av ett testbibliotek som Jest.
Typa testerna korrekt med TypeScript.

Mål: Förstå hur man integrerar TypeScript med enhetstestning och skriver typer för testkod.
