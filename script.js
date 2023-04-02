var met = document.getElementById("met")
met.addEventListener('input', function(){
    let m=this.value;
    let c = m*100;
    centi.value = c;
});

var centi = document.getElementById("centi")
centi.addEventListener('input', function(){
    let m=this.value;
    let c = m/100;
    met.value = c;
   
});




