import gsap from "gsap";

import { SplitText } from "gsap/SplitText.js";
gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", function () {
  const profileImagesContainer = document.querySelector(".profile-images");
  const profileImages = document.querySelectorAll(".profile-images .img");

  const nameElement = document.querySelectorAll(".profile-names .name");

  const nameHeading = document.querySelectorAll(".profile-names .name h1");

  nameHeading.forEach((heading) => {
    const split = new SplitText(heading, { type: "chars" });

    split.chars.forEach((char) => {
      char.classList.add("letter");
    });
  });

  const deflautLetters = nameElement[0].querySelectorAll(".letter");

  gsap.to(deflautLetters, {
    y: "100%",
  });

  if (window.innerWidth >= 900) {
    profileImages.forEach((img, index) => {
      const correspondingName = nameElement[index + 1];

      const letters = correspondingName.querySelectorAll(".letter");

      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          width: 140,
          height: 140,
          duration: 0.5,
          ease: "power4.out",
        });

        gsap.to(letters, {
          y: "-100%",
          ease: "power4.out",
          duration: 0.75,
          stagger: {
            each: 0.025,
            from: "center",
          },
        });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          width: 70,
          height: 70,
          duration: 0.5,
          ease: "power4.out",
        });

        gsap.to(letters, {
          y: "0%",
          ease: "power4.out",
          duration: 0.75,
          stagger: {
            each: 0.025,
            from: "center",
          },
        });
      });
    });

    profileImagesContainer.addEventListener("mouseenter", () => {
      gsap.to(deflautLetters, {
        y: "0%",
        ease: "power4.out",
        duration: 0.75,
        stagger: {
          each: 0.025,
          from: "center",
        },
      });
    });

    profileImagesContainer.addEventListener("mouseleave", () => {
      gsap.to(deflautLetters, {
        y: "100%",
        ease: "power4.out",
        duration: 0.75,
        stagger: {
          each: 0.025,
          from: "center",
        },
      });
    });
  }
});
