<template>
  <v-navigation-drawer width="400" class="elevation-1" permanent>
    <div class="d-flex flex-column align-center justify-center mx-6">
      <v-img :src="logo" class="my-8" />
      <div class="d-flex justify-space-between oauth-buttons">
        <v-btn large>
          <v-avatar size="30" class="mr-2">
            <v-img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            />
          </v-avatar>
          Google
        </v-btn>
        <v-btn large>
          <v-avatar size="25" class="mr-2">
            <v-img
              src="https://clipart-library.com/images_k/facebook-logo-png-transparent-background/facebook-logo-png-transparent-background-5.png"
            />
          </v-avatar>
          Facebook
        </v-btn>
      </div>
      <v-divider class="py-4" />
      <v-form @submit.prevent="login">
        <v-text-field
          solo
          v-model="fullName"
          placeholder="Your full name"
          required
        ></v-text-field>
        <v-text-field
          solo
          v-model="email"
          placeholder="example@gmail.com"
          required
          type="email"
        ></v-text-field>
        <v-text-field
          solo
          v-model="username"
          placeholder="Enter a username"
          required
        ></v-text-field>
        <v-text-field
          solo
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-1"
          placeholder="password"
          hint="At least 8 characters"
          counter
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <div class="d-flex align-baseline">
          <v-checkbox v-model="acceptTerms" />
          <label for="acceptTerms">
            By creating an account you agree to the <a>terms of use</a> and our
            <a>privacy policy.</a>
          </label>
        </div>
        <v-btn block type="submit" color="primary" class="my-5" large>
          Login
        </v-btn>
      </v-form>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      username: "",
      password: "",
      acceptTerms: false,
      showPassword: false,
      passwordRules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  props: {
    logo: {
      type: String,
      default:
        "https://d2i3vvs80sgm1l.cloudfront.net/b20687dd-39f1-48e8-91e5-2bcceaf829cc/images/logos/SiteSource_Logo_Name_Black.svg",
    },
  },
};
</script>

<style lang="scss" scoped>
.oauth-buttons,
form {
  width: 100%;
}
</style>
