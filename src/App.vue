<template>
  <v-app>
    <v-container>
      <v-app-bar v-if="showBar" app color="white" class="elevation-2 app-bar">
        <div class="d-flex align-baseline">
          <h2 class="mr-3">{{ dashboardTitle }}</h2>
          <a href="/">Customize dashboard</a>
        </div>

        <v-spacer></v-spacer>
        <div class="d-flex align-baseline">
          <div class="clickable" @click.stop="profile = !profile">
            <v-avatar size="30">
              <v-icon color="primary">mdi-account</v-icon>
            </v-avatar>
            My Profile
          </div>
          <div class="ml-7">
            <v-badge left color="red" offset-y="25" offset-x="15" content="2">
              <v-avatar size="30">
                <v-icon color="primary">mdi-bell-outline</v-icon>
              </v-avatar>
            </v-badge>
            Notifications
          </div>
          <div class="ml-7">
            <v-avatar size="30">
              <v-icon color="primary">mdi-logout</v-icon>
            </v-avatar>
            Log Out
          </div>
        </div>
      </v-app-bar>

      <v-navigation-drawer
        mini-variant-width="70"
        width="250"
        permanent
        fixed
        expand-on-hover
        color="primary"
        dark
        @transitionend="updateDrawer"
      >
        <v-img :src="logo" min-width="200" />

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-switch class="ml-4" v-model="$vuetify.theme.dark" inset></v-switch>
      </v-navigation-drawer>

      <v-navigation-drawer
        v-model="profile"
        fixed
        temporary
        right
        width="400"
        class="px-10"
      >
        <div class="account-container d-flex align-center flex-column">
          <div>
            <v-list-item two-line>
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/men/11.jpg" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <h3>{{ user.name }}</h3>
                </v-list-item-title>
                <v-list-item-subtitle>{{ user.role }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="grey"> mdi-email </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ user.email }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn text color="accent">Edit</v-btn>
                </v-list-item-action>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="grey"> mdi-phone </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>(323) 555-6789</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn text color="accent">Edit</v-btn>
                </v-list-item-action>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="grey"> mdi-map-marker </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{
                    user.address.street
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ user.address.state }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn text color="accent">Edit</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>

            <div>
              <h4>Current Plan</h4>
              <div class="d-flex align-baseline justify-space-between">
                <p>{{ user.plan }} plan</p>
                <v-btn color="accent" width="150" large> Upgrade </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-navigation-drawer>

      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    profile: false,
    items: [
      { title: "Admin", icon: "mdi-cog-outline", to: "/" },
      { title: "Typography", icon: "mdi-format-size", to: "/typography" },
      { title: "Colors", icon: "mdi-palette", to: "/colors" },
      { title: "Buttons", icon: "mdi-card-outline", to: "/buttons" },
      { title: "Cards", icon: "mdi-card-text-outline", to: "/cards" },
      {
        title: "Form Fields",
        icon: "mdi-file-document-outline",
        to: "/form-fields",
      },
      { title: "Notifications", icon: "mdi-bell", to: "/notifications" },
    ],
  }),
  props: {
    dashboardTitle: {
      type: String,
      default: "Admin Dashboard",
    },
    logo: {
      type: String,
      default:
        "https://d2i3vvs80sgm1l.cloudfront.net/b20687dd-39f1-48e8-91e5-2bcceaf829cc/images/logos/SiteSource_Logo_Name_White.svg",
    },
    user: {
      type: Object,
      default: () => {
        return {
          name: "John Lorem",
          role: "Administrator",
          email: "lorem@ipsum.com",
          phone: "012 3456 789",
          address: {
            street: "Lorem ipsum street",
            state: "Lorem dolor",
          },
          plan: "Basic",
        };
      },
    },
  },
  computed: {
    showBar() {
      const route = this.$route.path;
      let result = true;
      if (route == "/login" || route == "/signup") {
        result = false;
      }
      return result;
    },
  },
  methods: {
    updateDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-bar {
  margin-left: 70px;
}

.account-container {
  height: 100%;
  padding-top: 100px;
}

.clickable {
  cursor: pointer;
}
</style>
