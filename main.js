/*-------------------------------------------------------------slider--------------------------------------------------------------*/
function prev() {
    document.getElementById('slider-container').scrollLeft -= 226;
}

function next() {
    document.getElementById('slider-container').scrollLeft += 226;
}

/*?--------------------------------------------------------------count-------------------------------------------------------------*/
const btn1 = document.getElementById('plus')
const btn2 = document.getElementById('mins')
let count = document.getElementById('counter')
let price = document.getElementById('price-change')

let c =1
btn1.addEventListener('click', function () {
  c++
    count.innerHTML = c ; 
   })

  
btn2.addEventListener('click', function () {
  c--
    count.innerHTML = c ; 
   })
   
  btn1.addEventListener('click',function(){
    price.innerHTML = c * 250
    price.innerHTML += '$'

  })

  btn2.addEventListener('click',function(){
    price.innerHTML = c * 250
    price.innerHTML += '$'

  })
        
  /*---------------------------------------------------------------------------------------------------------------------------------*/
  
let Body = document.getElementById('body')

  dark.addEventListener('click', function(){
    Body.style.backgroundColor ='#938c8c99'
})
light.addEventListener('click', function(){
    Body.style.backgroundColor ='white'
})