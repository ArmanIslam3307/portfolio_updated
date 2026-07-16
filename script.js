// CURSOR
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);})();
document.querySelectorAll('a,button,.skill-tag,.card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='50px';ring.style.height='50px';ring.style.opacity='0.8';});
  el.addEventListener('mouseleave',()=>{ring.style.width='36px';ring.style.height='36px';ring.style.opacity='0.5';});
});

// TYPEWRITER
const words=['Web Developer','Frontend Developer','TVET Trainer','Django Developer'];
let wi=0,ci=0,del=false;
const typed=document.getElementById('typed');
function typeLoop(){
  const w=words[wi];
  if(!del){typed.textContent=w.slice(0,ci+1);ci++;if(ci===w.length){del=true;setTimeout(typeLoop,1600);return;}}
  else{typed.textContent=w.slice(0,ci-1);ci--;if(ci===0){del=false;wi=(wi+1)%words.length;}}
  setTimeout(typeLoop,del?50:90);
}
typeLoop();


// NAV SHRINK
const navbar=document.querySelector('nav');
window.addEventListener('scroll',()=>{navbar.style.padding=window.scrollY>40?'10px 24px':'';navbar.style.paddingLeft=window.scrollY>40?'24px':'';navbar.style.paddingRight=window.scrollY>40?'24px':'';});


// REVEAL
const revEls=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*60);obs.unobserve(e.target);}})},{threshold:0.1});
revEls.forEach(el=>obs.observe(el));

// MOBILE MENU
function toggleMenu(){const m=document.getElementById('mobile-menu');m.classList.toggle('open');}


// SEND
function handleSend(btn){
  btn.textContent='✓ Sent!';
  btn.style.background='rgba(34,211,238,0.1)';
  btn.style.color='#22d3ee';
  btn.style.border='1px solid #22d3ee';
  setTimeout(()=>{btn.textContent='Send Message →';btn.style.background='linear-gradient(135deg,#6366f1,#22d3ee)';btn.style.color='#0a1628';btn.style.border='none';},3000);
}