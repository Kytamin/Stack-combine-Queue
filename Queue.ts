export class Queue<T> {
    container:T[]=[]
    constructor() {
    }
    enQueue(item:T):void{
         this.container.push(item)
    }
    deQueue():T|undefined{
       return  this.container.shift()
    }
}