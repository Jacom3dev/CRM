<script setup>
  import Heading from "../components/Heading.vue";
  import RouterLink from "../components/RouterLink.vue";

  defineProps({
    title:{
      type:String
    }
  })
</script>

<template>
 <div>
    <div class="flex justify-end">
      <RouterLink :to="'newCustomer'">Nuevo cliente</RouterLink>
    </div>
    <Heading>{{ title }}</Heading>
 </div>
</template>
