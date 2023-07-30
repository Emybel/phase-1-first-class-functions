function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    const fn = () => True;
    return fn;
}   

function returnsAnAnonymousFunction(){ 
    
    return (function (){})
}

