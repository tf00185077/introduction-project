<template>
  <div class="bg"></div>
</template>
<style scoped lang="scss">
.bg {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/assets/gif/landing-page.gif");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  opacity: 1;
  animation: opacityAnime 5s infinite linear, scale 20s infinite linear;
  overflow: hidden;
}
@keyframes opacityAnime {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scale {
  0% {
    background-size: 50%;
  }
  25% {
    background-size: 70%;
  }
  50% {
    background-size: 50%;
  }
  75% {
    background-size: 30%;
  }
  100% {
    background-size: 50%;
  }
}
</style>
