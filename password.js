var a;
var b;
var c;
function acheck()
{
    a=document.getElementById("form1")[0].value;
    return a;
}
function check()
{
    c=acheck();
    b=document.getElementById("form1")[1].value;
    if(a==b)
    {
        alert("Password match");

    }
    
else
{
    alert("didnt match");
}

}