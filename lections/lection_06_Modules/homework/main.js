fetch('https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014')
  .then(function(response) {
    alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
    alert(response.status); // 200

    return response.json();
   })
  .then(function(exchangeRate) {
    alert(exchangeRate.saleRateNB); 
  })
  .catch( alert );