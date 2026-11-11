// JavaScript for Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Jab hamburger menu par click ho
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Jab kisi link par click ho, to menu band ho jaaye
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
// Mobile navigation + subtle reveal effects
document.addEventListener('DOMContentLoaded',()=>{
 const burger=document.querySelector('.hamburger'),menu=document.querySelector('.nav-menu');
 if(burger&&menu){burger.addEventListener('click',()=>{menu.classList.toggle('active');burger.classList.toggle('active')});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('active')))}
 const items=document.querySelectorAll('.service-card,.package-card,.showcase-card,.stat-chip');
 if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});items.forEach(el=>io.observe(el))}else items.forEach(el=>el.classList.add('is-visible'));
});
