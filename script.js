function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = principal * years / 100
    function myFunction() {
  var x = document.getElementById("Range");
  var defaultVal = x.defaultValue;
  var currentVal = x.value;
  
  if (defaultVal == currentVal) {
    document.getElementById("demo").innerHTML = "Default value and current value is the same: "
    + x.defaultValue + " and " + x.value
    + "<br>Slide up or down with the slider control to see the difference!";
  } else {
    document.getElementById("demo").innerHTML = "The default value was: " + defaultVal
    + "<br>The new, current value is: " + currentVal;
  }
    document.getElementById("result").innerHTML = "If you deposit" principal, "at an interest rate of" rate ".You will receive an amount of" interest",in the year "years
    alert(principal)
}

        