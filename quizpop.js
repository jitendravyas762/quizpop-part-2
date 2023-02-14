let arr=document.querySelector(".main2 .main3 a")
let user=document.querySelector(".user")
let slide=document.querySelector(".main")
let ram=document.querySelector(".ram")
arr.onclick=(e)=>{
    e.preventDefault()
    if(user.innerHTML===''){
    alert("please create a user")
    }
    else{
        slide.style.display="none"
        ram.style.display='block'
    }
}
let anchor=document.querySelector(".main1 a")
let input=document.querySelector("form")
anchor.onclick=(e)=>{
    e.preventDefault()
    input.style.display= "block";
}
let anc=document.querySelector(".anc")
let inpu=document.querySelector(".inpu")
let inc=document.querySelector(".gaurav")
anc.onclick=(e)=>{
    e.preventDefault()
    if(inpu.value!==""){
    alert("user created successfully !")
    }
    else{
        alert("user created first")
    }
    user.style.display="block"
    input.style.display = "none";
    inc.style.display="none"
    user.innerHTML = inpu.value
    
}
 let now=document.querySelector(".music ul li:last-of-type a")
 let cod=document.querySelector(".coding")

    now.onclick=(e)=>{
        e.preventDefault()
       cod.style.display="block"
       ram.style.display='none'
    }

    let radio=document.querySelector(".radio .radio1")
    let php=document.querySelector(".php")
    let php1=document.querySelector(".php1")
    let php2=document.querySelector(".php2")
    let php3=document.querySelector(".php3")
    let radi=document.querySelector(".radio")

    
    radio.onclick=(e)=>{
        e.preventDefault()
        php1.style.display="none"
        php2.style.display="block"
        radi.style.display='none'
        php3.style.display="block"


    }
    
     
