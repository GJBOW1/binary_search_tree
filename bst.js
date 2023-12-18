// Trees To Do 1
// Let’s build a basic Binary Search Tree. These challenges start with the following reference definitions:

// BST: Add
// Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

// BST: Contains
// Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

// BST: Min
// Create a min() method on the BST class that returns the smallest value found in the BST.

// BST: Max
// Create a max() BST method that returns the largest value contained in the binary search tree.

class BSTNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }
    add(value) {
        if (this.root == null) {
            this.root = new BSTNode(value)
            return this
        }
        else {
            let pointer = this.root
            let placed = false
            while (!placed) {
                if (value < pointer.data) {
                    if (pointer.left == null) {
                        pointer.left = new BSTNode(value)
                        return this
                    }
                    else {
                        pointer = pointer.left
                    }
                }
                else {
                    if (pointer.right == null) {
                        pointer.right = new BSTNode(value)
                        return this
                    }
                    else {
                        pointer = pointer.right
                    }
                }
            }
        }
    }
    contains(data) {
        let pointer = this.root
        while (pointer) {
            if (data == pointer.data) {
                return true;
            }
            else if (data < pointer.data) {
                pointer = pointer.left
            }
            else {
                pointer = pointer.right
            }
        }
        return false;
    }
    min() {
        let pointer = this.root;
        while (pointer && pointer.left != null) {
            pointer = pointer.left
        }
        return pointer.data
    }
    max() {
        let pointer = this.root
        while (pointer && pointer.right != null) {
            pointer = pointer.right
        }
        return pointer.data
    }
}

var tree = new BST()
console.log(tree)
tree.add(8)
console.log(tree)
tree.add(12)
console.log(tree)
tree.add(4)
console.log(tree)
tree.add(16)
console.log(tree)
console.log(tree.contains(8))
console.log(tree.min())
console.log(tree.max())

