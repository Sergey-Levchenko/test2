<template>
  <div
    class="notification"
    :class="[{ hidden: isNotificationHidden }, notification.type]"
  >
    <p class="notification__text">{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Notification",
  computed: {
    ...mapGetters({
      isNotificationHidden: "ui/isNotificationHidden",
      notification: "ui/notification"
    })
  }
};
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  z-index: 10;
  opacity: 1;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 24px;
  border: 2px solid gray;
  border-radius: 24px;
  max-width: 300px;
  max-height: 120px;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 500;
  line-height: 1;
  color: gray;
  text-align: center;
  transition: all 200ms ease-in-out;
  &__text{
    margin: 0;
  }
  &.success {
    border-color: green;
    background-color: green;
    color: white;
  }
  &.alert {
    border-color: red;
    background-color: red;
    color: white;
  }
  &.hidden {
    bottom: -60px;
    opacity: 0;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
