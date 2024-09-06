const amountInput=document.querySelector(".amount");
const interestrateInput=document.querySelector(".interest");
const tenureInput=document.querySelector(".tenure");

const loanEmivalue=document.querySelector(".loan-emi .value");
const totalinterestvalue=document.querySelector(".total-interest .value");
const totalamountvalue=document.querySelector(".total-amount  .value");

const calculateBtn = document.querySelector(".cal-btn");

let loanAmount = parseFloat(amountInput.value);
let interestrate = parseFloat(interestrateInput.value);
let loantenure = parseFloat(tenureInput.value);

let interest = interestrate / 12 / 100;

const calculateEMI = () =>
{
    let emi = loanAmount * interest * (Math.pow(1 + interest, loantenure) / (Math.pow(1 + interest,loantenure) -1)); 

    return emi;
};

const updateData = (emi) => 
{
    loanEmivalue.innerHTML = Math.round(emi);

    let totalamount = Math.round(loantenure * emi);
    totalamountvalue.innerHTML = totalamount;

    let totalinterestpayable = Math.round(totalamount - loanAmount);
    totalinterestvalue.innerHTML = totalinterestpayable;
};

const init = () => {
    let emi = calculateEMI();
    updateData(emi);

};

init();

const refreshInputValues = () => {
loanAmount = parseFloat(amountInput.value);
 interestrate = parseFloat(interestrateInput.value);
 loantenure = parseFloat(tenureInput.value);
 interest = interestrate / 12/ 100;

}

calculateBtn.addEventListener("click", () =>{
    refreshInputValues();
    let emi = calculateEMI();
    updateData(emi);  
});