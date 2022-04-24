(()=>{
    let scrollElement=document.querySelector("html");
    let home=document.querySelector("#home");
    let about=document.querySelector("#about");
    let experience=document.querySelector("#experience");
    let academics=document.querySelector("#academics");
    let skills=document.querySelector("#skills");
    let projects=document.querySelector("#projects");
    let contact=document.querySelector("#contact");
    let sendButton=document.querySelector("#send");
    let linkedin=document.querySelector("#linkedin");
    let github=document.querySelector("#github");

    const selectHome = ()=>{
        home.style.color="blueviolet";
        about.style.color="white";
        experience.style.color="white";
        academics.style.color="white";
        skills.style.color="white";
        projects.style.color="white";
        contact.style.color="white";
    }

    const selectAbout = ()=>{
        home.style.color="white";
        about.style.color="blueviolet";
        experience.style.color="white";
        academics.style.color="white";
        skills.style.color="white";
        projects.style.color="white";
        contact.style.color="white";
    }

    const selectExperience = ()=>{
        home.style.color="white";
        about.style.color="white";
        experience.style.color="blueviolet";
        academics.style.color="white";
        skills.style.color="white";
        projects.style.color="white";
        contact.style.color="white";
    }

    const selectAcademics = ()=>{
        home.style.color="white";
        about.style.color="white";
        experience.style.color="white";
        academics.style.color="blueviolet";
        skills.style.color="white";
        projects.style.color="white";
        contact.style.color="white";
    }

    const selectSkills = ()=>{
        home.style.color="white";
        about.style.color="white";
        experience.style.color="white";
        academics.style.color="white";
        skills.style.color="blueviolet";
        projects.style.color="white";
        contact.style.color="white";
    }

    const selectProjects = ()=>{
        home.style.color="white";
        about.style.color="white";
        experience.style.color="white";
        academics.style.color="white";
        skills.style.color="white";
        projects.style.color="blueviolet";
        contact.style.color="white";
    }

    const selectContact = ()=>{
        home.style.color="white";
        about.style.color="white";
        experience.style.color="white";
        academics.style.color="white";
        skills.style.color="white";
        projects.style.color="white";
        contact.style.color="blueviolet";
    }
    
    home.addEventListener('click',()=>{
        scrollElement.scrollTop=0;
    });
    
    about.addEventListener('click',()=>{
        scrollElement.scrollTop=document.querySelector("#about-heading").offsetTop;
    });
    
    experience.addEventListener('click',()=>{
        scrollElement.scrollTop=document.querySelector("#experience-heading").offsetTop;
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
    
    window.addEventListener('scroll',()=>{
        //console.log(scrollElement.scrollTop)
        if(scrollElement.scrollTop < document.querySelector("#about-heading").offsetTop)
            selectHome();
        else if(scrollElement.scrollTop < document.querySelector("#experience-heading").offsetTop)
            selectAbout();
        else if(scrollElement.scrollTop < document.querySelector("#academics-heading").offsetTop)
            selectExperience();
        else if(scrollElement.scrollTop < document.querySelector("#skills-heading").offsetTop)
            selectAcademics();
        else if(scrollElement.scrollTop < document.querySelector("#projects-heading").offsetTop)
            selectSkills();
        else if(scrollElement.scrollTop < document.querySelector("#contact-heading").offsetTop)
            selectProjects();
        else
            selectContact();
    })

    linkedin.addEventListener("click",()=>{
        window.open("https://www.linkedin.com/in/ashutosh-choudhary-73baa1189","_blank");
    })
    
    github.addEventListener("click",()=>{
        window.open("https://github.com/ChoudharyAshutosh","_blank");
    });

    selectHome();
})();