// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: " ISP stands for?",
        answer: "Internet Service Provider",
        options: [
            "Internet Survey Period",
            "Integrated Service Provider",
            "Internet Security Protocol",
            "Internet Service Provider"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"
        ]
    },
    {
        numb: 6,
        question: "What is the full form of CU?",
        answer: "Control Unit",
        options: [
            "Compound Unit",
            "Communication Unit",
            "Computer Unit",
            "Control Unit"
        ]
    },
    {
        numb: 7,
        question: " What is the full form of MU?",
        answer: "Memory Unit",
        options: [
            "Management Unit",
            "Masked Unit",
            "Main Unit",
            "Memory Unit"
        ]
    },
    {
        numb: 8,
        question: "What is the full form of EEPROM?",
        answer: "None of these",
        options: [
            "Electrically Erasable Read Access Memory",
            "Electrically Erasable Read Only Memory",
            "Ethical Electrically Read Access Memory",
            "None of these"
        ]
    },
    {
        numb: 9,
        question: "One Nibble has?",
        answer: "4 Bits",
        options: [
            "2 Bits",
            "4 Bits",
            "8 Bits",
            "16 Bits"
        ]
    },
    {
        numb: 10,
        question: " What does an Operating System do?",
        answer: "All of the above",
        options: [
            "Memory Management",
            "File Management",
            "Application Management",
            "All of the above"
        ]
    },

];


// ================to disable right click====================
document.html.addEventListener('contextmenu',(e)=>{
    alert("You were not allowed to right click on this page")
    e.preventDefault();
})

// for visiblity
let warning = 3
document.addEventListener("visibilitychange", (event) => {
  if(warning==0 && (a<40&&a>0) && document.visibilityState == "visible"){ 
      
    alert("You crossed the limit, and your test submit automatically. ")
    check()
}
 else if (document.visibilityState == "visible" && (a<40&&a>0) && warning!=0) {
    alert("You have CHANGE the Tab. Now you have only "+ warning + " chance left")
  }else  if((a<40&&a>0)) {
    warning--
    console.log(warning);
  }
});
