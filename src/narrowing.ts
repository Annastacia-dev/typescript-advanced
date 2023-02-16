// Narrowing is the process of removing types from a union type
function detectType(val: number| string){
    if(typeof val === 'number'){
        return val + 3
    }
    return val.toUpperCase();
}

function detectTypeTwo(id: string | null){
    if(!id){
        return 'No ID';
    }
    return id.toLowerCase();
}

// The in operator
