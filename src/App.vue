<script setup lang="ts">
import ArrangementToken from "@/components/ArrangementToken.vue";
import {ref} from "vue";
import Github from "@/insertedComponents/github.vue";
const href = ref('github')
</script>
<template >
  <arrangement-token/>

  <github v-if="href === 'github'"/>
</template>

<style scoped>
</style>
