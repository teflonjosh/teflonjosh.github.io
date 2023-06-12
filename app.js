// Script for Type Effect //
    const messages = [
      "I'm a Web Developer",
      "I'm a Programmer",
      "I'm a Data-Enthusiast",
      "I have a background in ad tech/marketing",
      "I would like you to take a look around",
      "I would love for you to reach out!"
    ];
// DOM
    const typewriterElement = document.getElementById("type");
    let messageIndex = 0;
// Current Message Function
    function typeMessage() {
    const currentMessage = messages[messageIndex];
// Set interval for messages ++ APPLY
    let charIndex = 0;
    const typeInterval = setInterval(() => {
    typewriterElement.textContent += currentMessage.charAt(charIndex);
    charIndex++;
// set index to current message / Erase Message / Set interval time
    if (charIndex === currentMessage.length) {
        clearInterval(typeInterval);
        setTimeout(eraseMessage, 2500);
        }
      }, 100);
    }
// clear current message
    function eraseMessage() {
    const currentMessage = messages[messageIndex];
// Set interval for messages -- REMOVE
    let charIndex = currentMessage.length - 1;
    const eraseInterval = setInterval(() => {
        typewriterElement.textContent = typewriterElement.textContent.slice(0, charIndex);
        charIndex--;
// set index to current message / Move to NEXT / Set Interval Time
        if (charIndex === -1) {
            clearInterval(eraseInterval);
            messageIndex = (messageIndex + 1) % messages.length; 
            setTimeout(typeMessage, 200);
        }
      }, 50);
    } // CALL FUNCTION
    typeMessage(); 
    //>>>
    //>>>
// SCRIPT FOR HEADER OBSERVER
    const navHeader = document.querySelector('.nav-header');
    const content = document.querySelector('.content');
    
    const options = {
      rootMargin: `-200px 0px 0px 0px`,
    };
    //
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navHeader.classList.remove('nav-header-scrolled');
        } else {
          navHeader.classList.add('nav-header-scrolled');
        }
      });
    }, options);
    observer.observe(content);
//
// SCRIPT FOR BODY OBSERVER
const fadeIns = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.7,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= appearOptions.threshold) {
      entry.target.style.opacity = .9;
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

fadeIns.forEach((fadein) => {
  appearOnScroll.observe(fadein);
});
//
// Script for TIME >>>>
function callTime(){ // name function
// GET time and DATE
    let NowDate=(new Date()).toDateString();
    let NowTime=(new Date()).toLocaleTimeString(); 
// insert to DOM
    document.getElementById('time').innerHTML=`${NowDate}-${NowTime}`;
  }
  // setInterval to CALL FUNCTION in MS
setInterval(function(){  callTime() }, 1000);
//
// END OF SCRIPT
