var gestionEtudiant =new  GestionEtudiant()

var insertRow = null 
var rowId 

document.getElementById("formSubmit").addEventListener("submit",function(event){
 event.preventDefault()

etudiant = readEtudiant()


if(insertRow == null){
    gestionEtudiant.addEtudiant(etudiant)
}



else 
if(confirm("modif")){

etudiant.id = rowId
gestionEtudiant.modifierRow(etudiant);

}

insertNewRow()

restForm()
})


function restForm(){
  
   document.getElementById("name").value = '' 
   document.getElementById("cin").value = ''
   document.getElementById("class").value= ''

   insertRow = null
   
}



function readEtudiant(){

        var etudiant = new Etudiant

   etudiant.name = document.getElementById("name").value 
   etudiant.cin = document.getElementById("cin").value 
   etudiant.class = document.getElementById("class").value
   
   return etudiant

}
function insertNewRow(){

    var list = gestionEtudiant.listEtudiant

   var tablelist = document.getElementById('tablelist').getElementsByTagName('tbody')[0];

   while(tablelist.rows.length>0){
    tablelist.deleteRow(0) }

   for (let i = 0; i < list.length; i++) {
   
   
    

    var newRow = tablelist.insertRow(tablelist.length)
    cell1= newRow.insertCell(0) 
    cell1.innerHTML =list[i].id
    cell2= newRow.insertCell(1)
    cell2.innerHTML = list[i].name
    cell3= newRow.insertCell(2)
    cell3.innerHTML = list[i].cin
    cell4= newRow.insertCell(3)
    cell4.innerHTML = list[i].class

    cell5 = newRow.insertCell(4)

    var modifierButton = document.createElement("button")
    var modifierButtonName = document.createTextNode('modifier')
        modifierButton.appendChild(modifierButtonName)
        modifierButton.setAttribute("onclick","modifier(this)")
    cell5.appendChild(modifierButton)


}
}

function modifier(buttonReferance){

    insertRow = buttonReferance.parentElement.parentElement
    rowId = insertRow.cells[0].innerHTML
    
    var etudiant = new Etudiant
etudiant = gestionEtudiant.getItem(rowId)
    document.getElementById("name").value = etudiant.name 
    document.getElementById("cin").value = etudiant.cin 
    document.getElementById("class").value = etudiant.class 
    


}