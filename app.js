let income = 0;
let expense = 0;

const table = document.getElementById("table");

document.querySelector("button").addEventListener("click", addTransaction);

function addTransaction(){

    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    const amount = Number(document.getElementById("amount").value);

    if(description==="" || amount<=0){
        alert("Please enter description and amount");
        return;
    }

    if(type==="Income"){
        income += amount;
    }else{
        expense += amount;
    }

    document.getElementById("income").innerHTML="LKR "+income.toLocaleString();
    document.getElementById("expense").innerHTML="LKR "+expense.toLocaleString();
    document.getElementById("balance").innerHTML="LKR "+(income-expense).toLocaleString();

    table.innerHTML += `
    <tr>
        <td>${type}</td>
        <td>${description}</td>
        <td>LKR ${amount.toLocaleString()}</td>
    </tr>
    `;

    document.getElementById("description").value="";
    document.getElementById("amount").value="";
}
