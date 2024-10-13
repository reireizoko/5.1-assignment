function test() {
// string is entered into the "palin" text box
// the results go through the code and returns to the user as output
    var word, copy, i;
    word = document.getElementById("palin").value.toLowerCase();
    //turn to lowercase
    copy = "";
    i = 0;

    while (i < word.length) {
        copy = word.charAt(i) + copy;
        i=i+1;
    }

    if (word === copy) {
        document.getElementById("outputDiv").innerHTML =
            document.getElementById("palin").value + ", This is a palindrome!";
            // outputs to the user if the entered word is a palindrome
    } else {
        document.getElementById('outputDiv').innerHTML =
            document.getElementById('palin').value + ", This is not a palindrome!";
            // outputs to the user is the entered word is not a palindrome
    }
}