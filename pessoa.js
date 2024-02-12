class Pessoa {
    constructor(nome, idade, cpf){
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
        this._id = Math.floor(Math.random() * 9000) + 1000;
    }

    dadosCadastrais(){
        return `Nome: ${this._nome}, Idade: ${this._idade}, CPF: ${this._cpf}, ID: ${this._id}`;
    }

    get nome() {
        return this._nome;
    }
    
    set nome(novoNome) {
        this._nome = novoNome;
    }
    
    get idade() {
        return this._idade;
    }
    
    set idade(novaIdade) {
        if (novaIdade > 0) {
          this._idade = novaIdade;
        } else {
          console.error("A idade deve ser um número positivo.");
        }
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(novoCpf){
        this._cpf = novoCpf;
    }

    get id(){
        return this._id;
    }
}

module.exports = Pessoa;