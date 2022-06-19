// Получаем наши четыре инпута
var rangeTl = document.getElementById('tlr');
var rangeTr = document.getElementById('trr');
var rangeBl = document.getElementById('blr');
var rangeBr = document.getElementById('brr');
// Получаем результирующиие значения наших инпутов
var reultTl = document.getElementById('result-tlr');
var reultTr = document.getElementById('result-trr');
var reultBl = document.getElementById('result-blr');
var reultBr = document.getElementById('result-brr');

var inputs = document.querySelectorAll('.input');
var cube = document.getElementById('cube');

function changeRadius() {
  reultTl.innerHTML = rangeTl.value;
  reultTr.innerHTML = rangeTr.value;
  reultBr.innerHTML = rangeBr.value;
  reultBl.innerHTML = rangeBl.value;
  cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px';
  var buttonGenerate = document.querySelector('.button__radius');
  buttonGenerate.addEventListener('click', function(){
    var cubeRadius = document.querySelector('.cube');
    cubeRadius.style.borderRadius = cube.style.borderRadius;
  })
};

for(var node of inputs) {
  node.addEventListener('input', changeRadius);
}