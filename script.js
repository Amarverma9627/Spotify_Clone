function click2() {
    window.location.href = 'login.html';
}
function click1() {
    window.location.href = 'signup.html';
}


function show(){

    // ....for eye ..
    let demo=document.getElementById('close');
    demo.setAttribute('class','show');
    // let open2=demo.getAttribute('class')
    

    let  demo2=document.getElementById('open');
    demo2.setAttribute('class','hide');

    // ... ...for password hide.....
    let input2 = document.getElementById('inputpass');
    let open=demo.getAttribute('class')
    if(open=='show'){
        input2.setAttribute('type','text')
    }
    

}

function hide(){

    // ....for eye .....

    let  demo2=document.getElementById('open');
    demo2.setAttribute('class','show');


    let demo=document.getElementById('close');
    demo.setAttribute('class','hide');

    // ...for passs show...
    let input2 = document.getElementById('inputpass');
    let open=demo.getAttribute('class')
    if(open=='hide'){
        input2.setAttribute('type','password')
    }
   
}


// ...........for Cross Icon...... ...

let demo=document.getElementById('place');
demo.addEventListener('input',function() {
   let demo=document.getElementById('place').value;
   let get=document.getElementById('cross')
   let demo2=get.getAttribute('class')
  
   console.log(demo)
     if(demo2=='hide' && demo.length>'' ){
       get.setAttribute('class','show')
   }
  if(demo2=='show' && demo.length==''){
   get.setAttribute('class','hide')
  }
})

function cross() {
let demo=document.getElementById('place').value='';
let get=document.getElementById('cross')
let demo2=get.getAttribute('class')
if(demo2=='show' && demo.length==''){
   get.setAttribute('class','hide')
  }
}