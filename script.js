var selectedRow = null;

function onFormSubmit(){
    if (validate()){
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    }else
        updateRecord(formData);
    
    resetForm();
    }
}

function readFormData(){
    var formData = {};
    formData["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    formData["matricula"] = document.getElementById("matricula").value;
    formData["salario"] = document.getElementById("salario").value;
    formData["cidade"] = document.getElementById("cidade").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeCompleto;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.matricula;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salario;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cidade;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick = "onEdit(this)">Editar</a>  
                        <a  onClick = "onDelete(this)">Deletar</a>`; 
}

function resetForm(){
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("cidade").value = "";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("matricula").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salario").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cidade").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.nomeCompleto;
    selectedRow.cells[1].innerHTML = formData.matricula;
    selectedRow.cells[2].innerHTML = formData.salario;
    selectedRow.cells[3].innerHTML = formData.cidade;
}

function onDelete(td){
    if(confirm("Tem certeza que deseja excluir este elemento?")){
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate(){
    isValid = true;
    if (document.getElementById("nomeCompleto").value == ""){
        isValid = false;
        document.getElementById("nomeCompletoValidationError").classList.remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById("nomeCompletoValidationError").classList.contains("hide"))
            document.getElementById("nomeCompletoValidationError").classList.add("hide");
    }
    return isValid;
}