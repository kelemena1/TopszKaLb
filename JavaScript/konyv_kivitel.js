
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

function ListaMegjelenit(eleje,vege){
    var tomb = zenek
    document.getElementById("konyv_tabla").innerHTML = ""
    for (let i = eleje; i < vege; i++) {
        document.getElementById("konyv_tabla").innerHTML +=`<div id="grid-item"><div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><img class="card-img" alt="Avatar" src ="${tomb[i].boritoKep}"style="width:100%;height:70%;"><h2>${tomb[i].neve}</h2><span>${tomb[i].eloado}</span><p id="datum"></p></div><div class="flip-card-back"><h1>${tomb[i].eloado}</h1><p>${tomb[i].link}</p><p>${tomb[i].neve}</p></div></div></div></div>`  
    }
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
function oldalszamok(oldalszám,htmlId){
    
    

    for (let i = 0; i < oldalszám; i+=5) {

        
        document.getElementById(htmlId).innerHTML += `<div id="azon${(i/5)+1}" onclick="linkezes(self)" class="page-item"><a class="page-link"  onclick='megjelenit(${i},${i+5})'>${(i/5)+1}</a></div>`
        
    }
    
    var pageLinks = document.querySelectorAll('.pagination .page-link');
    
    for (var i = 0; i < pageLinks.length; i++) {
        pageLinks[i].addEventListener('click', function() {
          var activeLink = document.querySelector('.pagination .active');
          if (activeLink) {
            activeLink.classList.remove('active');
          }
          this.parentNode.classList.add('active');
      
        });
    }
}

function konyvek_oldalszam(){
    oldalszamok(konyvek.length,'oldalszam_menu_belso')
}
