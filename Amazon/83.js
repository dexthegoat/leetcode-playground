let deleteDuplicates = (head) => {
  let start = head;
  let set = new Set();
  let prev;
  while (head) {
    if (set.has(head.val)) {
      prev.next = head.next;
      head = head.next;
    } else {
      set.add(head.val);
      prev = head;
      head = head.next;
    }
  }
  return start;
};
