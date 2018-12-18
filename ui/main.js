var selected_service,selected_date,selected_price;

var select_service_btn = document.getElementById("select_service_btn");
select_service_btn.onclick = function(){
    var select_service = document.getElementById("select_service").value;
    selected_service = select_service;
    console.log(select_service);
};

var select_date_btn = document.getElementById("select_date_btn");
select_date_btn.onclick = function(){
    var select_date = document.getElementById("select_date").value;
    selected_date = select_date;
    console.log(select_date);
};

var select_price_btn = document.getElementById("select_price_btn");
select_price_btn.onclick = function(){
    var select_price = document.getElementById("select_price").value;
    selected_price = select_price;
    console.log(select_price);
};

var cont = document.getElementById("continue");
cont.onclick = function(){
    var service = document.getElementById("service");
    service.innerHTML = confirmServiceOrderTemplate();
    proceedToPayment();
};

function confirmServiceOrderTemplate(){
    var serviceOrderTemplate = `
        Confirm your service order : <br /><br />
        Selected Service : ${selected_service} <br />
        Select Date : ${selected_date} <br />
        Select Price : ${selected_price} <br />

        <button id="proceed_btn">Proceed to payment</button>
`;

    return serviceOrderTemplate;
};

function paymentTemplate(){
    var payTemplate = `
        Total Amount = ${selected_price} <br /><br />
        <button id="make_payment">Make Payment<button>
    `;

    return payTemplate;
}


function proceedToPayment(){
    var proceed_btn = document.getElementById("proceed_btn");
    var service = document.getElementById("service");
    proceed_btn.onclick = function(){
        service.innerHTML = paymentTemplate();
        var make_payment = document.getElementById("make_payment");
        make_payment.onclick = function(){
            service.innerHTML = successTemplate();
        }
    
    };

    
}

function successTemplate(){
    var sucTemplate = `
        Your service order was placed successfully!!!
    `;

    return sucTemplate;
}