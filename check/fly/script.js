/*const origin = document.querySelector(".input-group input");
const destination = document.querySelector(".input-group1 input");
const departure_at = "2022-01-26";
const return_at = "2022-02-20";

function search()
{
window.location.href = "https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MAA&destination=DEL&departure_at=2022-01-26&unique=false&sorting=price&direct=false&currency=rub&limit=30&page=1&one_way=true&token=05d2cdf1f1deafc784a07d80df2871fe";
}

const departure_at = document.querySelector(".input-group2 input");
const return_at = document.querySelector(".input-group3 input");*/

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer MENVdnbPEdeEd47sOReaNogertw5");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
var abc = "MAA";
var abcd = "DEL";
fetch("https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode="+abc+"&destinationLocationCode="+abcd+"&departureDate=2022-01-29&adults=2&max=3", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));