function checkForURL(inputURL) {
    console.log("::: Running checkForName :::", inputURL);

    // Setting the url regex
    const expression = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    const invalid = document.getElementById('invalid');

//if the input matches the url regex, then don't display the invalid text, otherwise, display it
    if (inputURL.match(regex)) {
        console.log("Valid URL")
        invalid.style.display = "none";
    } else {
        console.log("Invalid URL! Doesn't match.")
        invalid.style.display = "inline";
    }
}

export { checkForURL }