function setPlan(type){
  document.querySelectorAll(".toggle button").forEach(b=>b.classList.remove("active"));
  event.target.classList.add("active");

  if(type==="monthly"){
    basicPrice.innerHTML="$9 <span>/mo</span>";
    proPrice.innerHTML="$19 <span>/mo</span>";
    entPrice.innerHTML="$49 <span>/mo</span>";
  }else{
    basicPrice.innerHTML="$90 <span>/yr</span>";
    proPrice.innerHTML="$190 <span>/yr</span>";
    entPrice.innerHTML="$490 <span>/yr</span>";
  }
}