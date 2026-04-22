let totalAmount = 0;

function addItem() {
    let product = document.getElementById("product").value;
    let price = document.getElementById("price").value;
    let qty = document.getElementById("qty").value;
    let error = document.getElementById("error");

    if(product === "" || price === "" || qty === "") {
        error.innerText = "Please fill all fields";
        return;
    }

    error.innerText = "";

    let total = price * qty;
    totalAmount += total;

    let table = document.getElementById("billTable");
    let row = table.insertRow();

    row.insertCell(0).innerText = product;
    row.insertCell(1).innerText = price;
    row.insertCell(2).innerText = qty;
    row.insertCell(3).innerText = total;

    let deleteCell = row.insertCell(4);
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "delete-btn";

    btn.onclick = function() {
        totalAmount -= total;
        row.remove();
        updateTotal();
    };

    deleteCell.appendChild(btn);

    updateTotal();

    document.getElementById("product").value = "";
    document.getElementById("price").value = "";
    document.getElementById("qty").value = "";
}

function updateTotal() {
    document.getElementById("grandTotal").innerText = "Total: ₹" + totalAmount;
}

function clearBill() {
    let table = document.getElementById("billTable");
    table.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
        </tr>`;

    totalAmount = 0;
    updateTotal();
}