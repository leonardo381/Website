const espaco = document.getElementsByClassName
	('conteudobox');

	for(i = 0; i < espaco.length; i++){
		espaco[i].addEventListener('click', function(){
			this.classList.toggle('active')
		})
    }
    
	window.addEventListener("load", start)
	


	function openForm() {
		document.getElementById("myForm").style.display = "block";
	  }
	  
	function closeForm() {
		document.getElementById("myForm").style.display = "none";
	  }
	
	  function openForm1() {
		document.getElementById("myForm1").style.display = "block";
	  }
	  
	function closeForm1() {
		document.getElementById("myForm1").style.display = "none";
	  }
	
