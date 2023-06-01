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
    
    const onScrollSelect = ()=>{
        //console.log(scrollElement.scrollTop);
        if((scrollElement.scrollTop+150) < document.querySelector("#about-heading").offsetTop)
            selectHome();
        else if((scrollElement.scrollTop+150) < document.querySelector("#experience-heading").offsetTop)
            selectAbout();
        else if((scrollElement.scrollTop+150) < document.querySelector("#academics-heading").offsetTop)
            selectExperience();
        else if((scrollElement.scrollTop+150) < document.querySelector("#skills-heading").offsetTop)
            selectAcademics();
        else if((scrollElement.scrollTop+150) < document.querySelector("#projects-heading").offsetTop)
            selectSkills();
        else if((scrollElement.scrollTop+150) < document.querySelector("#contact-heading").offsetTop)
            selectProjects();
        else
            selectContact();
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
    
    window.addEventListener('scroll',onScrollSelect)

    linkedin.addEventListener("click",()=>{
        window.open("https://www.linkedin.com/in/ashutosh-choudhary-73baa1189","_blank");
    })
    
    github.addEventListener("click",()=>{
        window.open("https://github.com/ChoudharyAshutosh","_blank");
    });

    const setReactNativeExperience = ()=>{
        let reactNativeExperienceElements=document.querySelectorAll('.react-native-experience');
        let totalExperienceElements=document.querySelectorAll('.total-experience');
        let today = new Date();
        let rnStartingDate = new Date('08/16/2021');
        let diff = Math.abs(today - rnStartingDate)/1000;
        let rnExperienceArray = {};   
        let totalExperienceArray = {}; 
        let totalDiff = diff + 10518984;            // adding 4 months in seconds
        let session = {
            year: 31536000,
            month: 2592000,
        };
        let rnExperienceStr = '';
        let totalExperienceStr = '';

        Object.keys(session).forEach(function(key){
            rnExperienceArray[key] = Math.floor(diff / session[key]);
            totalExperienceArray[key] = Math.floor(totalDiff / session[key]);
            diff -= rnExperienceArray[key] * session[key];
            totalDiff -= totalExperienceArray[key] * session[key];
        });
        for(let sessionName in rnExperienceArray){
            if(rnExperienceStr != ''){
                rnExperienceStr += ' ';
                totalExperienceStr += ' ';
            }
            if(rnExperienceArray[sessionName]>0){
                rnExperienceStr += `${rnExperienceArray[sessionName]} ${sessionName}`;
                if(rnExperienceArray[sessionName]>1){
                    rnExperienceStr += 's';
                }
            }
            if(rnExperienceArray[sessionName]>0){
                totalExperienceStr += `${totalExperienceArray[sessionName]} ${sessionName}`;    
                if(totalExperienceArray[sessionName]>1){
                    totalExperienceStr += 's';
                }
            }
        }
        
        for(let index in reactNativeExperienceElements){
            reactNativeExperienceElements[index].innerHTML = rnExperienceStr;
        }
        for(let index in totalExperienceElements){
            totalExperienceElements[index].innerHTML = totalExperienceStr;
        }
    }

    setReactNativeExperience();
    onScrollSelect();
})();