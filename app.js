'use strict';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let allDonor = [];
function Donate(DonorName, amount) {
    this.DonorName = DonorName;
    this.amount = amount;
    this.age = getRandomInt(18, 30);
    allDonor.push(this);

}


let con1 = new Donate("thaer", 1000);
let con2 = new Donate("thaeeer", 100);
console.log(allDonor);





Donate.prototype.render = function () {
    let main = document.getElementById("main");
    let table = document.createElement("table");
    main.appendChild(table);
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    let tableHeader = document.createElement("th");
    tableRow.appendChild(tableHeader)
    tableHeader.textContent = "Donor Name"
    tableHeader = document.createElement("th");
    tableRow.appendChild(tableHeader)
    tableHeader.textContent = "Amount"
    tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for (let i = 0; i < allDonor.length; i++) {
        console.log(allDonor[i]);
        let tableData = document.createElement("td")
        tableRow.appendChild(tableData);
        tableData.textContent = allDonor[i];
    }
    Donate.prototype.calcTotal = function calcTotal() {
        this.total = this.total + parseInt(this.amount);
        return (this.total);
    }

    Donate.prototype.getAge = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}
for (let i = 0; i < allDonor.length; i++) {

    allDonor[i].render();

}
let input = document.getElementById("btn");
input.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    const DonorName = event.target.DonorName.value;
    const amount = event.target.amount.value;
    let user =new Donate(DonorName, amount);
saveToLs();
    user.render();

}
function saveToLs() {
    let arrOf = JSON.stringify(allDonor);
    localStorage.setItem("saveDon", arrOf);
}
function gettingFromLs() {
    let data = localStorage.getItem("saveDon");
    let show = JSON.parse(data);
    if (show) {
        for (let i = 0; i < show.length; i++) {
            let reInst = new Donate(show[i].DonorName, show[i].amount);


        }
    }
}
gettingFromLs();