var button = document.getElementById("calc");
var x1 =  document.querySelector("#x1");
var y1 =  document.getElementById("y1");
var z1 =  document.getElementById("z1");
var x2 =  document.getElementById("x2");
var y2 =  document.getElementById("y2");
var z2 =  document.getElementById("z2");

button.addEventListener('click', function(){
     document.getElementById('rex').value = (parseFloat(y1.value)*parseFloat(z2.value))- (parseFloat(z1.value)*parseFloat (y2.value));
     document.getElementById("rey").value = -((parseFloat (x1.value)*parseFloat (z2.value))- (parseInt (x2.value)*parseFloat (z1.value)));
     document.getElementById("rez").value = (parseFloat (y2.value)*parseFloat (x1.value))- (parseFloat (y1.value)*parseFloat (x2.value));
    console.log(x1.value);
})


