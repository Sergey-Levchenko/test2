<template>
  <header class="header">
    <!-- <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <RouterLink
            class="navigation__link"
            active-class="navigation__link--active"
            exact
            to="/"
            >Home</RouterLink
          >
        </li>
        <li class="navigation__item">
          <RouterLink
            class="navigation__link"
            active-class="navigation__link--active"
            exact
            to="/movies"
            >All Movies</RouterLink
          >
        </li>
      </ul>
    </nav>-->
    <v-app-bar app color="primary" dark>
      <v-btn dark text to="/" exect>home</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "fas fa-air-freshener" },
      { title: "About", icon: "question_answer" }
    ]
  })
};
</script>

<style lang="scss" scoped>
// .header {
// }
// .navigation {
//   &__list {
//     display: flex;
//     list-style: none;
//   }
//   &__item {
//     margin-left: 8px;
//     margin-right: 8px;
//   }
//   &__link {
//     font-size: 1rem;
//     font-weight: 500;
//     color: black;
//     text-decoration: none;
//     &--active {
//       color: cornflowerblue;
//     }
//   }
// }
</style>
