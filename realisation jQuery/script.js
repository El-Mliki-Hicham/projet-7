var gestionProduit = new GestionProduit
var insertRow = null
var rowId;


$("#submitButton").click(function (event) { 
    event.preventDefault();
    

// document.getElementById("formSubmit").addEventListener("submit",function(event){

// event.preventDefault()


produit = readProduit()

if(insertRow == null){
    gestionProduit.addProduit(produit)
}

else
if( confirm("modifier")){
    produit.id = rowId
    gestionProduit.modifierProduit(produit)


}

insertNewRow()

restForm()
// })
});
function restForm(){

    $("#name").val(' ');
    $('#prix').val(' ');

//  document.getElementById("name").value = ''
//  document.getElementById("prix").value= ' '
}





function readProduit(produit){

var produit = new Produit()


produit.name = $("#name").val()
produit.prix = $("#prix").val()
// produit.name = document.getElementById("name").value
// produit.prix = document.getElementById("prix").value

return produit
}


function insertNewRow(){

    var list  = gestionProduit.listProduit

    var tableList = $("#TableList").children("tbody")[0];

    // var tableList = document.getElementById("TableList").getElementsByTagName("tbody")[0];

    while(tableList.rows.length >0){
        tableList.deleteRow(0); }


for (let i = 0; i < list.length; i++) {
   var newRow = tableList.insertRow(tableList.length)
   cell1 = newRow.insertCell(0);
    cell1.innerHTML = list[i].id 

cell2 = newRow.insertCell(1);
    cell2.innerHTML = list[i].name

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = list[i].prix

    cell4 = newRow.insertCell(3)



    $(cell4).append('<button id = "btnM">modifier</button>');        
    $(cell4).append('<button id = "btnS">suprimer</button>');        

    $(cell4).attr("onclick",'modifier(this)'); 
    $(cell4).attr("onclick",'suprimer(this)');

    // var modifierButton = document.createElement("button")
    // var supprimeButton = document.createElement("button")
    

    // var modifierButtonName= document.createTextNode('modifier')
    // var supprimeButtonName= document.createTextNode('suprimer')

    // modifierButton.appendChild(modifierButtonName)
    // supprimeButton.appendChild(supprimeButtonName)

    // modifierButton.setAttribute("onclick",'modifier(this)')
    // supprimeButton.setAttribute("onclick",'suprimer(this)')
    
    // cell4.appendChild(modifierButton) ;
    // cell4.appendChild(supprimeButton) ; 
//     $(cell4).set(supprimeButton);
//     $(cell4).val(modifierButton);
    
}


}


function modifier(buttonreferance){
insertRow = buttonreferance.parentElement.parentElement
rowId  = insertRow.cells[0].innerHTML
produit= new Produit()
produit = gestionProduit.getId( rowId)

$("#name").val(produit.name);
$("#prix").val(produit.prix);

// document.getElementById("name").value = produit.name
// document.getElementById("prix").value = produit.prix   

}
 

function suprimer(buttonreferance){
    console.log(buttonreferance)
if (confirm("supprime")) {
    var row = buttonreferance.parentElement;

    console.log(row)
    var rowId = row.cells[0].innerHTML

    $(row).remove();

    // document.getElementById("TableList").deleteRow(row.rowIndex)

    gestionProduit.suprimerProduit(rowId)
    restForm()
}
}

