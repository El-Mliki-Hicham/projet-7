var gestionVetement = new GestionVetement ()
var insertRow = null

document.getElementById("formSubmit").addEventListener("submit" ,function (event) {
    event.preventDefault()
  

vetement = readVetement()
if(insertRow == null) {
    gestionVetement.addVetement(vetement)

    insertNewRow()
}

})

function readVetement(vetement){

    var vetement = new Vetement 

vetement.name= document.getElementById('VetementInput').value
vetement.color= document.getElementById('color').value
vetement.prix= document.getElementById('prix').value
return vetement
}

function insertNewRow(){
var list = gestionVetement.listVetement



var tableList = document.getElementById('tablelist').getElementsByTagName("tbody")[0];


while(tableList.rows.length>0){
     tableList.deleteRow(0) }


for (let i = 0; i < list.length; i++) {
 
    

var newRow = tableList.insertRow(tableList.length)
cell1=newRow.insertCell(0)
cell1.innerHTML =list[i].id
cell2= newRow.insertCell(1)
cell2.innerHTML=list[i].name
cell3= newRow.insertCell(2)
cell3.innerHTML=list[i].color
cell4= newRow.insertCell(3)
cell4.innerHTML=list[i].prix
}
}