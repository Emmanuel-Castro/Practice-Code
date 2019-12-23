var curr1 = document.getElementById("curr1");
var curr2 = document.getElementById("curr2");
var quantity = document.getElementById("quantity");


function convert(quant, curr1, curr2){
    var values = {USD:1.00, EUR:0.91, JPY:106.95, GBP:0.81, AUD:1.47, CAD:1.32, CHF:0.99, CHY:7.15, 
        NZD:1.57, RUB:66.23, INR:71.87, BRL:4.10, ZAR:14.89, HKD:7.84, NOK:9.01};
    return (quant/values[curr1])*values[curr2];
}


function calculate() {
    var result = convert(quantity.value, curr1.value, curr2.value).toFixed(2);
    var total = quantity.value + curr1.value + " equals to " + result + curr2.value;
    document.getElementById('resultCont').innerHTML = total;
}

/* function convProcess() {
        
        var americanDollar = document.getElementById('quantity').value; 
        var currency = document.getElementById('currency').value; 
        
        if (currency == "EUR") {
            currencyValue = 0.91;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Euros";
            
        } else if (currency == "JPY") {
            currencyValue = 106.95;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Japanese Yens";
             
        } else if (currency == "GBP") {
            currencyValue = 0.81;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Sterling Pounds";
             
        } else if (currency == "AUD") {
            currencyValue = 1.47;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Australian Dollars";
             
        } else if (currency == "CAD") {
            currencyValue = 1.32;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Canadian Dollars";
             
        } else if (currency == "CHF") {
            currencyValue = 0.99;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Swiss Francs";
             
        } else if (currency == "CHY") {
            currencyValue = 7.15;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Chinese Yuans";
             
        } else if (currency == "NZD") {
            currencyValue = 1.57;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " New Zealand Dollars";
             
        } else if (currency == "RUB") {
            currencyValue = 66.23;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Russian Rubles";
             
        } else if (currency == "INR") {
            currencyValue = 71.87;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Indian Rupees";
             
        } else if (currency == "BRL") {
            currencyValue = 4.10;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Brazilian Reals";
             
        } else if (currency == "ZAR") {
            currencyValue = 14.89;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " South African Rands";
             
        } else if (currency == "HKD") {
            currencyValue = 7.84;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Honk Kong Dollars";
             
        } else if (currency == "NOK") {
            currencyValue = 9.01;
            result = americanDollar * currencyValue;
            result = result.toFixed(2);
            total = americanDollar + " Dollar/s equals to " + result + " Norwegian Krona";
             
        } 
        
        document.getElementById('resultCont').innerHTML = total;
    }
*/