var mergeTrees = function (root1, root2) {
  const dfs = (t1, t2) => {
    if (!t1) return t2;
    if (!t2) return t1;
    t1.val += t2.val;
    t1.left = dfs(t1.left, t2.left);
    t1.right = dfs(t1.right, t2.right);
    return t1;
  };
  return dfs(root1, root2);
};
