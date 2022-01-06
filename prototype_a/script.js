var ouvrageBLO = new OuvrageBLO();

var selectRow = null;


document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ouvrage = readOuvrage();
    if (selectRow == null) {
        ouvrage.id = ouvrageBLO.compteur
        // ouvrageBLO.compteur++;
        insertNewRow(ouvrage);
        ouvrageBLO.addOuvrage(ouvrage);
    } else
    if (confirm("Êtes-vous sûr de modifier cette œuvre?"))
        editRow(ouvrage)

        resetForm();
})

function resetForm() {
    document.getElementById("inputTitle").value = "";
    selectRow = null;
}


function readOuvrage() {
    var ouvrage = new Ouvrage();
    
    ouvrage.titre = document.getElementById("inputTitle").value;
    return ouvrage;
}



function insertNewRow(ouvrage) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = ouvrage.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = ouvrage.titre;
    cell3 = newRow.insertCell(2)


    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")

    var editContent = document.createTextNode("Edit")
    editButton.appendChild(editContent)
    editButton.setAttribute('onclick', 'onEdit(this)')

    var deleteContent = document.createTextNode('Delete')
    deleteButton.appendChild(deleteContent)
    deleteButton.setAttribute("onclick", 'onDelete(this)')

    cell3.appendChild(editButton)
    cell3.appendChild(deleteButton)
}



function onEdit(buttonReference) {
    selectRow = buttonReference.parentElement.parentElement;
    var rowId = selectRow.cells[0].innerHTML
    var ouvrage = new Ouvrage();
    ouvrage = ouvrageBLO.getItem(rowId)
    document.getElementById("inputTitle").value = ouvrage.titre;

}

function editRow(ouvrageToEdit) {
    ouvrageBLO.editOuvrage(ouvrageToEdit)
    selectRow.cells[1].innerHTML = ouvrageToEdit.titre;
}



