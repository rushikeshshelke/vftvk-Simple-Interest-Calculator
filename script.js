function compute()
{
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate /100;
	var year = new Date().getFullYear()+parseInt(years);
	if (principal <=0)
	{
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return false;
	}
	else
	{
		document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>"+principal+"<span class='op'>"+",\<br\>at an interest rate of "+"<span class='highlight'>"+rate+"%"+"<span class='op'>"+"."+"\<br\>You will receive an amount of "+"<span class='highlight'>"+interest+"<span class='op'>"+",\<br\>in the year "+"<span class='highlight'>"+year+"<span class='op'>"+"\<br\>";
	}
	return true;
}
function updateRate() 
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval;
}