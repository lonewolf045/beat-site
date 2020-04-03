let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/th.png') {
      myImage.setAttribute ('src','images/download.png');
    } else {
      myImage.setAttribute ('src','images/th.png');
    }
}