const user = {
  nome: "Usuário",
  idade: 25,
  endereco: {
    rua: "Rua central",
    numero: 1,
  },
  projetos: ["Projeto 1", "Projeto 2"],
};
const studentsObj = [
  { id: 1, name: "John Doe", age: 23, scholarship: false },
  { id: 2, name: "Margoe Rose", age: 19, scholarship: true },
  { id: 3, name: "Kayle", age: 22, scholarship: true },
];

// Desestruture e imprima o nome.
const printName = ({ nome }) => {
  console.log(nome);
};
// printName(user);

//Desestruture e imprima a rua.
const printStreet = ({ endereco: { rua } }) => {
  console.log(rua);
};
// printStreet(user);

//Desestruture e imprima os projetos
const printProj = ({ projetos }) => {
  projetos.forEach((element) => console.log(element));
};
// printProj(user);

//Desestruture e imprima a segunda posição da propriedade projetos.
const printSecondPosition = ({ projetos: [, nome2] }) => {
  console.log(nome2);
};
// printSecondPosition(user);

// Desestruture e imprima o primeiro elemento do array.
const printfirstElem = ([firstElement]) => {
  console.log(firstElement);
};
// printfirstElem(studentsObj);

//Desestruture e imprima o terceiro elemento do array.
const printThirdElem = ([, , thirdElement]) => {
  console.log(thirdElement);
};
// printThirdElem(studentsObj);

//Desestruture e imprima o nome do segundo elemento do array.
const printSecondElem = ([, { name }]) => {
  console.log(name);
};
printSecondElem(studentsObj);
