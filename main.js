const Pessoa = require('./pessoa.js');
const ContaBancaria = require('./contaBancaria.js');
const {validarNome, validarIdade} = require('./validacao.js');

let leitor = require('readline-sync');

const listContaPF = [];
const listContaPJ = [];

var sair = false;
var nomeAprovado = false;

while (sair === false){

    var opcao = leitor.question("01 - Cadastrar Uma Conta: \n" + "02 - Listar Todas as Contas PJ: \n" + "03 - Listar Todas as Contas PF: \n"
      +  "04 - Deposito: \n" +  "05 - Saque: \n" +  "06 - Excluir Conta: \n" + "S - sair: \n" + "O que deseja fazer?");

    switch(opcao.toLocaleUpperCase()){

        case "01":

        try {

            while(nomeAprovado == false){

                var nome = leitor.question("Nome completo: ");
                var idade = null;

                if(validarNome(nome)){
                    nomeAprovado = true;
                }
            } // end while()
            nomeAprovado = false;

            idade = leitor.question("Idade: ");
            while(isNaN(idade)){
                idade = leitor.question("Informe uma idade válida: ");
            };

            let cpf = leitor.question("Informe o CPF separados por pontos: ");

            const pessoa = new Pessoa(nome, idade, cpf);
            console.log(pessoa)
            
            console.log(pessoa.dadosCadastrais());
            
            var tipoDeConta = leitor.question("Falta pouco agora! vamos escolher o tipo de conta agora. Conta PF ou PJ?");

            switch(tipoDeConta.toLocaleUpperCase()){

                case "PF":
                    const contaCriadaPF = new ContaBancaria("PF", 0, pessoa);
                    console.log(contaCriadaPF.exibirDadosBancarios());
                    listContaPF.push(contaCriadaPF);
                    break;

                case "PJ":
                    const contaCriadaPJ = new ContaBancaria("PJ", 0, pessoa);
                    console.log(contaCriadaPJ.exibirDadosBancarios());
                    listContaPJ.push(contaCriadaPJ);
                    break;

                default:
                    console.log("Opção inválida!");
                    tipoDeConta = leitor.question("Qual tipo de conta: PF ou PJ?");
                    break;    
                }; // end switch(tipoDeConta.toLocaleUpperCase()
            } catch(error){
                console.log("Houve um erro ao criar sua conta, por favor, tente mais tarde! " + error.message);
            }
            break;

        case "02":
            var list = listContaPJ.map(lista => lista.exibirDadosBancarios());
            console.log(list);
            break;
        
        case "03":
            var list = listContaPF.map(lista => lista.exibirDadosBancarios());
            console.log(list);
            break;

        case "04":
            var listContas = listContaPF.concat(listContaPJ);
            var busca = leitor.question("Informe o numero da conta: ");
            var respostaDeBusca = listContas.find(element => {return element.numeroConta == busca});

            if (respostaDeBusca) {
                try {
                    console.log(respostaDeBusca.exibirDadosBancarios());
                    
                    var valor = leitor.question('Informe o valor do deposito: ');
            
                    while (isNaN(valor)) {
                        valor = leitor.question("Informe um valor valido: ");
                    }
            
                    respostaDeBusca.depositarValor(parseFloat(valor));
                    console.log(respostaDeBusca.exibirSaldo());
                } catch (error) {
                    console.error("Erro ao processar a conta:", error.message);
                }
            } else {
                console.log('Conta não encontrada!');
            }
            break;

        case "05":
            var listContas = listContaPF.concat(listContaPJ);
            var busca = leitor.question("Informe o numero da conta: ");
            var respostaDeBusca = listContas.find(element => {return element.numeroConta == busca});

            if (respostaDeBusca) {
                try {
                    console.log(respostaDeBusca.exibirDadosBancarios());
                    
                    var valor = leitor.question('Informe o valor do Saque: ');

                    if(valor > respostaDeBusca.saldo){
                        console.log('Saque maior que o saldo da conta!');
                        break;
                    }

                    while (isNaN(valor)) {
                        valor = leitor.question("Informe um valor valido: ");
                    }
            
                    respostaDeBusca.sacarValor(parseFloat(valor));
                    console.log(respostaDeBusca.exibirSaldo());
                } catch (error) {
                    console.error("Erro ao processar a conta:", error.message);
                }
            } else {
                console.log('Conta não encontrada!');
            }
            break

        case "06":
            var numero = leitor.question("Informe o numero da conta que deseja excluir: ");
            var listContas = listContaPF.concat(listContaPJ);

            var indexParaExcluir = listContas.findIndex(element => element.numeroConta == numero);

            if (indexParaExcluir !== -1) {
                // Encontrou a conta, então a remova usando splice
                listContas.splice(indexParaExcluir, 1);
                console.log("Conta excluída com sucesso!");
            } else {
                console.log("Conta não encontrada!");
            }
            break; 

        case "S":
            sair = true;
            break;
        
        default:
            console.log("Opção inválida!");
            break;
    }; // end opcao.toLocaleUpperCase()
}; // end while 