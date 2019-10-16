const isValidBST = function(root, lowest = -Infinity, highest = Infinity) {
    if(!root || typeof root.val !== 'number') return true
    if(root.val <= lowest || root.val >= highest) return false
    if(root.left && root.left.val >= root.val) return false
    if(root.right && root.right.val <= root.val) return false
    return isValidBST(root.left,lowest,root.val) && isValidBST(root.right,root.val,highest)
};
