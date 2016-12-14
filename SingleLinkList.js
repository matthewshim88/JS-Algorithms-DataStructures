//****Single Linked List constructors

var Node = function(data, next){
  this.data = data;
  this.next = null;
}

var SLinkedList = function(){
  this.head = new Node(null, null);
  this.length = 0;
}

//**** SLL functions

Node.prototype.getData = function(){
  console.log(this.data); // or return
}

// adds to back (tail)
SLinkedList.prototype.append = function(data){
  if(!this.head){
    this.head = new Node(data, null);
  }else{
    var current = this.head;
    while(current.next != null){
      current = current.next;
    }
    var newNode = new Node(data, null);
    current.next = newNode;
  }
  this.length += 1;
}

// adds to front (head)
SLinkedList.prototype.prepend = function(data){
  if(!this.head){
    this.head = new Node(data, null);
  }else{
    var newNode = new Node(data, this.head);
    this.head = newNode;
  }
  this.length += 1;
}

SLinkedList.prototype.getHead = function(){
  return this.head;
}

SLinkedList.prototype.findAt = function(K){
  if(K < this.length){
    var current = this.head;
    for(var i =0; i < K; i++){
      current = current.next;
    }
    return current
  }else{
    return false; //Kth node is not in Range of the List
  }
}

SLinkedList.prototype.remove = function(data){
  if(this.head.data == data){
    var current = this.head;
    current = current.next;
    this.head = current;
    return true;
  }else{
    var current = this.head;
    var runner = this.head;
    var counter = 0;

    while(current.data != data){
      if(counter < this.length){
        if(counter > 0){
          runner = runner.next;
        }
        current = current.next;
        counter +=1;
      }else{
        return false;
      }
    }
    // if element was found at the end
    if(counter == this.length - 1){
      runner.next = null;
      delete current;
      return true;
    }else{ //somewhere between head/tail
      current = current.next;
      runner.next = current;
      return true;
    }
  }
}
