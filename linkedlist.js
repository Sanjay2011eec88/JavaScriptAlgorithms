function LinkedList(){
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev){
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
	var newNode = new Node(value, this.head, null);

	//if head is present then the previous node will refer to new node
	if(this.head) this.head.prev = newNode;
	//if no node is present then tail will refer to newNode
	else this.tail = newNode;
	//as we are adding node to the head, the head will point the newNode default.
	this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
	var newNode = new Node(value, null, this.tail);
	if(this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
};

LinkedList.prototype.removeHead = function(value){
	//if head is not there return null
	if(!this.head) return null;

	//else make next node the current head
	var val = this.head.value;
	this.head = this.head.next;
	//Two  case can  occur after this
	//If head is null than make tail null
	//else make prev null
	if(this.head) this.head.prev = null;
	else this.tail = null;
	return val;
};

LinkedList.prototype.removeTail = function() {
	if (!this.tail) return null;
	var val = this.tail.value;
	this.tail = this.tail.prev;
	if (this.tail) this.tail.next = null;
	else this.head = null;
	return val;
};
  
LinkedList.prototype.search = function(searchValue) {
	var currentNode = this.head;
	while (currentNode) {
	  if (currentNode.value === searchValue) return currentNode.value;
	  currentNode = currentNode.next;
	} 
	return null;
};

LinkedList.prototype.indexOf = function(value) {
	var indexes = [];
	var currentIndex = 0;
	var currentNode = this.head;
	while(currentNode) {
	  if (currentNode.value === value) indexes.push(currentIndex);
	  currentNode = currentNode.next;
	  currentIndex++;
	}
	return indexes;
  };

var ll = new LinkedList();
ll.addToHead(10);
ll.addToHead('hello');
ll.addToHead(343);
ll.addToHead('world');
ll.addToHead(12);
console.log(ll.indexOf('hello'));