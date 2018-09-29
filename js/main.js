document.querySelector("#products").addEventListener("click", function(e){
  e.preventDefault();
  if(document.querySelector(".products").style.display == 'block') {
    document.querySelector(".products").style.display = 'none';  
  } else {
    document.querySelector(".products").style.display = 'block';
  }
});

document.querySelector("#atta").addEventListener("click", function(e){
  e.preventDefault();
  if(document.querySelector(".atta").style.display == 'block') {
    document.querySelector(".atta").style.display = 'none';  
  } else {
    document.querySelector(".atta").style.display = 'block';
  }
});

document.querySelector('button').addEventListener('click', function(e) {
 console.log(e);
});
