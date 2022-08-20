<template>
  <div class="code-skills__container">
    <div
      v-if="typeof $site.themeConfig.social !== 'undefined'"
      class="code-skills__wrapper mt-5"
    >
      <h4 class="mb-4">Skills</h4>
      <ul class="mb-4 social">
        <li
          v-for="link in $site.themeConfig.skills"
          :key="link.url"
          class="mx-3"
        >
         <img :src="link.url" :alt="link.name">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeSkills",
};
</script>

<style lang="scss">
.code-skills {
  &__container {
    & ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 20px;
      & li {
        & a {
          color: #485058;
        }
        & img{
            min-width: 50px;
            height: 50px;
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

