
//Classe abstrata, somente utilizada para herdar
export class Conta{
    constructor(saldoInicial,cliente,agencia){
        if(this.constructor == Conta){
            throw new Error("Voce nao deveria instanciar um objeto do tipo conta Diretamente");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia =agencia;
       
        
    }
    autenticar(senha){
      return senha ==  this._senha;
  }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }
    get cliente(){
           return this._cliente;
    }
      
    get saldo(){
           return this._saldo;
    }
      
    
    sacar(valor){
      throw new Error("O metodo Sacar da conta e abstrato")
        
      }
    
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
          this._saldo -= valorSacado;
          return valorSacado;
          
    }
    return 0;


}
    depositar(valor){
        if(valor <= 0)
          {
          return
          }
        this._saldo += valor;
    }

    
      transferir(valor, conta){
        if(this._tipo == "salario"){
            return;
        }
          const valorSacado = this.sacar(valor);
          conta.depositar(valorSacado);
    }
    teste(){
        console.log("teste na classe conta")
      }
      
}
