var gestionOuvrage = new GestionOuvrage()
var selectRow = null;
var rowId = null;


$(document).ready(function() {
    
$("#submitButton").click(function (event) { 
    event.preventDefault();
    
    var ouvrage = readOuvrage();
    gestionOuvrage.addOuvrage(ouvrage);

    insertNewRow();

    resetForm();
});

function resetForm(){
    $("#inputTitle").val(" ");
    selectRow = null ; 
}





function readOuvrage(){
    var ouvrage = new Ouvrage();
    ouvrage.titre = $("#inputTitle").val();


}

function insertNewRow(){

var List = gestionOuvrage.ouvrageList

var tableBody = $("#workTable").html("tbody")[0];


for(i=0 ; i < List.length ; i++){
    $(tableBody).append( i );
}
}






});