function copyToClipboard(elementId) {

    // Create a "hidden" input
    var aux = document.createElement("input");
  
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  
    // Append it to the body
    document.body.appendChild(aux);
  
    // Highlight its content
    aux.select();
  
    // Copy the highlighted text
    document.execCommand("copy");
  
    // Remove it from the body
    document.body.removeChild(aux);

    NotificationAbouCopy();

}

var confimationVariable = 0;

function NotificationAbouCopy () {
    
    if (confimationVariable == 0) {
        document.getElementById("EmailCopyConfirmation").style.display = "block";
        confimationVariable = 1;
    } else {
        document.getElementById("EmailCopyConfirmation").style.display = "none";
        confimationVariable = 0;
    }

    
}
