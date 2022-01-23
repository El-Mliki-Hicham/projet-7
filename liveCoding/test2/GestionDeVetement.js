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

getId(id){
for (let i = 0; i < this.#_listVetement.length; i++) {
    if( id == this.#_listVetement[i].id){
        return this.#_listVetement[i]
        
    }
    
    
}

}


}