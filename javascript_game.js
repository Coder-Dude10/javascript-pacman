let x = 0;
let y = 10;
let dir = 2;
let url = 'https://i.ibb.co/pvP2SJD/right.gif';
let sound = new Audio("https://s7.gmpdn.com/get/2650335/lnmll1emA4cwRParmGKKI0gZDndbVkCMGa4WVNJA/mp3");

document.getElementById("textId").addEventListener("keydown", myFunction);

function myFunction() {

  switch (event.key) {
    case "ArrowDown":
      console.log("ArrowDown");
      url = 'https://i.ibb.co/GvKF0sg/down.gif';
      dir = 4;
      break;
    case "ArrowUp":
      console.log("ArrowUp");
      url = 'https://i.ibb.co/ChWyZ5Q/up.gif';
      dir = 3;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      url = 'https://i.ibb.co/K7P7nBY/left.gif';
      dir = 1;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      url = 'https://i.ibb.co/pvP2SJD/right.gif';
      dir = 2;
      break;
    default:
      console.log(event.key, event.keyCode);
      dir = 2;
      return; 
  }

  event.preventDefault();
}

    let i = 1;

    function showImage() {
        if (dir < 2) {
          x--;
          console.log("Left");
        } else if (dir < 3) {
          x++;
          console.log("Right");
        } else if (dir < 4) {
          y--;
          console.log("Up");
        } else if (dir < 5) {
          y++;
          console.log("Down");
        }
        

        l = 0;
        t = 19;

        margin = 20;
        
        
        offX = parseInt(x * 5);
        offY = parseInt(y * 5);
        
        if(offX > margin) offX -= margin;
        if(offY > margin) offY -= margin;

        l += offX;
        t += offY;

        var newImage = document.createElement("img");
        newImage.setAttribute('src', url);
        newImage.setAttribute('style', 'position: absolute;');
        newImage.setAttribute('id', 'img');
        newImage.style.left = l + "px";
        newImage.style.top = t + "px";
        document.body.appendChild(newImage);

        setTimeout(() => {  showImage(); }, 10);
    }