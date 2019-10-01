function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');
  for (let i; k = lists.length; i++) {
    let items = lists[i].children;
    for (let j; l = items.length; j++) {
      items[j].innerHTML = (item[j].innerHTML.parseInt()) + n;
    }
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}