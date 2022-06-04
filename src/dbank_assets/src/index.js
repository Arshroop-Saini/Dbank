import { dbank } from "../../declarations/dbank";

window.addEventListener('load', async ()=>{
  const currentAmount= await dbank.checkBalance();
  document.getElementById('value').innerHTML= Math.round(currentAmount * 100)/100;
})

document.querySelector('form').addEventListener('submit',async (event)=>{

  
  const button= event.target.querySelector('#submit-btn');

  var topUpAmt= parseFloat(document.getElementById('input-amount').value);
  var widrawAmt= parseFloat(document.getElementById('withdrawal-amount').value);
  button.setAttribute('disabled', true);
  // console.log((topUpAmt));
  // console.log(widrawAmt);
  if (document.getElementById('input-amount').value.length != 0) {
    await dbank.topUp(topUpAmt);
  }
  

  if (document.getElementById("withdrawal-amount").value.length !=0) {
    await dbank.widraw(widrawAmt);
  }
 

  const currentAmount= await dbank.checkBalance();
  document.getElementById('value').innerHTML= Math.round(currentAmount * 100)/100;

  

  document.getElementById('input-amount').value= "";
  document.getElementById('withdrawal-amount').value= "";
  
  button.removeAttribute('disabled');
  
  await dbank.Compound();

});