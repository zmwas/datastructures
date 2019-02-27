class Node(data) {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree() {
    constructor() {
        this.root = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        //check if the root is null and make new Node root if it is null
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }

    }
    insertNode(node , newNode) {

        //check if the nodes data is higher or lower
        //if there isn't a value  the left node is the new node
        if(newNode.data<node.data) {
            if(!node.left) {
                node.left= newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root,data);
    }
    findMinimumNode(node) {
        if (node.left === null) {
            return node;
        }
        else {
            return this.findMinimumNode(node.left);
        }
    }
    removeNode(node,data) {
        if(!node) {
            return null;
        }

        if(data<node.data) {
            node.left = this.removeNode(node.left,data)
            return node;
        } else if(data < node.data) {
            node.right = this.removeNode(node.right, data)
            return node;
        } else {
            if(!node.left && !node.right) {
                node = null;
                return node;
            }

            if(!node.left) {
                node = node.right;
                return node;
            }
            if(!node.right) {
                node = node.left;
                return node;
            }
        }

    ​let​ min = ​this​.findMinNode(​node​.right);
​    node​.data = ​min​.data;
​    node​.right = this.removeNode(​node​.right, ​min​.data);
 ​   return​ node;
    }

    //flatten the tree back into its original sequence
    inOrderTraversing() {
        if(node) {
            this.inOrderTraversing(node.left)
      ​console​.log(​node​.data);
            this.inOrderTraversing(node.right)

        }
    }

    postOrderTraversing() {
        if (node !== null) {
            this.inOrderTraversing(node.left);
            this.inOrderTraversing(node.right);
      ​console​.log(​node​.data);
        }
    }

    preOrderTraversing() {
        if (node !== null) {
        ​console​.log(​node​.data);
            this.inOrderTraversing(node.left);
            this.inOrderTraversing(node.right);
        }
    }
}