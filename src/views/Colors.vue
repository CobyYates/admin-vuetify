<template>
  <v-row>
    <v-col>
      <card title="Brand Colors" height="100%">
        <p>
          Brand colors can be set by the end-user, as part of the theme settings
        </p>
        <div v-for="color in theme.brand" :key="color.i" class="d-flex">
          <div>
            <v-sheet height="80" width="400" :color="color.code">
              <p class="pa-2 test">{{ color.code }}</p>
            </v-sheet>
            <p>Brand {{ color.title }} color</p>
          </div>
          <v-sheet
            v-for="(code, i) in 3"
            :key="code.i"
            height="80"
            width="80"
            :class="`ml-3 color color--${(i += 1)}`"
            :color="color.code"
          >
            <p class="color__label">{{ 100 - 25 * i }}%</p>
          </v-sheet>
          <v-btn
            icon
            color="secondary"
            class="mt-6 ml-10"
            @click="changeColor('brand', color.title)"
          >
            <v-icon left>mdi-pencil</v-icon>
            Edit
          </v-btn>
        </div>
      </card>
    </v-col>
    <v-col>
      <card title="Theme (neutral) colors" height="100%">
        <p>
          Theme colors are secondary colors that are used in the dark and light
          theme and are not editable
        </p>
        <div v-for="color in theme.modes" :key="color.i" class="d-flex">
          <div>
            <v-sheet height="80" width="400" :color="color.code">
              <p class="pa-2 test">{{ color.code }}</p>
            </v-sheet>
            <p>Theme - {{ color.title }}</p>
          </div>
          <v-sheet
            v-for="(code, i) in 3"
            :key="code.i"
            height="80"
            width="80"
            :class="`ml-3 color color--${(i += 1)}`"
            :color="color.code"
          >
            <p class="color__label">{{ 100 - 25 * i }}%</p>
          </v-sheet>
          <v-btn
            icon
            color="secondary"
            class="mt-6 ml-10"
            @click="changeColor('modes', color.title)"
          >
            <v-icon left>mdi-pencil</v-icon>
            Edit
          </v-btn>
        </div>
      </card>

      <v-dialog transition="dialog-top-transition" width="300" v-model="dialog">
        <v-card>
          <v-color-picker
            dot-size="25"
            swatches-max-height="200"
            v-model="newColor"
          />
          <v-card-actions class="justify-end">
            <v-btn text @click="updateColor" color="secondary">Save</v-btn>
            <v-btn text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import Card from "@/components/Cards/Card.vue";
export default {
  data() {
    return {
      theme: {
        brand: [
          {
            title: "main",
            code: "#4ab8ad",
          },
          {
            title: "secondary",
            code: "#19465c",
          },
        ],
        modes: [
          {
            title: "dark",
            code: "#1A3340",
          },
          {
            title: "medium",
            code: "#91A0AB",
          },
          {
            title: "light",
            code: "#F5F5F5",
          },
          {
            title: "notification",
            code: "#DE0505",
          },
        ],
      },
      colorSelected: {},
      dialog: false,
      newColor: null,
    };
  },
  components: {
    Card,
  },
  methods: {
    changeColor(type, color) {
      console.log("testing", type, color);
      this.colorSelected = { type: type, color: color };
      this.dialog = true;
    },
    updateColor() {
      const mainBrandIndex = this.theme[this.colorSelected.type].findIndex(
        (e) => e.title == this.colorSelected.color
      );
      console.log(mainBrandIndex, this.newColor);

      if (mainBrandIndex !== -1) {
        this.theme[this.colorSelected.type][mainBrandIndex].code =
          this.newColor.hex;
      }

      this.dialog = false;
      this.colorSelected = {};
      this.newColor = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  position: relative;
  &__label {
    position: absolute;
    bottom: -40px;
  }
  &--2 {
    opacity: 0.75;
  }
  &--3 {
    opacity: 0.5;
  }
  &--4 {
    opacity: 0.25;
  }
}
</style>
