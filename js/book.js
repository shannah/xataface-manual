function createFragment(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

document.addEventListener('DOMContentLoaded', function() {
   var toc = document.getElementById('toc');
   toc.setAttribute('id', 'site-navigation');
   toc.classList.remove('toc2');
   toc.classList.add('site-navigation');
   var body = document.querySelector('body');
   body.classList.remove('toc2');
   
   toc.insertBefore(createFragment('<input type="checkbox" id="toggle"/><label for="toggle">Table of Contents</label>'), toc.childNodes[0]);
   
   
});