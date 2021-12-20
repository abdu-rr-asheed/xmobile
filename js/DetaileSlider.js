//Slider

function rangeSlider(value) {
    document.getElementById("fillRangeValue").style.width = +value + "%";
  }
  
  
  // 
  
  let thumbnails = document.getElementsByClassName('thumbnail')
  
          let activeImages = document.getElementsByClassName('active')
  
          for (var i=0; i < thumbnails.length; i++){
  
              thumbnails[i].addEventListener('click', function(){
                  console.log(activeImages)
                  
                  if (activeImages.length > 0){
                      activeImages[0].classList.remove('active')
                  }
                  
  
                  this.classList.add('active')
                  document.getElementById('featured').src = this.src
              })
          }
  
  
          let buttonRight = document.getElementById('slideRight');
          let buttonLeft = document.getElementById('slideLeft');
  
          buttonLeft.addEventListener('click', function(){
              document.getElementById('slider').scrollLeft -= 180
          })
  
          buttonRight.addEventListener('click', function(){
              document.getElementById('slider').scrollLeft += 180
          })

// Product OverView


function specifitionFunction() {
    document.querySelector(".productOver").style.display = "none";
    document.querySelector(".Table_Specification").style.display = "grid";
    document.querySelector(".SpecifitionHead").style.opacity = "1";
    document.querySelector(".SpecifitionHead").style.borderBottom = "3px solid #1786d3";
    document.querySelector(".productHead").style.opacity = "0.5";
    document.querySelector(".productHead").style.borderBottom = "none";
    console.log("object");
}
function productFunction() {
    document.querySelector(".Table_Specification").style.display = "none";
    document.querySelector(".productOver").style.display = "grid";
    document.querySelector(".SpecifitionHead").style.opacity = "0.5";
    document.querySelector(".SpecifitionHead").style.borderBottom = "none";
    document.querySelector(".productHead").style.opacity = "1";
    document.querySelector(".productHead").style.borderBottom = "3px solid #1786d3";
    console.log("object2");
}


