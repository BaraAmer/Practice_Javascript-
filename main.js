

let table = document.querySelector("tbody");
let lastid_element = document.getElementsByClassName("id");


let firstinput =  document.querySelector("[name = nameofcourse]");
let secondinput =  document.querySelector("[name = nameofdoctor]");
let radios = document.querySelectorAll("[name = Radios]");
let lastid = +lastid_element[lastid_element.length - 1].textContent;

let valid = false;
let selectedr;

function subform(){

    console.log("welcome")

    for (const radioButton of radios) {
        if (radioButton.checked) {
            selectedr = radioButton.nextElementSibling.textContent;
            valid = true;
            break;
        }
    }

    if ( firstinput.value == "" || secondinput.value == "" || valid == false ){
        event.preventDefault()  
        } else {  

            lastid++;

            let newrow = document.createElement("tr");
            let col_id =  document.createElement("td");
            let col_ncourse = document.createElement("td");
            let col_ndoctor = document.createElement("td");
            let col_level = document.createElement("td");
  
            col_id.innerText = lastid;
            col_ncourse.innerText = firstinput.value;
            col_ndoctor.innerText =  secondinput.value ;
            col_level.innerText = selectedr;

            newrow.appendChild(col_id);
            newrow.appendChild(col_ncourse);
            newrow.appendChild(col_ndoctor);
            newrow.appendChild(col_level);
            table.appendChild(newrow);

         }

return false;
}






