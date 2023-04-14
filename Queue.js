"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.enQueue = function (item) {
        this.container.push(item);
    };
    Queue.prototype.deQueue = function () {
        return this.container.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
