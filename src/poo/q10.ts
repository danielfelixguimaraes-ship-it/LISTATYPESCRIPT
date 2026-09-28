// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade


// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.


export function exercicio10poo(){
    class Tamagushi {
        nome:string
        fome:number
        saude:number
        idade:number
        energia:number = 100


        constructor(nome:string,idade:number, fome:number, saude:number){
            this.nome = nome
            this.idade = idade
            this.fome = fome
            this.saude = saude
        }

        private get humoTama(){
            if(this.fome <= 10 && this.saude >= 80){
                return "Feliz"
            }
            else if(this.fome >= 40 && this.saude >= 60){
                return "Normal"
            }
            else{
                return "Triste"
            }
        }


        mudarNome(nomeNovo:string){
            if (nomeNovo === "") {
                alert("O nome não pode ser vazio.")
            } else {
                alert("Nome alterado com sucesso!")
                this.nome = nomeNovo
            }
           
        }


        alimentar(comida:number){
            switch (comida){
                case 1:
                    this.fome -= 15
                    alert(`${this.nome} foi alimentado!`)
                    break
                case 2:
                    this.fome -= 40
                    alert(`${this.nome} foi alimentado!`)
                    break
                case 3:
                    this.fome -= 30
                    alert(`${this.nome} foi alimentado!`)
                    break
                case 4:
                    this.fome -= 10
                    alert(`${this.nome} foi alimentado!`)
                    break
                case 5:
                    this.fome -= 50
                    alert(`${this.nome} foi alimentado!`)
                    break
                default:
                    alert("Ops! Opção inválida")
                    break
            }
           
            if(this.fome < 0){
                this.fome = 0
            }
        }


        curar(remedio:number){
            switch(remedio){
                case 1:
                    this.saude += 10
                    break


                case 2:
                    this.saude += 20
                    break


                case 3:
                    this.saude += 30
                    break
                default:
                    alert("Ops! Opção inválida")
                    break
            }


            if(this.saude > 100){
                this.saude = 100
            }
        }




    }

}


