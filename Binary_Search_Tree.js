//Binary Search Tree **Constructors***

function Node(val){
		this.val = val;
		this.right || null;
		this.left || null;
	}

function BST (){
	this.root;
}

//Methods

	BST.prototype.add = function(val){
		if(!this.root){
			this.root = new Node(val);
			return this;
		}
		var runner = this.root;
		while(runner){
			if(val >= runner.val){
				if(runner.right){
					runner = runner.right;
				}else{
					runner.right = new Node(val);
					return this;
				}
			}
			else{
				if(runner.left){
					runner = runner.left
				}else{
					runner.left = new Node(val);
					return this;
				}
			}
		}
	}

	BST.prototype.find = function(val){
		if(!this.root){
			return "No numbers in BST";
		}
		var runner = this.root;
		while(runner){
			console.log(val, runner.val);
			if(runner.val == val){
				return runner;
			}
			if(val > runner.val){

				runner = runner.right

			}else{

				runner = runner.left;
			}
		}
		return false;
	}






	var BST = new BST();

	BST.add(5).add(2).add(19).add(35).add(24).add(4);
	console.log(BST);

	console.log(BST.find(4));
	console.log(BST.)
