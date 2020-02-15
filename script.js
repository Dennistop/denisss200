//Lesson 18
function DoSomething() {
	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elit orci, convallis eu odio at, posuere mattis diam. Curabitur sed hendrerit nulla. Donec aliquet ultrices nibh. Cras blandit ligula in quam efficitur feugiat. Phasellus quis turpis ac nisi pharetra ultrices pretium in libero. Vestibulum massa lorem, scelerisque quis lorem non, elementum egestas diam. Nunc tellus nisl, suscipit sed ante at, euismod blandit felis. Fusce varius, dolor ac pretium tincidunt, metus justo molestie lectus, vehicula ultrices dolor erat id nibh. Fusce blandit justo metus, imperdiet efficitur augue imperdiet in. Mauris sollicitudin enim vel mauris fermentum pulvinar. Curabitur ut enim dignissim arcu faucibus condimentum. Duis eget quam velit.";
	var str = document.getElementById('str');
	str.innerHTML = lorem.length;
	var count=0;
	for( var i = 0; i< lorem.length; i++) {
		if(lorem.charAt(i) == ' ') {
			count++;
		}
	}
	console.log(count);
		var strCount = 0 ;
		
	function onKeyDown(e) {
		var output = document.getElementById ('output');
            output.innerHTML= e.key;
			
		var str = document.getElementById('str');
		var pub = "";
		for(var i  =0; i<lorem.length; i++) {
			if (strCount == i) {
			pub += '*' +lorem.charAt(i);
			} else {
				pub += lorem.charAt(i);
			}
		}
		str.innerHTML = pub;
				
	}
	addEventListener("keydown" , onKeyDown);
	
}

addEventListener("DOMContentLoaded", DoSomething);














