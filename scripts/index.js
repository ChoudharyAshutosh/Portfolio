(()=>{
    let scrollElement=document.querySelector("html");
    let home=document.querySelector("#home");
    let about=document.querySelector("#about");
    let academics=document.querySelector("#academics");
    let skills=document.querySelector("#skills");
    let projects=document.querySelector("#projects");
    let contact=document.querySelector("#contact");
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
})();