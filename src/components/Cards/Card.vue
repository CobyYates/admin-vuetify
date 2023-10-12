<template>
  <v-card :height="height">
    <v-app-bar dense color="primary" dark>
      <v-icon class="mr-3">mdi-apps</v-icon>
      {{ title }}
    </v-app-bar>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
