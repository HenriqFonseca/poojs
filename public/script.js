class animal{
    constructor(animal,idade,especie){
        this.animal= animal //1=Cachorro, 2=Gato
        this.idade= idade;
        this.especie= especie; //1 labrador, 2 pitbull, 3 siames
    }

    info(){
        if(this.animal == 1){

            console.log("Animal: Cachorro" )
        }else if(this.animal == 2){
            console.log("Animal: Gato" )
        }
        console.log("Idade:" + this.idade)

        if(this.especie == 1){

            console.log("Especie/raça: labrador" )
        }else if(this.especie == 2){
            console.log("Especie/raça: pitbull" )
        }else{
            console.log("Especie/raça: siames" )
        }
    }

    set setAnimal(a){
        this.animal=a
    }


    set setidade(i){
        if(i<0 || i>30){
            alert("Idade inválida")
        }else{
            this.idade=i
        }
    }
    get getIdade(){
        return this.idade
    }

    set setEspecie(e){
        this.especie = e
    }
}

class cachorro extends animal{
    constructor(nome){
        super('','','')
        this.nome = nome
    }

    info(){
        super.info()
        console.log("===========================")
        console.log("                  ")
    }
    //definir nome do cachorro
    set setNome(n){
        this.nome=n
    }

    //capturar nome do cachorro
    get getNome(){
        return this.nome
    }

}
// CACHORRO 1
let dog1 = new cachorro()

dog1.setEspecie = 1 // 1 = labrador
dog1.setidade=13    //definir idade
dog1.setNome= "toby" //definir nome
console.log("Nome do Animal: " + dog1.getNome)
dog1.info()

// CACHORRO 2
let dog2 = new cachorro()

dog2.setEspecie = 2     //pitbull
dog2.setidade=3         //idade
dog2.setNome = "mel"    //nome
console.log("Nome do Animal: " + dog2.getNome)
dog2.info()


class gato extends animal{
    constructor(cor, nome){
        super('','','')
        this.cor = cor
        this.nome = nome
    }

    set setCor(cor){
        this.cor= cor
    }

    get getCor(){
        return this.cor
    }

    set setNomecat(nome){
        this.nome=nome
    }

    get getNomecat(){
        return this.nome
    }

    info(){
        console.log("Nome do Gato: " + this.getNomecat)
        super.info()
        console.log("=================")
        console.log("                  ")
    }

    miar(){
        return alert("miau");
    }
}

// GATO
let cat1 = new gato()
cat1.setNomecat = "felizardo"
cat1.setAnimal=2    // Define q ele é um gato
cat1.setidade=3     //idade do gato
cat1.setEspecie=3   //siames
cat1.info()
