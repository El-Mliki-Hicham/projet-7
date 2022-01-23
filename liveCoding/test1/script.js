var gestionOuvrage = new GestionOuvrage 
var rowNew = null
var rowId
document.getElementById("formSubmit").addEventListener("submit" ,function (event) {
    event.preventDefault()
  
ouvrage = readOuvrage()
if(rowNew == null){ 
    gestionOuvrage.addOuvrage(ouvrage)
}
else
if (confirm("modifier?")){

    ouvrage.id  = rowId 

    gestionOuvrage.modifierOuvrage(ouvrage)


}
    insertNewRow()

    restForm()

})


 function readOuvrage(ouvrage){
    ouvrage = new Ouvrage
ouvrage.titre = document.getElementById("inputTitle").value
ouvrage.prix = document.getElementById("inputAuthor").value
return ouvrage 
 }



function restForm(){

document.getElementById("inputTitle").value = " "
newRow = null

}




function insertNewRow (){
var list = gestionOuvrage.listOuvrage
    var tableBody =  document.getElementById('worksTable').getElementsByTagName('tbody')[0]
while (tableBody.rows.length >0) {
        tableBody.deleteRow(0)
                                }

for ( i = 0; i < list.length; i++) {
    var newRow = tableBody.insertRow(tableBody.length)
    cell1 =newRow.insertCell(0)
    cell1.innerHTML = list[i].id
    
    cell2= newRow.insertCell(1)
    cell2.innerHTML = list[i].titre 
    
    cell3 = newRow.insertCell(2)

    var modifierButton = document.createElement('button')
    var supprimeButton = document.createElement('button')

    var buttonNameModifier = document.createTextNode("modifier")
    var buttonNameSupprime = document.createTextNode("supprime")


    modifierButton.appendChild(buttonNameModifier)
    supprimeButton.appendChild(buttonNameSupprime)

    modifierButton.setAttribute("onclick",'modifier(this)')
    supprimeButton.setAttribute("onclick",'supprime(this)')

    cell3.appendChild(modifierButton)
    cell3.appendChild(supprimeButton)

}}

function modifier(buttonReferance){

    rowNew = buttonReferance.parentElement.parentElement

    rowId = rowNew.cells[0].innerHTML

    var ouvrage = new Ouvrage()
ouvrage= gestionOuvrage.getItem(rowId)

document.getElementById("inputTitle").value = ouvrage.titre 
 
document.getElementById("inputPrix").value = ouvrage.prix 


}

