<template>
  <v-container fluid>
    <v-row class="mb-2">
      <v-col
        v-for="i in 12"
        :key="i"
        :cols="6"
        :sm="4"
        :md="3"
        :lg="3"
      >
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="165px"
          >
            <router-link
              class="white--text text-decoration-none"
              :to="'/list/' + i"
            >
              <h2 class="text-h5 text-truncate font-weight-bold pa-3">
                Pre-fab homes11111111111111111111111111111111111111111111111
              </h2>
            </router-link>
          </v-img>

          <v-card-actions>
            <router-link
              class="text--secondary text-truncate text-decoration-none mr-lg-16"
              to="/"
            >
              Ke12312312312312312312123123123131231233n
            </router-link>
            <v-spacer />
            <v-icon
              class="d-none d-md-inline mr-1"
              color="grey darken-2"
              small
            >
              mdi-clock-time-four-outline
            </v-icon>
            <span class="d-none d-md-inline secondary--text text--lighten-2 text-no-wrap">
              2020-01-24
            </span>
          </v-card-actions>
          <v-bottom-navigation :height="40">
            <v-btn value="favorites">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn value="preview">
              <v-icon>mdi-folder-image</v-icon>
            </v-btn>
          </v-bottom-navigation>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-pagination
        v-model="page"
        :length="6"
        circle
      />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'List',
  data: () => ({
    page: 1,
  }),
}
</script>
