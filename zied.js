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

function checkTraction(material,force) {
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
function checkFlexion() {

}
$('select').on("change",function(){
      if($(this).val()==1) {
      	$('form').append('<label>length:<input type=\'number\'></label><br><label>width:<input type=\'number\'></label>')
      }
      if($(this).val()==2) {
      	$('form').append('<label>raduis:<input type=\'number\'></label>')
      }
          
});
var $selected=$("select option").val();
console.log ($selected)
if($selected ==='rectangle') {
	
} 
if($selected==='circle') {
	$('form').append('<label>raduis:<input type=\'number\'></label>')
} 

$('#section2').hide();
$('button#start').on('click',function(){
	//checkTraction(silver,50)
	$('#section1').hide("slow");
	$('#section2').show("fast");

})