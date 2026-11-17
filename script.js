
const button=document.getElementById('forgive');
const reply=document.getElementById('reply');
if(button&&reply){button.addEventListener('click',()=>{
 reply.textContent='A tiny capybara hug is on its way! 🧡🦫 Thank you for hearing me.';
 for(let i=0;i<24;i++){const e=document.createElement('span');e.className='heart';e.textContent=['🧡','🤎','🥕','🌼','💗'][Math.floor(Math.random()*5)];e.style.left=Math.random()*100+'vw';e.style.animationDelay=Math.random()*.8+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),4000);}
});}
