function addTwoNumbers(l1, l2) {
  let head = new ListNode(),
    curr = head,
    carry = 0;
  while (l1 || l2) {
    const x = l1 !== null ? l1.val : 0;
    const y = l2 !== null ? l2.val : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
    curr = curr.next;
  }
  if (carry) curr.next = new ListNode(carry);
  return head.next;
}
