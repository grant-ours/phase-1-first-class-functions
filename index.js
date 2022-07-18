const receivesAFunction = (cb) => cb();


function returnsANamedFunction() {
    return function addition() {};
}

function returnsAnAnonymousFunction(){
    return function() {};
}