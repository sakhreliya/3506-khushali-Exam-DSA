let stack = [];
let size = 4;

function print(stack) {
    if (stack.length === 0) {
        console.log("stack is underflow");
    } else {
        console.log(stack);
    }
}

function add(stack, element) {
    if (stack.length >= size) {
        console.log("stack is overflow");
    } else {
        stack.push(element);
    }
}
function remove(stack) {
    if (stack.length === 0) {
        console.log("stack is empty");
    } else {
        return stack.pop();
    }
}

function peek(stack) {
    if (stack.length === 0) {
        console.log("stack is empty");
    } else {
        console.log("peek element:", stack[stack.length - 2]);
    }
}

add(stack, 45);
add(stack, 56);
add(stack, 33);
add(stack, 59);
peek(stack);

remove(stack);

print(stack);
