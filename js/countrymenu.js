

var remoteFile = './confirmed.csv'
var remoteFile1 = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'
var remoteFile2 = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv' 
var data1,data2,data3;

  
  var select = document.getElementById("selectCountry");
      
  var countries = new Array("Afghanistan", "Albania", "Algeria", "Andorra",
    "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", 
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", 
    "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", 
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", 
    "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", 
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", 
    "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", 
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
    "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
    "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", 
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", 
    "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", 
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco",
    "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", 
    "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", 
    "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", 
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", 
    "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", 
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe");
      
  //console.log(countries);
  //console.log(select);


      
  for (var i = 0; i < countries.length; i++) {
      
      var option = document.createElement("option"); 
    //for every turn of the loop create an option tag
      //console.log(option);
      var txt = document.createTextNode(countries[i]); 
    //for every turn of the loop create the inner text
      //console.log(txt);
      option.appendChild(txt); 
    //for every turn of the loop put the words from txt inside the <option> tags
      //console.log(option);
      option.setAttribute("value",countries[i]); //for every turn of the loop set the value attribute to corresponding country name
      //console.log(option);
      select.insertBefore(option,select.lastChild);
      //console.log(select);
      
  }
  
  document.addEventListener ('DOMContentLoaded', function() {
      //console.log('DOM fully loaded and parsed');
      document.querySelector('select[name="selectCountry"]').onchange = alertCountry;
       }, false);
      
  function alertCountry(event) {
      //console.log('DOM loaded');
      //use "this" to refer to selected element
      if(!event.target.value) alert('Please select a country');
      else {
        alert('You chose ' + event.target.value );
        let card1 = document.getElementById("card1");
        let card2 = document.getElementById("card2");
        let card3 = document.getElementById("card3");     
        card1.innerText = "1009009"
        card2.innerText = "34541"
        card3.innerText = "10042"

        /* affectCards(country= event.target.value,data1,100000);
        affectCards(country= event.target.value,data2,20000);
        affectCards(country= event.target.value,data3,3000); */
      }
  }

function affectCards(country="Uganda",data,x){ 
 
  let card = document.getElementById(`card${x}`);  
  let html = ''   
  card.innerText = `${x}`  
        for (let i = 1; i < data.length; i++) {                  
            
            if(data[i][1]==country){
                for (let j = 0; j < data[i].length; j++) {            
                    if (j==3){
                      sum += data[i][j];
                    }else continue;
                    }
                                     
     
            }
                         
                }
                html += `${sum}`
           card.innerText = "100"
            }  
            
        
        
        // card.innerHTML = html;
        // card += '</div>'
        // let card = document.createElement("div");
    
        // display.appendChild(card);
      
  