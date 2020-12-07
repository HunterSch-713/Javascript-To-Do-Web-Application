# **Javascript To-Do List Tutorial**

## Introduction

***

* Throughout the time spent in MI 349, we were exposed to the many nuances that are the essential building blocks to Web Design & Development in the modern space. To further my learning I decided to Delve a little deeper into Javascript (JS) and see what other interesting functionalities can be worked into static HTML pages.

* This tutorial will focus on how we can use JavaScript to make a simple To-Do List web application to keep track of tasks while you are working on them! The Finished Product is not much to look at in terms of polish but the functionality is what makes the application so lets get to it!

***

## The HTML

* This Project is VERY light on the HTML and CSS Side of things with the focus being on JS so to breakdown the HTML it consists of the following...

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="index.css">
  </head>
  <body>
    <div class="header">
      <h2>To Do List</h2>
      <input type="text" id="Input" placeholder="To-Do Item...">
      <span onclick="NewElement()" class="addBtn">Add</span>
    </div>
    <ul id="UL">
    </ul>
    <script type="text/javascript" src="main.js"></script>
  </body>
</html>
```

* Pretty much just a simple HTML Page with a couple of elements

  * A Text Input

  * A Button to Add Input to a List

  * A Reference to the CSS & JS File

* Probably one of the easiest pages to create in HTML without much thinking having to be done to put it into action.


***

## The CSS

* The CSS Behind this HTML is Much the same in its simplicity as the focus here was not on the Webpage but on the application's functionality as a whole. I did however add some styling to the elements that were on the page in the interest of not torturing the reader with an ugly plain HTML page. That CSS looks like such...

<br>

```
body {
    margin: 10px auto;
    min-width: 250px;
    max-width: 50%;
    background-color: silver;
  }
  * {
    box-sizing: border-box;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    list-style-type: none;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
  
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* all odd list items are made into differing colors */
  ul li:nth-child(odd) {
  background: #f9f9f9;
  }

  ul li:hover {
    background: #ddd;
  }

  ul li.checked {
    background: teal;
    color: white;
    text-decoration: line-through;
  }

  ul li.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 2px 2px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 15px;
    width: 7px;
  }
  
  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px 12px 16px;
  }
  
  .close:hover {
    background-color: orangered;
    color: white;
  }
  .header {
    background-color: orangered;
    padding: 30px 40px;
    color: white;
    text-align: center;
  }
  .header:after {
    content: "";
    display: table;
    clear: both;
  }
  input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 75%;
    padding: 10px;
    float: left;
    font-size: 16px;
  }
  .addBtn {
    padding: 10px;
    width: 25%;
    background: orange;
    color: white;
    float: left;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 0;
  }
  .addBtn:hover {
    background-color: blueviolet;
  }
```

<br>

* Not too crazy, just some simple styling on the Button and Text-field elements along with some hover action styling and font / header spacing & margins.

* You will however notice the `.close { }` element that is referenced not being apart of the previous HTML document, we will get to that but in essence this object is being added interactively by the script based upon the users actions.

***

## The JavaScript

***

> This is where the project really comes together!

<br>

### *The Functions of the JS Application*

***

<br>

> **Element Creation**

<br>


```
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
```

* This function's purpose is to create list items from the user input and keeps them up on screen so they can work on their tasks and while they work they can depopulate or repopulate the items based upon how what their task needs are.

> * `var li` - is the instantiated `li` object created and added to the `ul` object in the HTML document from User Input.
>
> * `var inputValue` - is the input from the textbox object and is the `getter` of the text so that we can append it to the `ul` and `li` elements respectively.
>
> * `var TextAdd` is the creation of the `TextNode` which is the ( `ul` { `li` } ) Or nested `li` Object.
>
> * `li.appendChild(text)` is the actual call of the action needed to append the text to the `li` into the `ul` element.
>
> * `document.getElementById("Input").value = "";` is the call to the Input ID of the Textbox Object on the HTML Page and setting it to Empty for more list input.
>
> * `var span` is the variable that handles the creation of the SPAN element on the HTML Document page.
>
> * `var text` is the variable that handles the addition of the 'X' marker on the right-hand side of the List Object to Remove it from the List.

* The Ending `For` Loop has the purpose of Adding the *Closing* Operator to the List Item and Handling the closing of the specific Index Selected by the user and removing it from the overall list.

***

<br>

> **Passive Application Operations**

```
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
```

* Whenever a Node is added to the Sub `li` in the `ul` object in the HTML Document this *Closing* Operator Button is added to the List Object so that it can be removed by the user.

<br>

```
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
```

* If the User Clicks this *Closing* Operator this small pseudo function takes care of handling all elements with the class of 'close' and removing it from the list instantiated by the user.

<br>

```
// When Clicking on the List Item Add a Strikethrough Look and a Checked Mark to the Item
var List = document.querySelector('ul');
List.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }
}, false);
```

* This Passive Operation is to add the functionality of allowing the clicking of list objects that have the tag of `li` and changes the class toggle to 'checked' so that it applies the CSS Styling of Strikethrough with a Checkmark to denote an item that has been done or completed by the user.

***

<br>

## **Lets Put it All Together**

<br>

* Main Components of the Application:

  * *index.html* - To have a location where we can show the objects created in JS for the User's To-Do List.

  * *index.css* - To style the index page to make it a little more interesting in terms of design and feeling.

  * *main.js* - Handles everything that has to do with the backend functionality for the user of the webpage.

<br>

* Creation of on Page Objects

  * **main.js** - This is by far the most functional aspect of this entire web application, it handles everything except for display and style of the base webpage

<br>

* **Example Website**

  * You can find the Example Website of this Application Here: 