var moins= document.querySelectorAll('.btnmoins')
var fois = document.querySelectorAll('.qte')
var plus = document.querySelectorAll('.btnplus')
var del = document.querySelectorAll('.delette')
var hear = document.querySelectorAll('.fa-heart')



for(let i =0;i<plus.length;i++){
    plus[i].addEventListener('click',function(){
        plus[i].previousElementSibling.innerHTML++
        SommeTotale()

    })
}

for(let i = 0; i<moins.length;i++){
    moins[i].addEventListener('click',function(){
        if(moins[i].nextElementSibling.innerHTML>0){
            moins[i].nextElementSibling.innerHTML--
            SommeTotale()
        }        
    })
}

for(let i = 0; i<del.length;i++){
    del[i].addEventListener('click',function(){
        del[i].parentElement.parentElement.remove()
        SommeTotale()
        // console.log(del)
    })
}


for (let i = 0; i < hear.length; i++) {
    hear[i].addEventListener('click',function(){
        hear[i].classList.toggle('coeur')
    })    
}

function SommeTotale(){
    var pri = document.querySelectorAll('.price')
    var qt = document.querySelectorAll('.qte')
    var somme = document.querySelector('#somme')
    var sum = 0

    for(let i = 0 ; i<pri.length ; i++){
        sum = sum + pri[i].innerHTML*qt[i].innerHTML
    }

}