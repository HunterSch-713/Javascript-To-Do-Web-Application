
// Creates the 'X' on Each List Item Added by the User to the List on the Main HTML Page
var NodeListing = document.getElementsByTagName("LI");
var i;
for(i = 0; i < NodeListing.length; i++)
{
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(text);
    NodeListing[i].appendChild(span);

}

// Highlights the Close Button that We Appended in the Last Step and then OnClick() it Removes the List Item
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++)
{
    close[i].onClick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

// When Clicking on the List Item Add a Strikethrough Look and a Checked Mark to the Item
var List = document.querySelector('ul');
List.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
}, false);

// Creating a New Item when the "Add" Button is Clicked by the User
function NewElement()
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("Input").value;
    var TextAdd = document.createTextNode(inputValue);

    li.appendChild(TextAdd);

    if(inputValue === '' || inputValue == null)
    {
        alert("Something must be written to add it to the list!");
    } else {
        document.getElementById("UL").appendChild(li);
    }

    document.getElementById("Input").value = "";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(i = 0; i < close.length; i++)
    {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
