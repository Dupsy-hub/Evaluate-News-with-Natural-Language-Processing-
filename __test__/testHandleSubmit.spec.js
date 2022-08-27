// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"


// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {

    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
        async function handleSubmit(event) {
            event.preventDefault()
        
            // check what url was put into the form field
            let formText = document.getElementById('url').value
            if(Client.checkForURL(formText)) {
                console.log("::: Form Submitted :::")
        
                fetch('http://localhost:8081/test')
        
                .then(function(res) {
                    document.getElementById('polarity').innerHTML = 'Polarity: '+polarityChecker(result.score_tag);
                    document.getElementById("agreement").innerHTML = `Agreement: ${result.agreement}`;
                    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${result.subjectivity}`;
                    document.getElementById("confidence").innerHTML = `Confidence: ${result.confidence}`;
                    document.getElementById("irony").innerHTML = `Irony: ${result.irony}`;
                })
            } else {
                alert('Seems like an invalid URL, please try with a valid URL.');
            }
        }
        expect(handleSubmit).toBeDefined();
    })
});