// XMLHttpRequest
// initialisation
var xhr= new XMLHttpRequest();
// reception  : open(method, url, asych)
xhr.open('GET','catalogue08042022.json',true)


var btn=document.getElementById('btn')
btn.addEventListener('click', function(){
    xhr.onload=function(){
        var donnes=JSON.parse(xhr.responseText)[1];
        console.log(donnes);
    }
    xhr.send()
})

/*function afficher (data){
    for (let index=0; index<data.length ; index++){
        
    }

}*/