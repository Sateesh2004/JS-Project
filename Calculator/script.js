let res = document.getElementById("result");

function insert(num) {
 
  res.value += num;

}

function calculate() {
  res.value = eval(res.value);
}
function back(){
  str=res.value;
  res.value=str.slice(0 , str.length-1);
}
function sqt() {
  res.value = (res.value*res.value);
}
function cls() {
  str = res.value;
  res.value = str.slice(0 ,0);

}
