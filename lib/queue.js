
const Ticket = require('./ticket.js');


module.exports.Queue = class {

    constructor() {
	this.queue = [];
    }


    enqueue(uid) {
	this.queue.push(new Ticket({uid}));
    }

    dequeue() {
	queue.shift();
    }


    current = function() {
	let current = [];

	for(const ticket of this.queue)
	    current.push(tiket.show())

	return current;
    }
}
