const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new ListNode(element);
    }

    this.length++;
  }

  dequeue() {
    const current = this.head;
    this.head = current.next;
    current.next = null;
    return current.value;
  }
}

module.exports = Queue;
