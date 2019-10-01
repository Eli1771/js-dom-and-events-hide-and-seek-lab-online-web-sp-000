function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');
  for (const list in lists) {
    let items = list.children;
    for (const item in items) {
      item.innerHTML = item.innerHTML.parseInt() + 1;
    }
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}