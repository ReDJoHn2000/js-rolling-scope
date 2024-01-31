const key = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");

// A method by clicking the buttons on the screen

// key.forEach((el1) => {
//   el1.addEventListener("click", () => {
//     audio.forEach((el2) => {
//       if (el1.id == el2.id) {
//         el2.play();
//       } else {
//         return;
//       }
//     });
//   });
// });

// A method by pressing the keys of the keyboard

const keyPushed = window.addEventListener("keydown", (el) => {
  const keyId = el.keyCode;

  audio.forEach((el) => {
    if (el.id == keyId) {
      key.forEach((el) => {
        if (el.id == keyId) {
          el.classList.add("playing");
        } else {
          el.classList.remove("playing");
        }
      });

      el.currentTime = 0;
      el.play();
    } else {
      return;
    }
  });
});
