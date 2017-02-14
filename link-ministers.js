// I use this helper function to create <a> tags inside a given node
function addLink(node, text, url) {
    // clear the node of text; create a new "a" node; add the appropriate attributes;
    // append the new node as a child; return the original node.
var url = "https://en.Wikipedia.org/wiki//" + text;{
var node = document.getElementsByClassName(node);
var text = node.textContent;
node.textContent = "";
}
var link = document.createElement("a");
var newnode = document.createTextNode(url);
link.appendChild(newnode);
var element = document.getElementsByClassName(node);
element.appendChild(link);
return node;
}
// another helper function, if you want to replace spaces w/ "_"
//function wikify(text) {

    // replace spaces w/ "_"; concatenate w/ Wikipedia prefix; return concatenated string
    //return;}
// take a class name as parameter, and linkify all such classes.
function linkifyClass (c) {
var c1 = document.getElementsByClassName(c);
for (var a = 0; a < c1.length; a++){
  console.log (addLink (c1[a]));}
}
  // get all elements of class c; loop through elements;
    // add link to each element

    // no need for a return value.



// now call the function so that the work actually gets done.  
linkifyClass("PM");

// You can probably link all of the fields if you want:
var classesToWikify = ["PM", "Party", "From", "To"];

// what would you need to do next? Solution is left for the reader. 
