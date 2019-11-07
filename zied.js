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

function checkFlexion(material,force) {
	
}