// Create a "cancle" button and append it to each list item
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) 
{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) 
{
  close[i].onclick = function() 
  {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Adding Incoming Task into the list by clicking on button.
function AddTask() 
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("userinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') 
    {
      alert("Enter your first task !");
    } else 
    {
      document.getElementById("userlist").appendChild(li);
    }
    document.getElementById("userinput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) 
    {
      close[i].onclick = function() 
      {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}