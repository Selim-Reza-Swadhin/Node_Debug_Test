//press resume program or f9 button
const axios = require('axios');
//var URL = "https://restcountries.eu/rest/v2/all";
var URL = "https://restcountries.eu/rest/v2/alll";//wrong url

axios.get(URL).then(function (response){



let CountryList = response.data;
let StatusCode = response.status;


    console.log(CountryList);
    console.log(StatusCode);

}).catch(function (error){
    console.log(error);
});