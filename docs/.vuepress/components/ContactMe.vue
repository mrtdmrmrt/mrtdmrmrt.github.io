<template>
  <div class="contact-me__container">
    <div
      v-if="typeof $site.themeConfig.social !== 'undefined'"
      class="contact-me__wrapper mt-5"
    >
      <h4 class="mb-4">Contact Me</h4>
      <ul class="mb-4 social">
        <li
          v-for="link in $site.themeConfig.social"
          :key="link.url"
          class="mx-3"
        >
          <a :href="link.url" target="_blank">
            <font-awesome-icon :icon="link.icon" size="3x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
};
</script>

<style lang="scss">
.contact-me {
  &__container {
    & ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 10px;
      & li {
        & a {
          color: #485058;
        }
      }
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
