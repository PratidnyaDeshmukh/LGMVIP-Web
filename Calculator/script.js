function result() 
{
    var p = document.getElementById("num").value;
    var q = eval(p);
    document.getElementById("num").value = q;
}

function show(value) 
{
    document.getElementById("num").value += value;
}

function clr() 
{
    document.getElementById("num").value = "";
} 
