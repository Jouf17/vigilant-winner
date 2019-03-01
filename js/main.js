'use strict';

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

let cp;
let select;
let httpRequest = false;
let url; 
let option;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function makeRequest(){
    httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            if (httpRequest.status == 200) {
                let response = JSON.parse(httpRequest.responseText);
                while (select.firstChild) {
                    select.removeChild(select.firstChild);
                }
            
                for (let i = 0; i < response.length; i++)
                {
                    option = document.createElement('option');
                    option.innerHTML = response[i]['ville_nom'];
                    option.value = response[i]['ville_id'];
                    select.appendChild(option);
                }
            } 
            else 
            {
                alert('Un problème est survenu avec la requête.');
            }
        }
    };
    
    if (cp.value.length >= 2)
    {
        httpRequest.open('GET', url + cp.value, true);
        httpRequest.send();
    }
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

document.addEventListener('DOMContentLoaded', function(){
    
    cp = document.getElementById('cp');
    select = document.getElementById('ville');
    url = 'http://benjaming.sites.pixelsass.fr/dev/ajax/Villes/villes.php?cp=';
    
    addEventListener('keyup', makeRequest);
    
    
    
        
    
    
});