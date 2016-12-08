// Constructors *** for Reference****

// var Node = function(data, next){
//   this.data = data;
//   this.next = null;
// }
//
// var SLinkedList = function(){
//   this.head = new Node(null, null);
//   this.length = 0;
// }
//**********************
//**** P R O B L E M S **********
//**********************

// REVERSE A SLinkedList

function ReverseSLL(SLL){
  if(!SLL.head || !SLL.head.next){
    return SLL;
  }
  var nodes = [];
  current = SLL.head;

  while(current){
    nodes.push(current);
    current = current.next;
  }

  var reversedSLL = new SLL();
  reversedSLL.head = nodes.pop();
  current = reversedSLL.head;

  var node = nodes.pop();

  //ensure next of new node will be null
  // or the last node will retain all next
  while(node){
    node.next = null;
    current.next = node;
    current = current.next;
    node = nodes.pop();
  }
  return  reversedSLL; 
}
