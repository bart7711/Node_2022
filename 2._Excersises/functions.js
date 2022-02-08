function doingSomething(anyFunctionRefrence, name){
    anyFunctionRefrence(name);
}

const running = (name) =>console.log(`${name} is running`);

const drinking = (name) =>console.log(`${name} is drinking`);

const falling = (name) =>console.log(`${name} is falling`);

doingSomething(drinking, "Bart");
doingSomething(falling, "Bart");