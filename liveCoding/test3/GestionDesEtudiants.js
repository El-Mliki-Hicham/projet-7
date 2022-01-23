class GestionEtudiant {

#listEtudiant = []
compter = 0




get listEtudiant() {

return this.#listEtudiant

}
addEtudiant(etudiant){
    this.compter = this.compter + 1 
    etudiant.id = this.compter
    this.#listEtudiant.push(etudiant)

}

getItem(id){
for (let i  = 0; i < this.#listEtudiant.length; i ++) {
    if(id == this.#listEtudiant[i].id){
        return this.#listEtudiant[i]
    }

    }

}

modifierRow(etudiant){
    for (let i  = 0; i  < this.#listEtudiant.length; i++) {
        if( etudiant.id == this.#listEtudiant[i].id){
             this.#listEtudiant[i] =  etudiant
        } }
}

}



