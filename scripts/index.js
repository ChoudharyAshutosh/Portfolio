(()=>{
    let scrollElement=document.querySelector("html");
    let home=document.querySelector("#home");
    let about=document.querySelector("#about");
    let academics=document.querySelector("#academics");
    let skills=document.querySelector("#skills");
    let projects=document.querySelector("#projects");
    let contact=document.querySelector("#contact");
    let sendButton=document.querySelector("#send");
    let linkedin=document.querySelector("#linkedin");
    let github=document.querySelector("#github");
    home.addEventListener('click',()=>{
        scrollElement.scrollTop=0;
    });
    about.addEventListener('click',()=>{
        scrollElement.scrollTop=document.querySelector("#about-heading").offsetTop;
    });
    academics.addEventListener('click',()=>{
        scrollElement.scrollTop=document.querySelector("#academics-heading").offsetTop;
    });
    skills.addEventListener('click',()=>{
        scrollElement.scrollTop=document.querySelector("#skills-heading").offsetTop;
    });
    projects.addEventListener('click',()=>{
        scrollElement.scrollTop=document.querySelector("#projects-heading").offsetTop;
    });
    contact.addEventListener('click',()=>{
        scrollElement.scrollTop=document.querySelector("#contact-heading").offsetTop;
    });
    sendButton.addEventListener('click',()=>{
        let name=document.querySelector("#name");
        let subject=document.querySelector("#subject");
        let body=document.querySelector("#body");
        if(name.value=="" || subject.value=="" || body.value==""){
            {alert("Please fill all boxes.");return;}
        
        }
        window.open("mailto:choudharyashutosh7070@gmail.com?subject="+subject.value+"&body="+name.value+":"+body.value,"_black");
    });
    linkedin.addEventListener("click",()=>{
        window.open("https://www.linkedin.com/in/ashutosh-choudhary-73baa1189","_blank");
    })
    github.addEventListener("click",()=>{
        window.open("https://github.com/ChoudharyAshutosh","_blank");
    });
})();