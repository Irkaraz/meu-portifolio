class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log("Olá, me chamo " + this.nome +
            ", tenho " + this.idade +
            " anos e estou trabalhando como " + this.cargo + ".");
    }

    trabalhar() {
        console.log("Estou indo trabalhar.");
    }

}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log("Estou gerenciando este projeto.");
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo)
        this.linguagem = linguagem;
    }

    programar() {
        console.log("Estou programando este software.");
    }
}

var g1 = new Gerente("Jeferson", 45, "Gerente de Varejo", "Vendas");
g1.seApresentar();
g1.trabalhar();
g1.gerenciar();

console.log();

var d1 = new Desenvolvedor("Leleco", 24, "Pleno", "Clojure");
d1.seApresentar();
d1.trabalhar();
d1.programar();