
var i=1;
function changeImage(){
	if(i==1){
		document.getElementById("sm").src="https://uploads-ssl.webflow.com/5d4868dce260e32178361040/5d81014571af816587868d3d_FTC.png";
		i=2;
	}
	else if(i==2){
		document.getElementById("sm").src="https://longislandweekly.com/wp-content/uploads/2019/02/FTC-championship-photo.jpg";
		i=3;
	}
	else if(i==3){
		document.getElementById("sm").src="https://i0.wp.com/njstempathways.org/wp-content/uploads/2020/01/DSCF5553.jpg?fit=4608%2C2592&ssl=1";
		i=4;
	}
	else if(i==4){
		document.getElementById("sm").src="https://s.hdnux.com/photos/01/10/06/22/18900106/3/920x920.jpg";
		i=5;
	}
	else if(i==5){
		document.getElementById("sm").src="https://www.qualcomm.com/sites/ember/files/styles/optimize/public/blog/managed-images/the-kit-rover-image-4_sized.jpg?itok=UFieP3pV";
		i=1;
	}
}
function startTime(){
	var timer = setInterval("changeImage()",10000);
}
