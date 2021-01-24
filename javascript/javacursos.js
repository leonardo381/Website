var pag = 0;

function before_page()
{
    
    if(pag > 0)
    {
        document.getElementById("img1").src ="../imgs/exeimg.jpg";
        document.getElementById("img2").src ="../imgs/exeimg.jpg";
        document.getElementById("img3").src ="../imgs/exeimg.jpg";
        document.getElementById("img4").src ="../imgs/exeimg.jpg";
    
        document.getElementById("ct1").innerHTML ="Curso de C";
        document.getElementById("ct2").innerHTML ="Curso de C";
        document.getElementById("ct3").innerHTML ="Curso de C";
        document.getElementById("ct4").innerHTML ="Curso de C";
        pag--;
    }
    else
    {
        document.getElementById("img1").src ="../imgs/php.PNG";
        document.getElementById("img2").src ="../imgs/php.PNG";
        document.getElementById("img3").src ="../imgs/php.PNG";
        document.getElementById("img4").src ="../imgs/php.PNG";
    
        document.getElementById("ct1").innerHTML ="Curso de PHP";
        document.getElementById("ct2").innerHTML ="Curso de PHP";
        document.getElementById("ct3").innerHTML ="Curso de PHP";
        document.getElementById("ct4").innerHTML ="Curso de PHP";
        pag++;
    }

}

function next_page()
{

    if(pag < 1)
    {
        document.getElementById("img1").src ="../imgs/php.PNG";
        document.getElementById("img2").src ="../imgs/php.PNG";
        document.getElementById("img3").src ="../imgs/php.PNG";
        document.getElementById("img4").src ="../imgs/php.PNG";
    
        document.getElementById("ct1").innerHTML ="Curso de PHP";
        document.getElementById("ct2").innerHTML ="Curso de PHP";
        document.getElementById("ct3").innerHTML ="Curso de PHP";
        document.getElementById("ct4").innerHTML ="Curso de PHP";
        pag++;
    }
    else
    {
        document.getElementById("img1").src ="../imgs/exeimg.jpg";
        document.getElementById("img2").src ="../imgs/exeimg.jpg";
        document.getElementById("img3").src ="../imgs/exeimg.jpg";
        document.getElementById("img4").src ="../imgs/exeimg.jpg";
    
        document.getElementById("ct1").innerHTML ="Curso de C";
        document.getElementById("ct2").innerHTML ="Curso de C";
        document.getElementById("ct3").innerHTML ="Curso de C";
        document.getElementById("ct4").innerHTML ="Curso de C";
        pag--;
    }

}



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

  function openinfo() {
    document.getElementById("moreinfo1").style.display = "block";
  }
  
function closeinfo() {
    document.getElementById("moreinfo1").style.display = "none";
  }