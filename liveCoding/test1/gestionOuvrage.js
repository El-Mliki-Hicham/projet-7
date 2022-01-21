class GestionOuvrage{

 listOuvrage = []; 
comter = 0 ; 


get listOuvrage(){

    return this.listOuvrage 
}

 addOuvrage(ouvrage){
this.comter = this.comter + 1
ouvrage.id = this.comter
this.listOuvrage.push(ouvrage)
 }



}