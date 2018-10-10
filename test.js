var a;
var b;
function check(s)
{
    a=parseInt(document.getElementById("form1").elements[s].value);
    b=parseInt(document.getElementById("form1").elements[4].value);
    if(b+a<100)
    {
        b=b+a;
        document.getElementById("form1").elements[4].value=b;
    }
    else
    {
        document.getElementById("form1").elements[s].value=0;
    }
}