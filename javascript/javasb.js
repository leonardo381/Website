let time = 5000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
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
