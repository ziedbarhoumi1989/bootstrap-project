/////////////////////----------->global variables
$(document).ready(function() {
var iron=material('iron',200000,80000,0.24,260000);
var steelXC10=material('steelXC10',216000,86400,0.29,500000);
var steelC32=material('steelC32',200000,80000,0.24,520000);
var steelC45=material('steelC45',200000,80000,0.24,530000);
var steel35NCD=material('steel35NCD',200000,80000,0.24,510000);
var steel45SCD=material('steel45SCD',200000,80000,0.28,490000);
var aliminuim=material('aliminuim',70500,28200,0.34,150000);
var copper=material('copper',100000,40000,0.33,35000);
var brass=material('brass',125000,50000,0.38,400000);
var magnesuim=material('magnesuim',46000,18400,0.05,165000);
var zinc=material('zinc',130000,52000,0.21,320000);
var nickel=material('nickel',205000,82000,0.31,480000);
var materials=[iron,steelXC10,steelC32,steelC45,steel35NCD,steel45SCD,aliminuim,copper,brass,magnesuim,zinc,nickel];
var name = $('#userInputName').val();
chosenMaterial=materials[getRandomInt(0,materials.length)]

var elastic=Number($('#userInputElastic').val());

var poisson=Number($('#userInputPoisson').val());
var stress= Number($('#userInputStress').val());

var userInput = material(name,elastic,poisson,stress) ;
var chosenMaterial={};
var form;
var $length=$('<label>length<input type="number" min="0" id="length"></label>');
var $width=$('<label>width<input type="number" min="0" id="width"></label>');
var $raduis=$('<label>raduis<input type="number" min="0" id="raduis"></label>');
var length=$('#length').val();
var width=$('#width').val();
 var raduis=$('#raduis').val();
var torque;

$("div button").on('click',function(){
	
	 var fired_button = $(this).text();
	//console.log(fired_button)
	for(var i in materials) {
		if(materials[i].name === fired_button){
			chosenMaterial=materials[i]
			console.log(chosenMaterial)
			//console.log("updated")
		}
	}

})

console.log(chosenMaterial)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
chosenMaterial=materials[getRandomInt(0,materials.length)]

//////////////////-------------->jquery variables

var $name=$('#name');
var $Elastic=$('#Elastic');
var $Shear=$('#Shear');
var $Poisson=$("#Poisson");
var $stress=$("#stress");

function material(name, elasticModulus, shearModulus, poissonRatio,limitStress) {
	var testedMaterial={};
	testedMaterial.name=name;
	testedMaterial.elasticModulus=elasticModulus;
	testedMaterial.shearModulus=shearModulus;
	testedMaterial.poissonRatio=poissonRatio;
	testedMaterial.limitStress = limitStress
	return testedMaterial;
}
var i=0
chosenMaterial=
$name.hide();
$Elastic.hide();
$Shear.hide();
$Poisson.hide();
$stress.hide();

$('#section2').append($length);
$('#section2').append($width);
$('#section2').append($raduis);
$('#other').on('click',function(){
	$name.show();
	$Elastic.show();
	$Shear.show();
	$Poisson.show();
	$stress.show();
})

$length.hide();
$width.hide();
$raduis.hide();
function checkTractionOrCompression() {
	if(form==="rectangle"){

		  var length=window.prompt("Specify the length")
		  var width=window.prompt("Specify the width")
		  var load=window.prompt("Specify load")
		  if((load/(length*width))<=chosenMaterial.limitStress) {
		  	alert('you can use it')
		  }else alert("sorry you can't do that")
	}
	if(material.form==="circle"){
		 var load=window.prompt("Specify load")
		 if((force/(Math.PI*raduis*raduis)<=chosenMaterial.limitStress)){
		 	alert('you can use it')
		 } else alert("sorry you can't do that")
	}


}

function checkFlexion() {
	var geometry
	if(form==="rectangle"){

		var length=window.prompt("Specify the length")
		var width=window.prompt("Specify the width")

		
		 var bendingValue=window.prompt("Specify the bending value")
		  var bendingPosition=window.prompt("Specify the bending positionS")
		  geometry=Math.pow(length,3)*width/12

		  if((bendingValue*bendingPosition/geometry )<=750000) {
		  	alert('you can use it')
		  }else alert("sorry you can't do that")
	}
	if(form==="circle"){

		var raduis=window.prompt("Specify the raduis")
		

		 var bendingValue=window.prompt("Specify the bending value")
		 var bendingPosition=window.prompt("Specify the bending positionS")
		 geometry=(Math.PI*Math.pow(raduis,4)/12)
		 if((bendingValue*bendingPosition/geometry )<=chosenMaterial.limitStress){
		 	alert('you can use it'+'\n'+'raduis:'+raduis)
		 } else alert("sorry you can't do that")
	}

}
;
//example:
$('#choose').on('click', function(){
	$('#section2').hide();
	var raduis=$('#raduis').val()
	var length=$('#length').val();
	var width=$('#width').val();
	$('#section3').show();

})
function checkTorsion() {

	var geometry
	if(form==="rectangle"){
		alert("can't do the test")
	}
	if(form==="circle"){
		 var raduis=window.prompt("Specify the raduis")
		 geometry=(Math.PI*Math.pow(raduis,4)/12)
		 if((torque*raduis/geometry )<=500000){
		 	alert('you can use it\n and the maximum torsion angle equals:'+torque/material.shearModulus/geometry)
		 	
		 } else alert("sorry you can't do that")
	}
}

$('#flexion').hide()
$('#traction').hide()
$('#torsion').hide()

$('#flex').on('click',function(){

	var rad = raduis
	console.log(rad)
	checkFlexion()

	checkFlexion();

	$('#flexion').show()
	$('#traction').hide()
    $('#torsion').hide()
})

$('#trac').on('click',function(){
	checkTractionOrCompression()
	$('#flexion').hide()
	$('#traction').show()
    $('#torsion').hide()
})

$('#tor').on('click',function(){
	checkTorsion()
	$('#flexion').hide()
	$('#traction').hide()
    $('#torsion').show()
})


$('select').on("change",function(){
      if($(this).val()==1) {
      	$length.show();
      	$width.show();
      	$raduis.hide()
      	form ='rectangle';
      	$('#materialForm').attr("src","construction1.gif");
      }
      if($(this).val()==2) {
      	$raduis.show();
      	$length.hide();
      	$width.hide();
      	form='circle';
      	$('#materialForm').attr("src","cylinder.gif");
      }
          
});
$('#section3').hide();



var $selected=$("select option").val();

if($selected ==='rectangle') {
	
} 
if($selected==='circle') {
	$('div').append('<label>raduis:<input type=\'number\'></label>')
} 

$('#section2').hide();


$('button#start').on('click',function(){
	
	$('#section1').hide("slow");
	$('#section2').show("fast");

})
})