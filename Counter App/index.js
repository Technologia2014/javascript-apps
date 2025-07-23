
document.getElementById('add').onclick = add;
document.getElementById('reset').onclick = reset;
document.getElementById('subtract').onclick = subtract;
var count;
    
function add(){
  document.getElementById('display').textContent = count;
    count += 1;
}
function reset(){
    document.getElementById('display').textContent = count;
       count = 0  
}
function subtract(){
    document.getElementById('display').textContent = count;
    count -= 1;
    
}
