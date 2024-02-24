


let getform=document.forms

let getchatbox1=document.getElementById('chatbox1')

let send1=document.getElementById('sendone')

let getchatbox2=document.getElementById('chatbox2')

let send2=document.getElementById('sendtwo')

let getchatbox=document.getElementsByClassName('chatbox')

// User one chat functionality

send1.addEventListener('click',(e)=>{

    // Get the current date and time in IST
var currentDate = new Date();
var options = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric' };
var formattedTime = currentDate.toLocaleTimeString('en-US', options);

    e.preventDefault()

    let getdiv=document.createElement('div')
    
    
    let getmessage=e.target.form[0].value
if(getmessage!=""){
    console.log(getmessage)
    // let name=document.createElement('b')
    // name.innerText="You:"
    let message=document.createElement('p')
    message.innerText=getmessage
    message.style.background="green"
    message.style.color="white"

    //time
    let gettime=document.createElement('span')
    gettime.innerText=formattedTime
    gettime.style.display="block"
    gettime.style.fontSize="10px"
    gettime.style.color="white"
   
   


    // getchatbox1.append(name)
    // getdiv.append(geticon)
    message.scrollTop=10;
    getdiv.append(message)
    getdiv.append(gettime)


    getchatbox1.append(getdiv)
    getdiv.style.textAlign="right"

    getchatbox[0].scrollTop = getchatbox[0].scrollHeight;  //Scrolling to top


    setTimeout(()=>{
    // let name=document.createElement('b')
    // name.innerText="Goku:"
    let getdiv=document.createElement('div')

    let message=document.createElement('p')
    message.innerText=getmessage
        // getchatbox2.append(name)
        message.style.background="white"
        message.style.color="black"
        //
        //time
    let gettime=document.createElement('span')
    gettime.innerText=formattedTime
    gettime.style.display="block"
    gettime.style.fontSize="10px"
    gettime.style.color="white"

        getdiv.append(message)
        getdiv.append(gettime)
        getchatbox2.append(getdiv)
        getdiv.style.textAlign="left"

        getchatbox[1].scrollTop = getchatbox[1].scrollHeight; //Scrolling to top



    },1000)
    e.target.form[0].value=[]
}
else{
    alert("enter something ")
}
    


})


// user two chat functionality

send2.addEventListener('click',(e)=>{

    // Get the current date and time in IST
var currentDate = new Date();
var options = { timeZone: 'Asia/Kolkata', hour12: true, hour: 'numeric', minute: 'numeric' };
var formattedTime = currentDate.toLocaleTimeString('en-US', options);


    e.preventDefault()
    
    let getmessage=e.target.form[0].value

    if(getmessage!=""){

    let getdiv=document.createElement('div')


   
    let message=document.createElement('p')
    message.innerText=getmessage+" "
    message.style.background="green"
    message.style.color="white"
   
  
//time
    let gettime=document.createElement('span')
    gettime.innerText=formattedTime
    gettime.style.display="block"
    gettime.style.fontSize="10px"
    gettime.style.color="white"


    getdiv.append(message)
    getdiv.append(gettime)
    
    
    getchatbox2.append(getdiv)
    getdiv.style.textAlign="right"

   
    getchatbox[1].scrollTop = getchatbox[1].scrollHeight; //Scrolling to top


    setTimeout(()=>{
 
    let getdiv=document.createElement('div')

    let message=document.createElement('p')
    message.innerText=getmessage
    //time
    let gettime=document.createElement('span')
    gettime.innerText=formattedTime
    gettime.style.display="block"
    gettime.style.fontSize="10px"
    gettime.style.color="white"

        getdiv.append(message)
        getdiv.append(gettime)
        getchatbox1.append(getdiv)
        getdiv.style.textAlign="left"

    message.style.background="white"
        message.style.color="black"

        getchatbox[0].scrollTop = getchatbox[0].scrollHeight;   //Scrolling to top

    },1000)
    e.target.form[0].value=[]
    }
    else{
        alert("please enter some thing")
    }
   
   

})