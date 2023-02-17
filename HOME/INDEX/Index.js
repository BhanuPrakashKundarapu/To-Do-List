
function clock(){
    var time=document.querySelector('#time');
    var Clock=document.querySelector('#watch');

    var daylist=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    // date-calender
    var Tdy=new Date();
    var Dt=Tdy.getDate();
    var dy=Tdy.getDay();
    var mnt=Tdy.getMonth();
    var yr=Tdy.getFullYear();


    // time
    var hrs=Tdy.getHours();
    var mns=Tdy.getMinutes();
    var mdn=(hrs>12)? "PM":"AM";
    var hr=(hrs>12)? hrs-12:hrs;
    if(hr<10){
        var op="0"+hr;
        Clock.innerHTML=op+":"+mns+" "+mdn;
    }else{
        var zp=hr;
        Clock.innerHTML=zp+":"+mns+" "+mdn;
    }
    time.innerHTML=daylist[dy]+" : "+Dt+"-"+(mnt+1)+"-"+yr;
}
// clock();
setInterval(clock ,1000);


// var TN=document.querySelector('#taskNote')
var TB=document.querySelector('#TaskBttn');
TB.addEventListener('click',AddTask);


let TN=document.querySelector('#taskNote');

function AddTask(){

        let TT=document.querySelector('#TaskText').value;
        // try{
        //     if(TT.trim(' ')) throw 'Is Empty';
        //     if(isNaN(TT)) throw 'Is Not A Number';
        //     x=String(TT>2);
        //     return 0;
        // }
        // catch(err){
        //     window.alert('Input '+err);
        // }
        if(TT.length==0){
            window.alert("Please Enter Input To Make A Note")
        }
        else if(TT.length<=2){
            window.alert("Please enter more than 2 character")
        }else if(TT===' '){
            window.alert('Your input is Empty')
        }
        
        else{
            TN.innerHTML+=
        `<center>
             <div id="TaskBar">
                 <img src="/SVG/icons8-checkmark-48.png" alt="CheckMark" id="CheckMark">
                 <span id="TaskIn">${TT}</span>
                 <img src="/SVG/icons8-trash-48.png" alt="Delet"  id="Delet" onclick='this.parentNode.remove()'>
             </div>
         </center>`;
         }
        }
        var sb=document.querySelector('#side_bar');
        var x=document.querySelector('.fa-x');
        var y=document.querySelector('.bi');
        y.addEventListener('click',yO)
        x.addEventListener('click',xC);

        function yO(){
            sb.style.display='block';
        }
        function xC(){
            sb.style.display='none';
        }

    


    




