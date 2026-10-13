const envelopeWrap =
  document.getElementById("envelopeWrap");

const envelope =
  document.getElementById("envelope");

const openBtn =
  document.getElementById("openBtn");

const cover =
  document.getElementById("cover");

const invitation =
  document.getElementById("invitation");

const rsvpBtn =
  document.getElementById("rsvpBtn");

const modal =
  document.getElementById("rsvpModal");

const closeModal =
  document.getElementById("closeModal");

const yesBtn =
  document.getElementById("yesBtn");

const maybeBtn =
  document.getElementById("maybeBtn");

const response =
  document.getElementById("response");

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");

const musicText =
  document.getElementById("musicText");


let opened = false;

let musicPlaying = false;


/*
==================================================
CHANGE YOUR BIRTHDAY DATE HERE
==================================================

Format:

YYYY-MM-DDTHH:MM:SS+08:00

Example:

October 24, 2026 at 6:00 PM
*/

const eventDate =
  new Date("2026-11-13T18:00:00+08:00");


/*
==================================================
OPEN INVITATION
==================================================
*/

function openInvitation() {

  if (opened) return;

  opened = true;


  envelope.classList.add("open");


  openBtn.innerHTML =
    "Opening... <span>✦</span>";


  setTimeout(() => {

    cover.classList.add("hide");

  }, 900);


  setTimeout(() => {

    cover.style.display = "none";

    invitation.classList.add("show");


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, 1700);

}


envelopeWrap.addEventListener(
  "click",
  openInvitation
);


openBtn.addEventListener(
  "click",
  openInvitation
);


/*
==================================================
KEYBOARD SUPPORT
==================================================
*/

envelopeWrap.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      openInvitation();

    }

  }
);


/*
==================================================
COUNTDOWN
==================================================
*/

function updateCountdown() {

  const now =
    new Date();

  const difference =
    eventDate - now;


  if (difference <= 0) {

    document.getElementById("days")
      .textContent = "00";

    document.getElementById("hours")
      .textContent = "00";

    document.getElementById("minutes")
      .textContent = "00";

    document.getElementById("seconds")
      .textContent = "00";

    return;

  }


  const days =
    Math.floor(
      difference / 86400000
    );


  const hours =
    Math.floor(
      (difference % 86400000)
      / 3600000
    );


  const minutes =
    Math.floor(
      (difference % 3600000)
      / 60000
    );


  const seconds =
    Math.floor(
      (difference % 60000)
      / 1000
    );


  document.getElementById("days")
    .textContent =
    String(days).padStart(2, "0");


  document.getElementById("hours")
    .textContent =
    String(hours).padStart(2, "0");


  document.getElementById("minutes")
    .textContent =
    String(minutes).padStart(2, "0");


  document.getElementById("seconds")
    .textContent =
    String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
  updateCountdown,
  1000
);


/*
==================================================
RSVP MODAL
==================================================
*/

rsvpBtn.addEventListener(
  "click",
  function() {

    modal.classList.add("show");

  }
);


closeModal.addEventListener(
  "click",
  function() {

    modal.classList.remove("show");

  }
);


/*
==================================================
CLOSE MODAL WHEN CLICKING OUTSIDE
==================================================
*/

modal.addEventListener(
  "click",
  function(event) {

    if (
      event.target === modal
    ) {

      modal.classList.remove("show");

    }

  }
);


/*
==================================================
ESCAPE KEY
==================================================
*/

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape"
    ) {

      modal.classList.remove("show");

    }

  }
);


/*
==================================================
RSVP BUTTONS
==================================================
*/

yesBtn.addEventListener(
  "click",
  function() {

    response.textContent =
      "Yay! See you at the celebration! ♡";

  }
);


maybeBtn.addEventListener(
  "click",
  function() {

    response.textContent =
      "No worries! Just let me know soon. ♡";

  }
);


/*
==================================================
MUSIC
==================================================

Put your music here:

assets/music.mp3

The music cannot autoplay on most phones.
The guest has to tap the Music button first.
*/

musicBtn.addEventListener(
  "click",
  async function() {

    try {

      if (!musicPlaying) {

        await music.play();

        musicPlaying = true;

        musicText.textContent =
          "Pause";

        musicBtn.firstChild.textContent =
          "Ⅱ ";

      }

      else {

        music.pause();

        musicPlaying = false;

        musicText.textContent =
          "Music";

        musicBtn.firstChild.textContent =
          "♫ ";

      }

    }

    catch (error) {

      musicText.textContent =
        "Add music.mp3";

    }

  }
);