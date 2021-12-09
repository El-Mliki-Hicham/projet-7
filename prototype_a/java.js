document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var ovrage = readOvrage();
    insertNewRow(ovrage);
})


function readOvrage() {

    var ovrage = {};
    ovrage["title"] = document.getElementById("inputTitle").value;
    ovrage["author"] = document.getElementById("inputAuthor").value;
    ovrage["price"] = parseFloat(document.getElementById("inputPrix").value);
    ovrage["date"] = document.getElementById("inputDate").value;
    ovrage["language"] = document.getElementById("inputLanguage").value;
    var cheackValues = document.getElementsByName("ovrageType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            ovrage["type"] = cheackValues[i].value;
            break;
        }
    }
    return ovrage;
}



function insertNewRow(ovrage) {
    var tableBody = document.getElementById("ovragesTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = ovrage.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = ovrage.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = ovrage.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = ovrage.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = ovrage.language
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = ovrage.type
    cell7 = newRow.insertCell(6)


}