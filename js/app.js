!function(){let e=window.pageYOffset,t=document.querySelectorAll("section"),o=document.querySelectorAll("#resume .section"),r=document.querySelectorAll("#resume .section .body"),l=document.querySelectorAll("#resume .section h4");if(window.addEventListener("load",()=>{document.querySelector(".loader").style.opacity="0",setTimeout(()=>{document.querySelector(".loader").style.display="none",document.getElementById("loading-screen").style.width="0px",document.getElementById("loading-screen").style.setProperty("--width","0%")},750),setTimeout(()=>{window.innerWidth>=1200&&function e(){let t=0,o="I am passionate about mechanical design, electronics, and programming. I'm committed to personal growth and always striving to excel in complex projects that require innovative thinking.";!function e(){t<o.length?(document.querySelector(".prief").textContent+=o.charAt(t),t++,setTimeout(e,20)):setTimeout(()=>{document.querySelector(".more").classList.add("show-more-btn")},400)}()}(),document.querySelector("#loading-screen").remove()},2500)}),window.addEventListener("scroll",()=>{let n;if(e>(n=window.pageYOffset)?(document.querySelector("header").style.transform="translate(-20%, -50%)",document.querySelector("header").style.overflow="visible"):(document.querySelector("header").style.transform="translate(150%,-50%)",document.querySelector("header").style.overflow="hidden"),e=n,window.innerWidth>=1200){let s=document.querySelector(".profile-pic");s.style.transform=`translateY(${.5*window.scrollY}px)`}(function(){let e=document.querySelectorAll(".skill-box");for(let t=0;t<e.length;t++)innerHeight-e[t].getBoundingClientRect().height>e[t].getBoundingClientRect().top?e[t].classList.add("show-skill-box"):e[t].classList.remove("show-skill-box")})(),t.forEach(e=>{let t=e.offsetHeight,o=e.offsetTop-300,r=e.getAttribute("id");scrollY>o&&scrollY<=o+t?document.querySelector(`header a[href*="#${r}"]`).classList.add("active"):document.querySelector(`header a[href*="#${r}"]`).classList.remove("active")});for(let i=0;i<o.length;i++)o[i].getBoundingClientRect().top<innerHeight-o[i].getBoundingClientRect().height?(l[i].style.opacity="1",l[i].style.setProperty("--width","0px"),o[i].style.setProperty("--height","100%"),setTimeout(()=>{r[i].classList.add("showSection")},200)):o[i].getBoundingClientRect().top>innerHeight-50&&(r[i].classList.remove("showSection"),l[i].style.setProperty("--width","100%"),o[i].style.setProperty("--height","0px"),l[i].style.opacity="0")}),window.innerWidth>=1200){let n=document.querySelector("#home .caption"),s=document.createElement("p"),i=document.createElement("a");i.classList.add("more","rounded-5","d-inline-block","px-4","py-2","text-decoration-none"),s.classList.add("text-muted","lead","prief","py-4"),i.setAttribute("href","#about"),i.textContent="MORE ABOUT ME",n.appendChild(s),n.appendChild(i)}!function(){let e=document.querySelectorAll("#projects .project .img-div"),t=document.querySelectorAll("#projects .logo"),o=document.querySelectorAll("#projects .project .img-div video"),r=new Date,l=r.getFullYear(),n=document.createElement("a");n.href="https://mo3tazbellah.github.io/brief",n.target="_blank",n.classList.add("text-uppercase","text-decoration-none"),n.innerHTML="Powered By <span>moataz-bellah</span>",document.querySelector("footer span").textContent=`\xa9${l} All Rights Reserved`,document.querySelector("footer .footer-c").appendChild(n);for(let s=0;s<e.length;s++)e[s].addEventListener("mousemove",r=>{t[s].style.backgroundPosition=`${r.offsetX-37}px ${r.offsetY-37}px`,e[s]!==e[2]&&(o[s].play(),o[s].addEventListener("ended",()=>{o[s].currentTime=0,o[s].play()}))}),e[s].addEventListener("mouseleave",()=>{t[s].style.backgroundPosition="right bottom",e[s]!==e[2]&&o[s].pause()})}()}();