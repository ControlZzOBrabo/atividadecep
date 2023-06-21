const Carro = {
    nome: "Palio",
    motor: "1.6",
    cor: "Branco",
    opcionais:{
        roda: "Roda Liga Leve",
        banco: "Couro",
        tracao: "4x4"
    }
}

console.log(Carro)

const valores_str = JSON.stringify(Carro)

console.log(valores_str)