//Data
var dataAtual = new Date(2021,08,30);

var dataEvento = new Date(2021,09,12);

if (dataEvento > dataAtual) {
    console.log("Evento permitido")
} else {
    console.log("Data inválida")
}

// Idade
var idade = 27;

if(idade >= 18) {
    console.log("Cadastro permitido")
} else {
    console.log("Cadastro não permitido para menores de 18 anos")
}

// Participantes
var listaParticipantes = ["Joao", "Sandra", "Joelma"]

if (listaParticipantes.length < 100) {
    console.log ("Cadastro concluído com sucesso")
} else {
    console.log ("Cadastro não permitido. O número de participantes excedeu o limite")
}
