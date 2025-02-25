let fact=(a)=>{
    let m=1;
   for(let i=a;i>=1;i--){
    m=m*i;
   }
   return m;
}

function getFact(){
    var text=document.getElementById('name').value;
    // console.log(text);
    let factorial=fact(text);
    var output=document.getElementById('answer');
    output.value=factorial;
}

function lightFunction(){
    var element=document.getElementsByTagName('nav')
    element.setAttribute('style', 'color: white; margin: 10px;');
    document.body.setAttribute('style','background-color:white')
}
function darkFunction(){
    var element=document.getElementsByTagName('nav')
    element.setAttribute('style', 'color: black; margin: 10px;');
    document.body.setAttribute('style','background-color:white')
}