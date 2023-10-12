<template>
  <v-row class="fill-height">
    <v-col cols="12" md="6">
      <card v-bind="styles">
        <v-list>
          <v-list-item v-for="item in styles.theme" :key="item.i">
            <v-list-item-title>
              {{ item.type }}
            </v-list-item-title>
            <v-list-item-action class="text-no-wrap d-flex justify-end">
              {{ item.family }} - {{ item.weight }} - {{ item.size }}
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </card>
    </v-col>
    <v-col cols="12" md="6">
      <card v-bind="example">
        <h2>Lorm ipsum</h2>
        <h3>Lorm ipusm</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h4>Sub-heading</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <a href="/" class="success--text">Duis aute</a> irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="d-flex">
          <div>
            <v-img
              height="150"
              min-width="300"
              color="grey lighten-2"
              class="mr-3"
              tile
              flat
            />
            <caption class="text-no-wrap">
              Lorem ipsum dolor
            </caption>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <label for="test">Lorem Ipsum</label>
        <div class="d-flex">
          <v-text-field solo class="mr-3" hide-details />
          <v-btn large color="success" width="250">Lorem ipsum</v-btn>
        </div>
      </card>
    </v-col>
  </v-row>
</template>

<script>
import Card from "@/components/Cards/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      styles: {
        title: "Styles",
        height: "100%",
        contentType: "vcard",
        theme: [
          {
            type: "Hero Title",
            family: "Inter",
            weight: "Black",
            size: "36pt",
          },
          {
            type: "Heading",
            family: "Inter",
            weight: "Black",
            size: "36pt",
          },
          {
            type: "Subheading",
            family: "Inter",
            weight: "Black",
            size: "24pt",
          },
          {
            type: "Body Main",
            family: "Inter",
            weight: "Bold",
            size: "16pt",
          },
          {
            type: "Caption",
            family: "Inter",
            weight: "Medium",
            size: "14pt",
          },
          {
            type: "Text Link",
            family: "Inter",
            weight: "Italic",
            size: "16pt",
          },
          {
            type: "Label",
            family: "Inter",
            weight: "Medium",
            size: "14pt",
          },
          {
            type: "Form field placeholder",
            family: "Inter",
            weight: "Semibold",
            size: "14pt",
          },
          {
            type: "Button Text",
            family: "Inter",
            weight: "Bold",
            size: "14pt",
          },
        ],
      },
    };
  },
  props: {},
};
</script>

<style lang="scss" scoped></style>
