let index = 0;
const pages = document.querySelectorAll(".page");


for(let i=0;i<20;i++){
  let h=document.createElement("div");
  h.className="heart";
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.animationDuration=4+Math.random()*4+"s";
  document.body.appendChild(h);
}

function showPage(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

function nextPage() {
  index++;
  showPage(index);
}

function yes() {
  nextPage();
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 200 + "px";
  btn.style.top = Math.random() * 120 + "px";
}
