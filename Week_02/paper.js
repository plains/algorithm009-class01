class BinaryHeap {
    constructor(capacity) {
        this.heap = new Array(capacity - 1)
        this.heapSize = 0
        this.d = 2
    }

    /**
     * @param v {object} {}
     */
    insert(name, val) {
        let ele = {
            name,
            val
        }
        this.heap.push(ele)
        this.heapSize++
        this.heapifyUp(this.heapSize - 1)
    }

    parent(i) {
        return (i - 1) / this.d;
    }

    kthChild(i, k) {
        return this.d * i + k;
    }

    isEmpty() {
        return this.heapSize == 0;
    }

    isFull() {
        return this.heapSize == this.heap.length;
    }

    heapifyUp(i) {
        let insertValue = {
            ...this.heap[i]
        };
        while (i > 0 && insertValue > heap[this.parent(i)]) {
            this.heap[i] = heap[this.parent(i)];
            i = this.parent(i);
        }
        this.heap[i] = insertValue;
    }

    delete(x) {
        if (this.isEmpty()) {
            throw new Error("Heap is empty, No element to delete");
        }
        let maxElement = this.heap[x];
        this.heap[x] = this.heap[this.heapSize - 1];
        this.heapSize--;
        this.heapifyDown(x);
        return maxElement;
    }

    maxChild(i) {
        let leftChild = this.kthChild(i, 1);
        let rightChild = this.kthChild(i, 2);
        return this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
    }

    heapifyDown(i) {
        let child;
        let temp = {
            ...this.heap[i]
        };
        while (this.kthChild(i, 1) < this.heapSize) {
            child = this.maxChild(i);
            if (temp >= this.heap[child]) {
                break;
            }
            this.heap[i] = this.heap[child];
            i = child;
        }
        this.heap[i] = temp;
    }

    findMax() {
        if (this.isEmpty())
            throw new Error("Heap is empty.");
        return this.heap[0];
    }

    printHeap() {
        console.log("nHeap = ");
        for (let i = 0; i < this.heapSize; i++)
            console.log(heap[i] + " ");
    }

    test(args) {
        let maxHeap = new BinaryHeap(10);
        maxHeap.insert({
            name: 10,
            val: 10
        });
        maxHeap.insert({
            name: 4,
            val: 4
        });
        maxHeap.insert({
            name: 9,
            val: 9
        });
        maxHeap.insert({
            name: 1,
            val: 1
        });
        maxHeap.insert({
            name: 7,
            val: 7
        });
        maxHeap.insert({
            name: 5,
            val: 5
        });
        maxHeap.insert({
            name: 3,
            val: 3
        });

        maxHeap.printHeap();
        maxHeap.delete(5);
        maxHeap.printHeap();
        maxHeap.delete(2);
        maxHeap.printHeap();
    }
}