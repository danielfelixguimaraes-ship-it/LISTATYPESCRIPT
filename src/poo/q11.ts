// 11. Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.


export function exercicio11poo():void{
    class Lanchonete {
        nomeCliente:string
        numeroPedido:number
        nomePedido:string
        valorPedido:number




        constructor(nomeCliente:string, numeroPedido:number, nomePedido:string, valorPedido:number){
            this.nomeCliente = nomeCliente
            this.numeroPedido = numeroPedido
            this.valorPedido = valorPedido
            this.nomePedido = nomePedido
        }




        exibir(){
            alert(`======= PEDIDO =======\nNome do cliente: ${this.nomeCliente}\nNome do Pedido: ${this.nomePedido}\nValor do Pedido: ${this.valorPedido}`)
        }
    }





    }

