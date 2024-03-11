const countValue=document.querySelector('#counter');

const increment= () =>{
    // get the value from UI
    let value=parseInt(countValue.innerText);
    // update the value
    value=value+1;
    // set the value on UI
    countValue.innerText=value;
}

function decrement(){
    // get the value from UI
    let value=parseInt(countValue.innerText);
    // update the value
    value=value-1;
    // set the value on UI
    countValue.innerText=value;
}