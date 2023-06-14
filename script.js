function addItem(){
    var itemName = document.getElementById('ItemName').value;
    var itemPrice = document.getElementById('ItemPrice').value;
    var qty = document.getElementById('quantity').value;
    var total = itemPrice * qty;

    var table = document.getElementById('invoiceTable');
    var row = table.insertRow(-1);
    var itemNameCell = row.insertCell(0);
    var priceCell = row.insertCell(1);
    var quantityCell = row.insertCell(2);
    var totalCell = row.insertCell(3);
    var actionCell = row.insertCell(4);

    itemNameCell.innerHTML = itemName;
    priceCell.innerHTML = itemPrice;
    quantityCell.innerHTML = qty;
    totalCell.innerHTML = total;
    actionCell.innerHTML = "<button id='del' onclick='deleteItem(this.parentNode.parentNode)'> Delete </button> ";

    var itemName = document.getElementById('ItemName').value = "";
    var itemPrice = document.getElementById('ItemPrice').value = "";
    var qty = document.getElementById('quantity').value = "";

    updateTotalAmount();
}
function deleteItem(row){
    var table = document.getElementById('invoiceTable');
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex);
    updateTotalAmount();
}
function updateTotalAmount(){
    var table = document.getElementById('invoiceTable');
    var rowCount = table.rows.length;
    var totalAmount = 0;
    
    for (var i = 1; i < rowCount; i++){
        var row = table.rows[i];
        var totalCell = row.cells[3];
        totalAmount += parseFloat(totalCell.innerHTML);
    }
    document.getElementById("totalAmount").innerHTML = totalAmount;
}

