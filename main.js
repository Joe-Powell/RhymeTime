//selecting page elements
const input = document.querySelector('.input'); 
const submit = document.querySelector('.sub-btn');
const responseField = document.querySelector('#responseField');

// Info to reach API
const url = 'https://api.datamuse.com/words?';
const rhyme = 'rel_rhy=';




// Ajax function

    function getRhymes(e){
       
       let inputVal = input.value;
       e.preventDefault();
      
       let endpoint = `${url}${rhyme}${inputVal}`;
      
       let xhr = new XMLHttpRequest();
      
        
       xhr.onload = function(){
        if(xhr.status == 200) {
            const user = JSON.parse(xhr.responseText);
      
        let newcontent ='';
      for(let i =0; i < 40; i++){
         newcontent +=
         '<h3>' +user[i].word + '</h3>';


      }
        
                
            responseField.innerHTML=newcontent;   
                console.log(user);
                



              
            }
        }


       xhr.open('GET', endpoint);
        xhr.send();
    }

    submit.addEventListener('click', getRhymes);
