"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var Stack_1 = require("./Stack");
var string = "able was I ere I saw elb";
var arr = string.split('');
var queue = new Queue_1.Queue();
var stack = new Stack_1.Stack();
function check(string) {
    for (var i = 0; i < string.length; i++) {
        queue.enQueue(arr[i]);
        stack.push(arr[i]);
    }
    for (var i = 0; i < string.length; i++) {
        if (queue.deQueue() === stack.pop()) {
            return true;
        }
    }
    return false;
}
console.log(check(string));
