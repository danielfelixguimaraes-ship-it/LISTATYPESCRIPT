// 1.Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function questao1() {
class Bola{
    private _cor: string
    private _circu:number
    private _material:string

    constructor(cor:string, circun:number, mate:string){
        this._cor = cor
        this._circu = circun
        this._material = mate
    } 

    public set trocaCor(novaCor: string){
        this._cor = novaCor
    }

    public get mostraCor(): string {
        return this._cor
    }
}
alert("Questão 1 rodando, sem testes!")
}