function getImgData(chartContainer)
{
  var chartArea = chartContainer.children[0];
  var svg = chartArea.innerHTML.substring(chartArea.innerHTML.indexOf("<svg"), chartArea.innerHTML.indexOf("</svg>") + 6); 
  
  var doc = chartContainer.ownerDocument;
  var canvas = doc.createElement('canvas');


  canvas.setAttribute('style', 'position: absolute; ' + '');
  doc.body.appendChild(canvas);
  canvg(canvas, svg);
  var imgData = canvas.toDataURL("image/png");
  canvas.parentNode.removeChild(canvas);
  return imgData; 
}

function saveAsImg(chartContainer) {
  var imgData = getImgData(chartContainer);
  
  // Replacing the mime-type will force the browser to trigger a download
  // rather than displaying the image in the browser window.
  window.location = imgData.replace("image/png", "image/octet-stream");
}

function toImg(chartContainer, imgContainer) { 
  var doc = chartContainer.ownerDocument;
  var img = doc.createElement('img');
  img.src = getImgData(chartContainer);
  
  while (imgContainer.firstChild) {
    imgContainer.removeChild(imgContainer.firstChild);
  }
  imgContainer.appendChild(img);
}
