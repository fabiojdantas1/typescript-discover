//creates intersection of types for objects
type User = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; //optional
  info?: string; //optional
}

let newUser: User = {
  name: 'Fábio Datnas',
  email: 'fabio@email.com',
  age: 44,
  isAdmin: true
}

console.log('User dada:\n', newUser);

type Char = {
  nickname: string;
  level: number;
}

//creates types' intersection with character '&'
type PlayerInfo = User & Char;

let newPlayer: PlayerInfo = {
  name: 'Fábio Dantas',
  email: 'fabio@gmail.com',
  age: 44,
  nickname: 'fdantas',
  level: 10
}
console.log('Player data:\n', newPlayer);