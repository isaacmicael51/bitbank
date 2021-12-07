import {Cliente} from './Cliente.js';
import {ContaCorrente } from './ContaCorrente.js';


const cliente1 = new Cliente("Isaac", 22495849333);
const cliente2 = new Cliente("Paula", 83829182393);

const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);
const conta2 = new ContaCorrente(1002, cliente2);


let valor = 200;
conta1.transferir(valor, conta2);


console.log(ContaCorrente.numeroDeContas);


