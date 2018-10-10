var a;
function check()
{
    var r=/\b\d{3}\.\d+\.\d+\.\d+:\d{4}\b/
    a=document.getElementById("e1").value;
    r.test(a);
    if(r.test(a))
    {
        alert("corect no");
    }
    else
    {
        alert("wrong no.");
    }
}