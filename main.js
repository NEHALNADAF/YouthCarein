// Basic JS: mobile nav toggle, counters, smooth scroll, contact form demo
document.addEventListener('DOMContentLoaded', function(){
  // mobile menu
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if(btn){ btn.addEventListener('click', function(){ nav.style.display = nav.style.display === 'block' ? '' : 'block'; })}

  // counters
  function animateCounter(id, to, delay){
    const el = document.getElementById(id);
    if(!el) return;
    let start=0; const dur=1400; const stepTime=20; const steps=Math.ceil(dur/stepTime); let step=0; const inc=to/steps;
    const t = setInterval(()=>{ step++; start+=inc; el.textContent = Math.floor(start); if(step>=steps){ el.textContent = to; clearInterval(t)} }, stepTime);
  }
  setTimeout(()=>{ animateCounter('counter1',1240); animateCounter('counter2',32); animateCounter('counter3',18); }, 400);

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // contact form demo
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you! This is a demo form. Implement Formspree or Netlify Forms to receive messages.');
      form.reset();
    });
  }
});
