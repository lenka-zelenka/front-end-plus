
// var apiKey = '912e5fbedf66b8fd805063c67d6078a1';
var date = '01.12.2016';
var url = 'https://api.privatbank.ua/p24api/exchange_rates?json&date='+ date;
var respData; 


fetch(url)
    .then(res => res.json())
    .then(resp => respData = resp )


var render = function(respData){
    var date = respData.date;
    return `<table>
    <tr>
        <th>${date}</th>
        <th>2</th>
        <th>3</th>
    </tr>
    <tbody>
        <tr>
            <td>sewe</td>
            <td>wewer</td>
            <td>werwer</td>
        </tr>
    </tbody>
</table>`
}(respData)