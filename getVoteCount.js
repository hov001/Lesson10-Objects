'strict mode';
/*Given an object containing counts of both upvotes and downvotes, return what vote count should be
displayed. This is calculated by subtracting the number of downvotes from upvotes.*/

function getVoteCount(obj) {
  let { upvotes, downvotes } = obj;
  return upvotes - downvotes;
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));
