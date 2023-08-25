let TotalPrice = 0;

function mouseClick(target){
    
    const NameContainer = document.getElementById('nameContainer');
    const count = NameContainer.childElementCount;
    const itemName = target.childNodes[5].childNodes[1].innerText;
    const li = document.createElement('p');
    li.innerText =   `${count + 1}. ${itemName}`;
    NameContainer.appendChild(li);

    // Calculate price

    const price = target.childNodes[5].childNodes[3].innerText.split(" ")[0];

    TotalPrice = parseFloat(TotalPrice) + parseFloat(price);
    document.getElementById('total').innerText =TotalPrice.toFixed(2);

    // Make purchase button 
    const MakePurchaseButton = document.getElementById('make-purchase-btn');
    if(TotalPrice > 0){
        MakePurchaseButton.removeAttribute('disabled');
    }

    // Apply button 
      const ApplyButton = document.getElementById('apply-btn');
      
    if(TotalPrice >= 200){
        ApplyButton.removeAttribute('disabled');
    }
   
    

}

function Click(target){
    const TotalValue =document.getElementById('tooo');
    const TotalPriceee =target.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[9].childNodes[5].childNodes[1].innerText;
    const DiscountName = document.getElementById('dis');
    const DiscountPrice = target.parentNode.parentNode.parentNode.parentNode.childNodes[7].childNodes[9].childNodes[3].childNodes[1].innerText;
    const ApplyClick = document.getElementById('apply-click');
   const ApplyButtonClicked = ApplyClick.value;

   


   if (ApplyButtonClicked === 'SELL200'){
    const TotalDiscountPrice = parseFloat(TotalPrice)*0.2;
    document.getElementById('dis').innerText =TotalDiscountPrice.toFixed(2);
    const TotalTaka = parseFloat(TotalPrice) - TotalDiscountPrice;
    
     document.getElementById('totall').innerText =TotalTaka.toFixed(2); 
   }
   else{
    alert('Invalid Promo Code')
   }
   
}

function BackHome(target){
    window.location.href = 'index.html';
}

