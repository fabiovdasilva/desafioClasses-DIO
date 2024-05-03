class Hero {
  constructor(nome, idade, tipo, vida) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.vida = vida;
  }
    ataque = "";

  atacar() {
    
    if (this.tipo === "mago") {
      this.ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      this.ataque = "espada";
    } else if (this.tipo === "monge") {
      this.ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      this.ataque = "katana";
    } else {
      this.ataque = "tipo invalido!";
    }
    

    console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
  }

}

let azir = new Hero("Azir", 25, "ninja", 150);
let nilah = new Hero("Nilah", 21, "guerreiro", 150)
let xayah = new Hero("Xayah", 45, "monge", 150)
let ryze = new Hero("Ryze", 50, "mago", 150)
let draven = new Hero("Draven", 20, "atacante", 150)


azir.atacar();
nilah.atacar();
xayah.atacar();
ryze.atacar();
draven.atacar();

