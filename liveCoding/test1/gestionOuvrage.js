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



 getItem(id){
for (let i = 0; i <this.listOuvrage.length; i++) {
  if(id == this.listOuvrage[i].id){
      return this.listOuvrage[i]
  }
    
}
}


modifierOuvrage(ouvrage){

for (let i = 0; i  < this.listOuvrage.length; i++) {
    
if( ouvrage.id == this.listOuvrage[i].id){
    this.listOuvrage[i] = ouvrage

}
    
}

}





}
