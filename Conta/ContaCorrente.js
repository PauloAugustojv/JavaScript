import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta{
  static numeroDeContas = 0;
    constructor(cliente,agencia){
          
     super(0,cliente,agencia);
    ContaCorrente.numeroDeContas += 1;
   
}
teste(){
  
  console.log("teste na classe conta corrente")
}
// sobreescrevendo o comportamento de sacar da classe mae "Conta"
sacar(valor){
  let  taxa = 1.1;
   return this._sacar(valor,taxa);

}


}
