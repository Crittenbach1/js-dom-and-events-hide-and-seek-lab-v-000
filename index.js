const getFirstSelector = function(selector) {
   return document.querySelector(selector);
}

const nestedTarget = function() {
   return document.querySelector('#nested .target');
}

const deepestChild = function() {
  const nodes = document.querySelectorAll('#grand-node div');
  const mostDeep = nodes[nodes.length -1];
  return mostDeep;
}

const increaseRankBy = function(n) {
   const rankedLists = document.querySelectorAll('.ranked-list');
   const firstList = rankedLists[0];
   const secondList = rankedLists[1];
   let children1 = firstList.children;

   for (let i = 0, l = children1.length; i < l; i++) {
        let num = parseInt(children1[i].innerHTML);
        children1[i].innerHTML = num + n;
    }

    let children2 = secondList.children;

    for (let i = 0, l = children2.length; i < l; i++) {
         let num = parseInt(children2[i].innerHTML);
         children2[i].innerHTML = num + n;
     };

}
