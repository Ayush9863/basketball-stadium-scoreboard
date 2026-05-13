let scoreEl=document.getElementById("score")
let calcEl=document.getElementById("calc")
let count=0
let sample=0
let entries=[]
let entry=[]
function single(){
    count+=1
    entries.push(count)
    scoreEl.textContent=count
}

function double(){
    count+=2
    entries.push(count)
    scoreEl.textContent=count
}

function triple(){
    count+=3
    entries.push(count)
    scoreEl.textContent=count
}
function undo(){
    if(entries.length===0) return

    entries.pop()
    
    if(entries.length===0){
        count=0
    }
    else{
        count=entries[entries.length-1]
    }
    scoreEl.textContent=count
}



function one(){
    sample+=1
    calcEl.textContent=sample
    entry.push(sample)
}

function two(){
    sample+=2
    calcEl.textContent=sample
    entry.push(sample)
}

function three(){
    sample+=3
    calcEl.textContent=sample
    entry.push(sample)
}

function reset(){
    if(entry.length===0) return

    entry.pop()
    
    if(entry.length===0){
        sample=0
    }
    else{
        sample=entry[entry.length-1]
    }
    calcEl.textContent=sample
}


function restart(){
    count=0
    sample=0
    entries = []  
    entry = []  
    scoreEl.textContent=0
    calcEl.textContent=0
}
    
