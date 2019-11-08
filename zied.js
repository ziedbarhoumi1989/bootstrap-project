function material(name, color, form, elasticModulus, shearModulus, poissonRatio,limitStress) {
	var testedMaterial={};
	testedMaterial.name=name;
	testedMaterial.color=color;
	testedMaterial.form=form
	testedMaterial.elasticModulus=elasticModulus;
	testedMaterial.shearModulus=shearModulus;
	testedMaterial.poissonRatio=poissonRatio;
	testedMaterial.limitStress = limitStress
	return testedMaterial;
}



//var matarials=[material("a,b,c,d,e,f,g),material(a,b,c,d,e,f,g),material(a,b,c,d,e,f,g)]
var silver=material("silver","silver","circle",300,400,1.5,800)

function checkTractionOrCompression(material,force) {
	if(material.form==="rectangle"){
		 var length=window.prompt("Specify the length")
		  var width=window.prompt("Specify the width")
		  if((force/(length*width))<=material.limitStress) {
		  	alert('you can use it')
		  }else alert("sorry you can't do that")
	}
	if(material.form==="circle"){
		 var raduis=window.prompt("Specify the raduis")
		 if((force/(Math.PI*raduis*raduis)<=material.limitStress)){
		 	alert('you can use it')
		 } else alert("sorry you can't do that")
	}


}

function checkFlexion(material,bendingValue,bendingPosition) {
	var geometry
	if(material.form==="rectangle"){
		 var length=window.prompt("Specify the length")
		  var width=window.prompt("Specify the width")
		  geometry=Math.pow(length,3)*width/12

		  if((bendingValue*bendingPosition/geometry )<=material.limitStress) {
		  	alert('you can use it')
		  }else alert("sorry you can't do that")
	}
	if(material.form==="circle"){
		 var raduis=window.prompt("Specify the raduis")
		 geometry=(Math.PI*Math.pow(raduis,4)/12)
		 if((bendingValue*bendingPosition/geometry )<=material.limitStress){
		 	alert('you can use it')
		 } else alert("sorry you can't do that")
	}

}
function checkSheer(material){

}
function checkTorsion(material,torque) {
	var geometry
	if(material.form==="rectangle"){
		alert("can't do the test")
	}
	if(material.form==="circle"){
		 var raduis=window.prompt("Specify the raduis")
		 geometry=(Math.PI*Math.pow(raduis,4)/12)
		 if((torque*raduis/geometry )<=material.limitStress){
		 	alert('you can use it\n and the maximum torsion angle equals:'+torque/material.shearModulus/geometry)
		 	
		 } else alert("sorry you can't do that")
	}
}
$('#test3').on('click',function () {
	checkTorsion(silver,250)
})














$('select').on("change",function(){
      if($(this).val()==1) {
      	$('form').append('<label>length:<input type=\'number\'></label><br><label>width:<input type=\'number\'></label>')
      }
      if($(this).val()==2) {
      	$('form').append('<label>raduis:<input type=\'number\'></label>')
      }
          
});
$('#section3').hide();
$('#choose').on('click', function(){
	$('#section2').hide();
	$('#section3').show();

})


var $selected=$("select option").val();

if($selected ==='rectangle') {
	
} 
if($selected==='circle') {
	$('form').append('<label>raduis:<input type=\'number\'></label>')
} 

$('#section2').hide();
//console.log(typeof($('input type="number"')))

$('button#start').on('click',function(){
	
	$('#section1').hide("slow");
	$('#section2').show("fast");

})