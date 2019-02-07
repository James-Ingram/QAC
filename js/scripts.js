

function calc(num1,num2,operator)
{
	
	num1 = parseInt(document.getElementById("num1").value);
 	operator = document.getElementById("operator").value;
 	num2 = parseInt(document.getElementById("num2").value);
	var out= document.getElementById("output");



	switch(operator)
	{
		case "+":
		{
				 output=num1+num2;
				 break;
				}
		case "-":
		{
				output=num1-num2;
				break;
			}
		case "/":
		{
				output=(num1/num2);
				break;
			}
		case "*":
		{
				output=(num1*num2);
				break;
			}
		default:
		{
			window.alert("Entered Operator Was Not Valid");
			return;
		}
	}
	out.innerHTML = output;
}
	