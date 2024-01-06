/* typing animation*/
var typed = new Typed(".typing", {
    strings: ["", "IT Engineer", "Web Developer", "UI/UX Designer", "Problem Solver", "Software Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyTNInPaYzitqOvzvfms8hKXD7_sCNCUCdSenzjl-IIyevTyrL5HwoeifLdVa9ftMg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

