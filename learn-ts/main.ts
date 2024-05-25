// Type of variable
const nombre: string = 'John';
const age: number = 30;

// Type of function
//value
function add(a: number, b: number): number {
  return a + b;
}
//object
function printName(hero: { name: string; age: number }): void {
  const { name, age } = hero;
  console.log(name);
}
printName({ name: 'Sebas', age: 10 });
//void
function printName2(name: string): void {
  console.log(name);
}
//never
function throwError(message: string): never {
  throw new Error(message);
}

// Type indexing
type HeroProps = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

const heroAddress: HeroProps['address'] = {
  street: 'Main Street',
  city: 'New York'
};

// Type from value
type Address = typeof heroAddress;
const myAddress: Address = {
  street: 'Main Street',
  city: 'New York'
};

// Type from function return
function getHero() {
  return {
    name: 'John',
    age: 30,
    address: {
      street: 'Main Street',
      city: 'New York'
    }
  };
}
type HeroProps2 = ReturnType<typeof getHero>;

// Type for array
const names: string[] = ['John', 'Mary'];
const ages: Array<number> = [30, 20];
const ages2: (number | string)[] = [30, '20'];

// Type from array
const heroes = [
  { name: 'John', age: 30 },
  { name: 'Mary', age: 20 }
];
type HeroProps3 = typeof heroes;

//* Use of type
type HeroId = `${string}-${string}-${string}-${string}-${string}`;
// Union type
type HeroScales = 'small' | 'medium' | 'large';
type HeroBasicInfo = {
  name: string;
  age: number;
};
type HeroProperties = {
  id?: HeroId;
  isActive?: boolean;
};
// Intersection type
type Hero = HeroBasicInfo & HeroProperties;

function createHero(hero: HeroBasicInfo): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  };
}

const newHero: Hero = createHero({ name: 'John', age: 30 });

newHero.id?.length;
/*
    [
        ['X', 'O', 'X'], <-- string[]
        ['O', 'X', 'O'],
        ['O', 'O', 'X']
    ]
*/
type CellsGame = 'X' | 'O';
type GameBoard = [
  [CellsGame, CellsGame, CellsGame],
  [CellsGame, CellsGame, CellsGame],
  [CellsGame, CellsGame, CellsGame]
];

const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'O', 'X']
];
