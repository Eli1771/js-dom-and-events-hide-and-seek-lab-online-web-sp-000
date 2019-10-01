function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');
  for (const i; i < lists.length; i++) {
    let items = list.children;
    for (const j; j < items.length; j++) {
      items[j].innerHTML = item.innerHTML.parseInt() + n;
    }
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}