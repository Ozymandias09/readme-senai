
let data;
let idade;
let num_participantes;
let qtd_participantes;
let cadastro=0;

let num_participantes = prompt("Digite o numero de participantes");
if(num_participantes>=100){
  console.log("Continuar cadastro");
  cadastro=num_participantes;
}else{
  console.log("o cadastro não será permitido por ter excedido o limite.")
}

let data = prompt("Digite a data");
if(data>=23){
  console.log("Continuar cadastro");
  cadastro=data;
}else{
  console.log("o cadastro não será permitido por ter excedido a data limite.")
}

let idade = prompt("Digite a idade do participante");
if(idade>=18){
  console.log("Continuar cadastro");
  cadastro=num_participantes;
}else{
  console.log("o cadastro não será permitido por ter excedido o limite de idade.")
}
let qtd_participantes = prompt("Digite o numero de participantes");
if(contador>=100){
  console.log("Continuar cadastro");
  cadastro=data;
}else{
  console.log("o cadastro não será permitido por ter excedido a data limite de participantes.")
}

