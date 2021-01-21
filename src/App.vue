<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title py-2">
            My FC
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list nav>
        <v-list-item
          v-for="item in menus"
          :key="item.path"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn
            block
            :loading="loading"
            @click="handleLogout"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>首頁</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <transition
        name="slide-fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: null,
    loading: false,
    menus: [
      { title: '全部影片', path: '/list', icon: 'mdi-view-dashboard' },
      { title: '最愛影片', path: '/favorite', icon: 'mdi-cards-heart' },
      { title: '收藏賣家', path: '/seller', icon: 'mdi-account-heart' },
      { title: '後台操作', path: '/dashboard', icon: 'mdi-cog' },
    ],
  }),
  methods: {
    handleLogout() {
      this.loading = true
      window.localStorage.setItem('fc-user', null)

      setTimeout(() => {
        this.loading = false
        this.$router.push({ path: '/login' })
      }, 1500)
    },
  },
}
</script>
