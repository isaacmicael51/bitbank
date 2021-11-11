class Cliente {
    nome;
    cpf;
    
}

class ContaCorrente {
    numeroConta
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valorSacado) {
            this.saldo -= valorSacado;
        }
    }
}





const cliente1 = new Cliente();
cliente1.nome = "Paula";
cliente1.cpf  = 01379159938;

const cliente2 = new Cliente();
cliente2.nome = "Isaac";
cliente2.cpf  = 01379159938;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicado.saldo = 100;
console.log(contaCorrenteRicado.saldo);
contaCorrenteRicardo.sacar(50);



console.log(cliente1, cliente2);