function carregar(){

let msg = window.document.getElementById("msg")
let img = window.document.getElementById("img")    

var date = new Date()
var horas = date.getHours()
var segundos = date.getSeconds()
var minutos = date.getMinutes()

msg.innerHTML = (`Agora São ${horas} : ${minutos} : ${segundos}`)

if (horas >= 6 && horas <= 12){
        //Bom Dia
    img.src = "Foto de Dia.png"
    document.body.style.background = "#41E08B" 
} else if (horas >= 13 && horas <= 18 ) {
       //Boa Tarde
    img.src = "Foto de Tarde.png" 
    document.body.style.background = "#FFBE0D"
} else if (horas >= 19 && horas <= 23){
    //Boa Noite 
    img.src = "Foto de Noite.png"
    document.body,style.background = "#5457F7"  


}
}



