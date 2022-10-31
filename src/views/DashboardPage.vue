<template>
  <div class="">
    <TheDashboardHeader />
    <TheDashboardBody/>
  </div>
</template>

<script>
import TheDashboardHeader from "@/components/TheDashboardHeader.vue";
import TheDashboardBody from "@/components/TheDashboardBody.vue";

export default {
  name: 'dashboard',
  components: {
    TheDashboardHeader,
    TheDashboardBody
  }
};
</script>
