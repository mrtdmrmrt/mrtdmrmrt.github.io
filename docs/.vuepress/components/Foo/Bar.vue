<template>
  <p class="demo">
    {{ msg }}
  </p>
</template>

<script>
  export default {
    name:"Bar",
    data () {
      return {
        msg: 'Hello this is <Foo-Bar>'
      }
    }
  }
</script>
