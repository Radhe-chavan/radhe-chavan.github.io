// Scroll reveal
(function(){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:0.07});
  document.querySelectorAll('.reveal').forEach((el,i)=>{
    el.style.transitionDelay = (i%6)*0.07+'s';
    obs.observe(el);
  });

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href').split('/').pop();
    if(href===path) a.classList.add('active');
  });
})();
