// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     Client.checkForName(formText)

//     console.log('::: Form Submitted :::')
//     fetch('http://localhost:8080/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

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
    
    const postData = async (url = "", data = {}) => {
        console.log('Analyzing:', data);
        const response = await axios(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        try {
            const newData = await response.json();
            console.log('Data received:', newData)
            return newData;
        } catch (error) {
            console.log('error', error);
        }
    };

    
 

export { handleSubmit }
    