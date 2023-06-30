function display_random_image() {
  var theImages = [
    "image galery/1.jpg",
    "image galery/2.jpg",
    "image galery/3.jpg",
    "image galery/4.jpg",
    "image galery/5.jpg",
    "image galery/6.jpg",
    "image galery/7.jpg",
    "image galery/8.jpg",
    "image galery/9.jpg",
    "image galery/10.jpg",
    "image galery/11.jpg",
    "image galery/12.jpg",
    "image galery/13.jpg",
    "image galery/14.jpg",
    "image galery/15.jpg",
    "image galery/16.jpg",
    "image galery/17.jpg",
    "image galery/18.jpg",
    "image galery/19.jpg",
    "image galery/20.jpg",
    "image galery/21.jpg",
    "image galery/22.jpg",
    "image galery/23.jpg",
    "image galery/24.jpg",
  ];

  var preBuffer = [];
  for (var i = 0, j = theImages.length; i < j; i++) {
    var image = new Image();
    image.src = theImages[i];
    preBuffer.push(image);
  }

  // create random image number
  function getRandomInt(min, max) {
    //  return Math.floor(Math.random() * (max - min + 1)) + min;

    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
  }

  // 0 is first image,   preBuffer.length - 1) is  last image

  var newImage = getRandomInt(0, preBuffer.length - 1);

  // remove the previous images
  var images = document.getElementsByTagName("img");
  var l = images.length;
  for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
  }
  // display the image
  var imgElement = document.createElement("img");
  imgElement.src = newImage.src;
  document.body.appendChild(imgElement);
}
