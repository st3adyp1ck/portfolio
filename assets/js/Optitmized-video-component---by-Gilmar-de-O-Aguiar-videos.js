document.addEventListener("DOMContentLoaded", function () {
  const clickableVideo = document.querySelector(".clickable-video");
  const thumbnail = clickableVideo.querySelector(".thumbnail");
  const customVideo = clickableVideo.querySelector("#custom-video");

  customVideo.style.display = "none"; // Inicialmente, oculte o vídeo

  clickableVideo.addEventListener("click", function () {
    if (!clickableVideo.classList.contains("playing")) {
      clickableVideo.classList.add("playing");
      customVideo.style.display = "block";
      customVideo.play(); // Inicie a reprodução do vídeo
      thumbnail.style.display = "none";
    }
  });
});
