let img = document.getElementById("img")
let submit = document.getElementById("submit")

submit.addEventListener("click",function(){
    let inputs = document.getElementById("input").value
    if(!inputs){
        window.confirm("Enter the text to generate QR code")
    }else{
        //  let url = `https://quickchart.io/qr?text=${inputs}`
        let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputs}`
         img.style.display = "initial"
         img.src = url
         console.log(url)
    }
})