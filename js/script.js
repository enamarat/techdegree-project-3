// Setting focus for the first textfield
document.getElementById("name").focus();

/************Job Role************************************************/
// Hiding "Other" job input field
const inputOther = document.getElementById("other-job");
inputOther.style.display = "none";

// Revealing a separate input field if "Other" option is selected in "Job Role" select list
document.getElementById("title").addEventListener('change', ()=>{
  if (document.getElementById("title").value == "other") {
    inputOther.style.display = "block";
    // Hiding "Other" job input field if "Other" option was selected previously and now different option is selected
  } else if (document.getElementById("title").value != "other") {
    inputOther.style.display = "none";
  }
});

/*************T-Shirt Info**********************************************/
// Creating initial option when a T-Shirt design is not yet selected
const initialOption = document.createElement("option");
initialOption.setAttribute("id", "initial");
initialOption.textContent ="Please select a T-shirt theme";
document.getElementById("color").appendChild(initialOption);
initialOption.selected = true;

// Hiding all options until a T-Shirt design is selected
const colorOptions = document.getElementById("color").children;
for (i = 0; i < colorOptions.length; i += 1) {
  colorOptions[i].style.display = "none";
}

// “Color” select menu and label are hidden until a T-Shirt design is selected
document.getElementById("colors-js-puns").style.display = "none";


/* Adding event listener which reacts to mouse click on "design"
drop down menu. As soon as menu is clicked on, a function runs which
sets options in "color" menu according to a selected design option*/
document.getElementById("design").addEventListener('change', ()=>{
  const colorOptions = document.getElementById("color").children;
  const colorSelector = (firstChild, secondChild, thirdChild) => {
    document.getElementById("color").children[0].style.display="block";
    for (i = 0; i < colorOptions.length; i += 1) {
      colorOptions[i].style.display = "none";
    }
    colorOptions[firstChild].style.display = "block";
    colorOptions[secondChild].style.display = "block";
    colorOptions[thirdChild].style.display = "block";
  }

/* Depending on what design option is chosen, a particular set of
 color options appears in drop down menu. If no design is chosen the
 "Color" field is hidden*/
  if (document.getElementById("design").value == "js puns") {
    colorSelector(0,1,2);
    colorOptions[0].selected = true;
    document.getElementById("colors-js-puns").style.display = "block";
  } else if (document.getElementById("design").value == "heart js") {
    colorSelector(3,4,5);
    colorOptions[3].selected = true;
    document.getElementById("colors-js-puns").style.display = "block";
  } else if (document.getElementById("design").value == "Select Theme") {
    for (i = 0; i < colorOptions.length; i += 1) {
      colorOptions[i].style.display = "none";
    }
    initialOption.selected = true;
    document.getElementById("colors-js-puns").style.display = "none";
  }
});

/*************Register for Activities*************************************/
// Creating a word "Total" under checkboxes
const spanTotal = document.createElement("span");
spanTotal.style.fontWeight = "bold";
document.querySelector(".activities").appendChild(spanTotal);
spanTotal.style.display = "none";
let sumTotal = 0;

document.querySelector(".activities").addEventListener('change', (event)=> {
  /* Creating condition: if "JS Frameworks Workshop" activity is checked
  then "Express Workshop" activity is disabled and vice versa*/
  const frameworks = document.querySelector('[name=js-frameworks]');
  const express = document.querySelector('[name =express]');

  switch(frameworks.checked) {
    case true:
    express.disabled = true;
    express.parentNode.style.color = "#66656d";
    break;
    case false:
    express.disabled = false;
    express.parentNode.style.color = "#000";
    break;
  }

  switch(express.checked) {
    case true:
    frameworks.disabled = true;
    frameworks.parentNode.style.color = "#66656d";
    break;
    case false:
    frameworks.disabled = false;
    frameworks.parentNode.style.color = "#000";
    break;
  }

  /* Creating condition: if "JS Libraries Workshop" activity is
  checked then "Node.js Workshop" activity is disabled and vice versa*/
  const libs = document.querySelector('[name = js-libs]');
  const node = document.querySelector('[name = node]');

  switch(libs.checked) {
    case true:
    node.disabled = true;
    node.parentNode.style.color = "#66656d";
    break;
    case false:
    node.disabled = false;
    node.parentNode.style.color = "#000";
    break;
  }

  switch(node.checked) {
    case true:
    libs.disabled = true;
    libs.parentNode.style.color = "#66656d";
    break;
    case false:
    libs.disabled = false;
    libs.parentNode.style.color = "#000";
    break;
  }

  // Calculating total expenses based on checked activities
  const calculateTotal = (sum) => {
    sumTotal += sum;
  }

  /* Dividing checkboxes into two parts: the one which adds 200 $
  to total cost and the rest which add 100 $*/
  const mainConf = document.querySelector('[name = all]');
  /* If clicked checkbox is "Main Conference" 200 $ will be added
   to total cost or substructed from total cost depending on
   whether the checkbox was checked or unchecked*/
  if (event.target === mainConf) {
    switch(mainConf.checked) {
      case true:
      calculateTotal(200);
      break;
      case false:
      calculateTotal(-200);
      break;
    }
  }

  /* If clicked checkbox is not a "Main Conference" 100 $ will be
   added to total cost or substructed from total cost depending on
   whether the checkbox was checked or unchecked*/
  if (event.target !== mainConf) {
      switch(event.target.checked) {
        case true:
        calculateTotal(100);
        break;
        case false:
        calculateTotal(-100);
        break;
      }
  }

  /* If any checkbox is checked it means that total cost is greater
   than zero and, therefore, the total sum should be displayed under
   checkboxes. If no checkboxes are checked the total sum is not displayed */
  if (sumTotal > 0) {
    spanTotal.style.display = "inline-block";
  } else if (sumTotal === 0) {
    spanTotal.style.display = "none";
  }

  spanTotal.textContent = `Total: ${sumTotal} $`;
});

/*************Payment Info*************************************/
/** Initial state **/
// Hiding information
document.querySelectorAll('p')[0].style.display = "none";
document.querySelectorAll('p')[1].style.display = "none";
// Setting selected option by default
document.querySelector('[value = credit_card]').selected = true;
document.querySelector('[value = select_method]').disabled = true;

/* Making conditions: if certain option is chosen the corresponding
infromation will be dispalyed and other options will be hidden*/
document.getElementById("payment").addEventListener('change', ()=> {
  switch (document.querySelector("#payment").value) {
    case "credit_card":
    document.querySelectorAll('p')[0].style.display = "none";
    document.querySelectorAll('p')[1].style.display = "none";
    document.querySelector('#credit-card').style.display = "block";
    break;
    case "paypal":
    document.querySelectorAll('p')[0].style.display = "block";
    document.querySelectorAll('p')[1].style.display = "none";
    document.querySelector('#credit-card').style.display = "none";
    break;
    case "bitcoin":
    document.querySelectorAll('p')[0].style.display = "none";
    document.querySelectorAll('p')[1].style.display = "block";
    document.querySelector('#credit-card').style.display = "none";
    break;
  }
});

/*****************************VALIDATION**********************************/
/***What happens when "Submit" button is clicked***/
document.querySelector("button").addEventListener('click', (e)=> {
  /******************Empty fields***********************************/
  // Function which checks whether text field is empty or not
  const checkIfEmpty = (id, labelNumber, needsMessage, message, initialLabel) => {
    if (document.querySelector(id).value == "") {
      e.preventDefault();
      document.querySelectorAll('label')[labelNumber].setAttribute("class", "warning");
      document.querySelector(id).setAttribute("class", "warning-field");
      if (needsMessage === 'yes') {
        document.querySelectorAll('label')[labelNumber].textContent = message;
      }
    } else if (document.querySelector(id).value !== "") {
      document.querySelectorAll('label')[labelNumber].classList.remove("warning");
      document.querySelector(id).classList.remove("warning-field");
      document.querySelectorAll('label')[labelNumber].textContent = initialLabel;
    }
  }

  // Name field can't be blank
  checkIfEmpty("#name", 0, "yes", "Please provide your name", "Name:");
  // Email field can't be blank
  checkIfEmpty("#mail", 1, "yes", "Please provide your email", "Email:");
  /* Following fields are checked for errors only if "Credit card"
  option is chosen in "Payment Info" drop down menu */
  if (document.querySelector('#payment').value === "credit_card") {
    // Credit card field can't be blank
    checkIfEmpty("#cc-num", 14, "yes", "Enter a credit card number", "Card Number:");
    // Zip Code field can't be blank
    checkIfEmpty("#zip", 15, "yes", "Enter a zip code", "Zip Code:");
    // CVV field can't be blank
    checkIfEmpty("#cvv", 16, "yes", "Enter CVV", "CVV:");
  }

  /*********Email field must be a validly formatted e-mail address**********/
  const email = document.getElementById('mail');
  /*A function which checks format of email*/
  const validateEmail = (emailAddress) => {
    const mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return mailFormat.test(emailAddress.value);
  }
 /* If typed email is in wrong format form is prevented from
  submission and error message appears*/
  validateEmail(email);
  if (!validateEmail(email) && email.value.length > 0) {
    e.preventDefault();
    document.querySelectorAll('label')[1].textContent = "Invalid format of email";
    document.querySelectorAll('label')[1].setAttribute("class", "warning");
    email.setAttribute("class", "warning-field");
  }

    /*********** User must select at least one checkbox under the
    "Register for Activities" section of the form **************/
    const checkboxes = document.querySelectorAll('[type = checkbox]');
    const chosenActivities = [];
    // If checkbox is checked it's added to "chosenActivities" array
    for (i = 0; i < checkboxes.length; i += 1) {
      if (checkboxes[i].checked === true) {
        chosenActivities.push(checkboxes[i]);
      }
    }
    /* If no checkboxes are checked the length "chosenActivities" array
    is equal to zero */
    if (chosenActivities.length === 0) {
      e.preventDefault();
      document.querySelectorAll('legend')[2].textContent = "Please choose at least one activity";
      document.querySelectorAll('legend')[2].setAttribute("class", "warning");
    } else if (chosenActivities.length !== 0) {
      document.querySelectorAll('legend')[2].textContent = "Register for Activities";
      document.querySelectorAll('legend')[2].classList.remove("warning");
    }

  /*****************Credit card validation**************************/
  /*Functions which check values of input fields for "Credit card"
  payment information"*/
    const creditCardNumber = document.querySelector('#cc-num');
    const zip = document.querySelector('#zip');
    const cvv = document.querySelector('#cvv');

    /* A function which checks for minimum and maximum number of
     symbols in credit card fields*/
    const acceptedRange = (field, minValue, maxValue, labelNumber,
       needsMessage, message) => {
        if (field.value.length >= 1 && field.value.length < minValue || field.value.length > maxValue) {
          e.preventDefault();
          document.querySelectorAll('label')[labelNumber].setAttribute("class", "warning");
          field.setAttribute("class", "warning-field");
          if (needsMessage === "yes") {
            document.querySelectorAll('label')[labelNumber].textContent = message;
          }
        }
      }

      /* A function which checks whether only digits are typed
      into an input field*/
      const checkOnlyDigits = (field, labelNumber) => {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const matchedSymbols = [];
        for(i = 0; i < digits.length; i += 1) {
          for (j = 0; j < field.value.length; j += 1) {
            if (field.value[j] == digits[i]) {
                matchedSymbols.push(field.value[j]);
            }
          }
        }

        for (j = 0; j < field.value.length; j += 1) {
          if (matchedSymbols.indexOf(field.value[j]) == -1) {
            e.preventDefault();
            document.querySelectorAll('label')[labelNumber].textContent = "Enter only digits";
            document.querySelectorAll('label')[labelNumber].setAttribute("class", "warning");
            field.setAttribute("class", "warning-field");
          }
        }
      }

    // If "Credit card" option is chosen in "Payment Info" section
    if (document.querySelector('#payment').value === "credit_card") {
      /*Credit Card field should only accept a number between 13 and 16 digits*/
      acceptedRange(creditCardNumber, 13, 16, 14, "yes", "Enter from 13 to 16 symbols");
      // The Zip Code field should accept a 5-digit number.
      acceptedRange(zip, 5, 5, 15, "yes", "Enter 5 symbols");
      //The CVV should only accept a number that is exactly 3 digits long
      acceptedRange(cvv, 3, 3, 16, "yes", "Enter 3 symbols");

      // Making sure that only digits are typed in input fields
      checkOnlyDigits(creditCardNumber, 14);
      checkOnlyDigits(zip, 15);
      checkOnlyDigits(cvv, 16);
    }
});

/****************************REAL TIME ERROR MESSAGES***********************/
  /***Email field must be a validly formatted e-mail address***/
const email = document.getElementById('mail');

/*A function which checks format of email**/
const validateEmail = (emailAddress) => {
  const mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  return mailFormat.test(emailAddress.value);
}
email.addEventListener('keyup', (e)=> {
  validateEmail(email);
  /* If typed email is in wrong format form is prevented from
   submission and error message appears*/
  if (!validateEmail(email) && email.value.length > 0) {
    e.preventDefault();
    document.querySelectorAll('label')[1].textContent = "Invalid format of email";
    document.querySelectorAll('label')[1].setAttribute("class", "warning");
    email.setAttribute("class", "warning-field");
  } else {
    document.querySelectorAll('label')[1].classList.remove("warning");
    email.classList.remove("warning-field");
    document.querySelectorAll('label')[1].textContent = "Email:";
  }
});
