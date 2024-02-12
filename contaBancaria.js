class ContaBancaria {
    constructor(tipoConta, saldo, pessoa) {
        this._tipoConta = tipoConta;
        this._numeroConta = Math.floor(Math.random() * 9000) + 1000;
        this._saldo = saldo;
        this._pessoa = pessoa;
    };

    // Getter e Setter para 'tipoConta'
    get tipoConta() {
        return this._tipoConta;
    }

    set tipoConta(novoTipoConta) {
        this._tipoConta = novoTipoConta;
    }

    // Getter para 'numeroConta' (não incluí Setter para manter a aleatoriedade)
    get numeroConta() {
        return this._numeroConta;
    }

    // Getter e Setter para 'saldo'
    get saldo() {
        return this._saldo;
    }

    set saldo(novoSaldo) {
        this._saldo = novoSaldo;
    }

    // Getter e Setter para 'pessoa'
    get pessoa() {
        return this._pessoa;
    }

    set pessoa(novaPessoa) {
        this._pessoa = novaPessoa;
    }

    exibirSaldo() {
        return `Saldo da Conta ${this._numeroConta}: ${this._saldo}`;
    }

    exibirDadosBancarios() {
        return `Dados da conta: Tipo De Conta: ${this._tipoConta}, Numero Da Conta: ${this._numeroConta}, Saldo: ${this._saldo} Titular: ${this._pessoa.dadosCadastrais()}; `;
    }

    depositarValor(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    sacarValor(valor) {
        if (valor < this._saldo) {
            this._saldo -= valor;
        }
    }
}

module.exports = ContaBancaria;