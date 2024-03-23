var textbox = document.getElementById("textbox")
var tofahrenheit = document.getElementById("tofahrenheit")
var tocelcius = document.getElementById("tocelcius")
var result = document.getElementById("result")
var temp

function convert()
{
    if(tofahrenheit.checked)
    {
        temp = Number(textbox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + `°F`
    }
    else if(tocelcius.checked)
    {
        temp = Number(textbox.value)
        temp = (temp - 32) * (5 / 9)
        result.textContent = temp.toFixed(1) + `°C`
    }
    else
    {
        result.textContent = "select a unit"
    }
}
