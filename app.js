let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const table = document.getElementById("table");

render();

document.querySelector("button").addEventListener("click", addTransaction);

function addTransaction() {

    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value.trim();
    const amount = Number(document.getElementById("amount").value);

    if(description === "" || amount <= 0){
        alert("Please enter description and amount");
        return;
    }

    transactions.push({
        type,
        description,
        amount,
        date:new Date().toLocaleDateString()
    });

    save();

    document.getElementById("description").value="";
    document.getElementById("amount").value="";
}

function save(){

    localStorage.setItem("transactions",JSON.stringify(transactions));

    render();

}

function render(){

    table.innerHTML="";

    let income=0;
    let expense=0;

    transactions.forEach((t,index)=>{

        if(t.type==="Income"){
            income+=t.amount;
        }else{
            expense+=t.amount;
        }

        table.innerHTML+=`
        <tr>
            <td>${t.date}</td>
            <td>${t.type}</td>
            <td>${t.description}</td>
            <td>LKR ${t.amount.toLocaleString()}</td>
            <td>
                <button onclick="removeTransaction(${index})">Delete</button>
            </td>
        </tr>
        `;

    });

    document.getElementById("income").innerHTML="LKR "+income.toLocaleString();
    document.getElementById("expense").innerHTML="LKR "+expense.toLocaleString();
    document.getElementById("balance").innerHTML="LKR "+(income-expense).toLocaleString();

}

function removeTransaction(index){

    if(confirm("Delete this transaction?")){

        transactions.splice(index,1);

        save();

    }

}
