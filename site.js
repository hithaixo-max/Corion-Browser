const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-links');
function closeMenu() {toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation');document.body.classList.remove('nav-open');}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');document.body.classList.toggle('nav-open',open);});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
const tabs=[...document.querySelectorAll('[data-shot]')];
function selectTab(tab){tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1;});const image=document.querySelector('#browser-shot');image.src='assets/'+tab.dataset.shot+'.webp';image.alt=tab.dataset.alt;document.querySelector('#shot-panel').setAttribute('aria-labelledby',tab.id);}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();selectTab(tabs[next]);tabs[next].focus();}});});

// A mobile menu must not stay expanded after returning from the desktop layout.
matchMedia('(min-width: 641px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
