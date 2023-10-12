<template>
  <v-row>
    <v-col cols="12">
      <card v-for="card in cards" :key="card.i" v-bind="card" class="mb-6">
        <v-row
          v-for="row in card.buttons"
          :key="row.i"
          class="d-flex justify-center my-4"
        >
          <v-col cols="2" class="pl-16">
            <h4 class="my-4">{{ row.title }}</h4>
          </v-col>
          <v-col
            cols="2"
            class="d-flex justify-center"
            v-for="button in 4"
            :key="button.i"
          >
            <v-btn :color="row.color" :outlined="row.type == 'outlined'">
              Lorem ipsum
              <v-icon v-if="row.icon" right>{{ row.icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </card>
    </v-col>
  </v-row>
</template>

<script>
import Card from "@/components/Cards/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      cards: [
        {
          title: "Regular Buttons",
          buttons: [
            {
              title: "Filled",
              type: "",
              color: "secondary",
            },
            {
              title: "Filled - secondary",
              type: "",
              color: "primary",
            },
            {
              title: "Filled",
              type: "outlined",
              color: "primary",
            },
          ],
        },
        {
          title: "Icon + text buttons",
          buttons: [
            {
              title: "Filled",
              type: "",
              color: "secondary",
              icon: "mdi-clock-time-three-outline",
            },
            {
              title: "Filled - secondary",
              type: "",
              color: "primary",
              icon: "mdi-clock-time-three-outline",
            },
            {
              title: "Filled",
              type: "outlined",
              color: "primary",
              icon: "mdi-clock-time-three-outline",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
