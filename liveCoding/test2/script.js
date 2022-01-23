var gestionVetement = new GestionVetement ()
var insertRow = null
var rowId
document.getElementById("formSubmit").addEventListener("submit" ,function (event) {
    event.preventDefault()
  

vetement = readVetement()
if(insertRow == null) {
    gestionVetement.addVetement(vetement)

}

else 
if(confirm("click oui pour modifier")){
vetement.id = rowId
gestionVetement.modifierVetement(vetement)

}


    insertNewRow()

    restForm()


})

function restForm(){

    document.getElementById("VetementInput").value = " "
    document.getElementById("color").value = " "
    document.getElementById("prix").value = " "
    insertRow = null
}

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

cell5=newRow.insertCell(4)

var modifierButton = document.createElement('button')
var modifierButtonName = document.createTextNode("modifier")
modifierButton.appendChild(modifierButtonName)
modifierButton.setAttribute('onclick',"modifier(this)")

cell5.appendChild(modifierButton)


}
}

function modifier(buttonReferance ){

insertRow = buttonReferance.parentElement.parentElement
rowId = insertRow.cells[0].innerHTML
var vetement = new Vetement()
vetement = gestionVetement.getId(rowId)
document.getElementById('VetementInput').value = vetement.name
document.getElementById('color').value = vetement.color
document.getElementById('prix').value = vetement.prix

}