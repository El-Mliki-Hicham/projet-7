class GestionVetement{

 #_listVetement = []
compter = 0 


get listVetement (){

    return this.#_listVetement 
}

addVetement(vetement){

    this.compter = this.compter +1
    vetement.id = this.compter
    this.#_listVetement.push(vetement)
    
}


}