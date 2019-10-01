function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < lists.length; i++) {
    let items = lists[i].children;
    for (let j = 0; j < items.length; j++) {
      items[j].innerHTML = parseInt(items[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}