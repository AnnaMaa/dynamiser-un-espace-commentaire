/************************Get Data*****************************/  
let firstNameInput = document.getElementById("first-name");
let lastNameInput = document.getElementById("last-name");
let messageTextarea = document.getElementById("message");
let divComment = document.getElementById("comment-list");
let identity = document.getElementById("identity");
let comment = document.getElementById("comment");
let errorMessage = document.querySelector("#error-message");
let form = document.querySelector("form");


/************Delete Data*************/
function deleteForm() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    messageTextarea.value = "";
}

/********************** Add Data********************************/
function validateForm() {  
    let divElement = document.createElement("div");
    let divElement2 = document.createElement("div");
    let h3 = document.createElement("h3");
    let fullUserIdentity = firstNameInput.value + ' ' +  lastNameInput.value;
    let divElement3 = document.createElement("div");
    let textComment = document.createElement("p");

    divElement.setAttribute("class", "flex space-x-4 text-sm text-gray-500");
    divComment.appendChild(divElement);

    divElement2.setAttribute("class", "flex-1 py-10 ");
    h3.setAttribute("class", "font-medium text-gray-900");
    divElement3.setAttribute("class", "prose prose-sm mt-4 max-w-none text-gray-500");

    divElement.appendChild(divElement2);
    divElement2.appendChild(h3);

    h3.textContent = fullUserIdentity;
    divElement2.appendChild(divElement3);

    textComment.textContent = messageTextarea.value;
    divElement3.appendChild(textComment);

    divComment.style.display="block";
    deleteForm();
};

/**********************Submit Data*****************************/
form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    if (firstNameInput.value == "" || lastNameInput.value == "" || messageTextarea.value == "") {
        errorMessage.style.display="block"; 
    }
    else if (!firstNameInput.value.match(/^[a-zA-Z]/) || !lastNameInput.value.match(/^[a-zA-Z]/)) {
            alert("Le nom et prénom ne peuvent contenir que des lettres !");
            deleteForm();
    } else {
     validateForm();
     errorMessage.style.display="none";   
   }   
});
  