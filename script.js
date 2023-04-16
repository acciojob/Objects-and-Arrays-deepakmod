const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

const team = players;

const team1 =[];
players.forEach((element) =>{
    team1.push(element);
});

const cap1={
    ...person
};

const cap1={};
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
