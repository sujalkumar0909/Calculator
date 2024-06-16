let string="";
let buttons=document.querySelectorAll("button");
let q=document.querySelector("input");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='=')
        {
            string=eval(string);
            q.value=string;
        }
        else if(e.target.innerHTML=='C')
            {
                q.value=null ;
            }
        else{
            string=string+e.target.innerHTML;
            q.value=string;
        }
})
})