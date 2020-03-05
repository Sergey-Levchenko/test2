<template>
  <transition name="fade">
    <div v-show="isLoading" class="loader">
      <div class="loader__ellipsis">
        <div v-for="(_, index) in 4" :key="`ellipsis-${index}`" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Loader",
  computed: {
    ...mapGetters({
      isLoading: "ui/isLoading"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/transitions";
.loader {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  pointer-events: none;
  &__ellipsis {
    display: inline-block;
    position: relative;
    width: 160px;
    height: 160px;
  }
  &__ellipsis div {
    position: absolute;
    top: 66px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: gray;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  &__ellipsis div:nth-child(1) {
    left: 16px;
    animation: loader__ellipsis1 0.6s infinite;
  }
  &__ellipsis div:nth-child(2) {
    left: 16px;
    animation: loader__ellipsis2 0.6s infinite;
  }
  &__ellipsis div:nth-child(3) {
    left: 64px;
    animation: loader__ellipsis2 0.6s infinite;
  }
  &__ellipsis div:nth-child(4) {
    left: 112px;
    animation: loader__ellipsis3 0.6s infinite;
  }
}
@keyframes loader__ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes loader__ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes loader__ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(48px, 0);
  }
}
</style>
