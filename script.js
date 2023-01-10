var advice = document.getElementById("advice");
var quote = document.getElementById("quote");
var resetBtn = document.getElementById("container");


fetch('https://api.adviceslip.com/advice')
.then (response => response.json())
.then((data) => {
    fetchData = data;

    advice.innerHTML = "ADVICE # " + data.slip.id;
    quote.innerHTML = data.slip.advice;
})



resetBtn.addEventListener('click', () => {
    location.reload()
} )
