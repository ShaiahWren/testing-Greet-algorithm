const greet = (name) => {
    let msg = `Hello, ${name}.`

    if (name === undefined) {
        
        return 'Hello there.';
    } else if (Array.isArray(name)) {
        my_str = name.join(', ');
        return greet(my_str);
    }
    else if (name === name.toUpperCase()) {
        return msg.toUpperCase();
    } 
    
    else {
        return msg;
    }
    
}

// console.log(greet(['Jose', 'Pep']))


module.exports = greet;