
function konyvekKi(){
    console.log("Könyvek ki fut");
    var statikus_link = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"
    


    document.getElementById("konyv_tabla").innerHTML = "";
    
    for (let i = 0; i < konyvek.length; i++) {
        document.getElementById("konyv_tabla").innerHTML +=`<div id="grid-item"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img class="card-img" src="${statikus_link+konyvek[i].imageLink}" alt="Avatar" style="width:100%;height:70%;"><h2>${konyvek[i].title}</h2><span>${konyvek[i].author}</span><p id="datum">Megjelenés: ${konyvek[i].year}.</p></div><div class="flip-card-back"><h1>${konyvek[i].author}</h1><p>${konyvek[i].country}</p><p>${konyvek[i].title}</p></div></div></div></div>`
    }
}

//document.onload = konyvekKi();



function proba(){
    document.getElementById('fityma').innerHTML = "Fasz"


}


function megjelenit(eleje, vege){
    document.getElementById("konyv_tabla").innerHTML = ""
    for (let i = eleje; i < vege; i++) {
        
        if(konyvek[i].author.toLowerCase() == "unknown")
        {
            document.getElementById("konyv_tabla").innerHTML +=`<div id="grid-item"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img class="card-img" src="https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${konyvek[i].imageLink}" alt="Avatar" style="width:100%;height:70%;"><h2>${konyvek[i].title}</h2><span>A könyv szerzője ismeretlen</span><p id="datum">Megjelenés: ${konyvek[i].year}.</p></div><div class="flip-card-back"><h1>Nem ismert</h1><p>${konyvek[i].country}</p><p>${konyvek[i].title}</p></div></div></div></div>`

        }
        else{
          document.getElementById("konyv_tabla").innerHTML +=`<div id="grid-item"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img class="card-img" src="https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${konyvek[i].imageLink}" alt="Avatar" style="width:100%;height:70%;"><h2>${konyvek[i].title}</h2><span>${konyvek[i].author}</span><p id="datum">Megjelenés: ${konyvek[i].year}.</p></div><div class="flip-card-back"><h1>${konyvek[i].author}</h1><p>${konyvek[i].country}</p><p>${konyvek[i].title}</p></div></div></div></div>`  
        }
        
    }
}
const oldalszám = konyvek.length;
    
    for (let i = 0; i < oldalszám; i+=5) {

        
        document.getElementById('oldalszam_menu_belso').innerHTML += `<li id="azon${i/5}" class="page-item"><a class="page-link"  onclick='megjelenit(${i},${i+5})'>${(i/5)+1}</a></li>`
        
    }
    
     document.getElementById("azon0").className += " active ";

