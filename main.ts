import {Queue} from "./Queue";
import {Stack} from "./Stack";




let string="able was I ere I saw elba"
let arr=string.split('')
let queue= new Queue()
let stack = new Stack()
function check(string) {
    for (let i = 0; i < string.length; i++) {
        queue.enQueue(arr[i])
        stack.push(arr[i])
    }
    for (let i = 0; i < string.length; i++) {
        if(queue.deQueue()===stack.pop()){
            return true
        }
    }return false
}


console.log(check(string))