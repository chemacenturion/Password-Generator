# 03 JavaScript: Password Generator


```
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

* To satisfy this criteria I created the arrays "lowerCase", "upperCase", "number", and "specialChar";

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

* generateBtn was already provided for us.

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

* Created two variables minLength and maxLength to refer to as parameters which to work within for later if statements
  * Used if statement on line 32 to create required length and to signal alert if user selection is inadequate.

WHEN prompted for password criteria
THEN I select which criteria to include in the password

*Created a #prompt for length and a series of #confirms for user selection pertaining to the password criteria desired.

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

* Created if and else if statements

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

*had to fix lines 36,37 and 49,50 with a return to end function and get correct alert message
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

##

* ✅Satisfies all of the preceding acceptance criteria plus the following:

* ✅The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

* ✅Application deployed at live URL.

* ✅Application loads with no errors.

* ✅Application GitHub URL submitted.

* ✅GitHub repository that contains application code.

* ✅Application user experience is intuitive and easy to navigate.

* ✅Application user interface style is clean and polished.

* ✅Application resembles the mock-up functionality provided in the homework instructions.

* ✅Repository has a unique name.

* ✅Repository follows best practices for file structure and naming conventions.

* ✅Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* ✅Repository contains multiple descriptive commit messages.

* ✅Repository contains quality readme file with description, screenshot, and link to deployed application.

    ** https://chemacenturion.github.io/Password-Generator/

- ✅You are required to submit the following for review:

* ✅The URL of the deployed application.

* ✅The URL of the GitHub repository, with a unique name and a readme describing the project.

