class hero {
    constructor(name, age, type, power) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.power = power
    }

    attack(){
        return `O heroi ${this.name}, do tipo ${this.type} atacou usando ${this.power}`
    }
}

let guerreiro = new hero("Kratos", 130, "guerreiro", "espada")
let mago = new hero("Davy Jones", 35, "mago", "magia")
let monge = new hero("Senpu", 54, "monge", "artes marciais")
let ninja = new hero("Jacob", 25, "ninja", "shuriken")

let heros = [guerreiro, mago, monge, ninja]

for(let i = 0; i < heros.length; i++){
    console.log(heros[i].attack())
}