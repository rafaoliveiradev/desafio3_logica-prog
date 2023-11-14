class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nome = nomeHeroi
        this.idade = idadeHeroi
        this.tipo = tipoHeroi
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break

            case "guerreiro":
                ataque = "espada"
                break

            case "monge":
                ataque = "artes marciais"
                break

            case "ninja":
                ataque = "shuriken"
                break

            default:
                ataque = "realizou um ataque"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi1 = new Heroi('Aragorn', 30, 'guerreiro')
const heroi2 = new Heroi('Gandalf', 1000, 'mago')
const heroi3 = new Heroi('Bruce Lee', 32, 'monge')
const heroi4 = new Heroi('Hattori Hanzo', 25, 'ninja')

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()