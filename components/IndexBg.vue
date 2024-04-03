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
  animation: opacityAnime 3s infinite;
}
@keyframes opacityAnime {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>