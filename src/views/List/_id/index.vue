<template>
  <v-container>
    <v-row>
      <v-col :sm="9">
        <v-card class="pa-5">
          <div class="d-flex align-top mb-3">
            <h2 class="text-h6 text-no-wrap mr-3">
              標題:
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus eligendi
            quod accusamus facere modi maxime cum quis, eius rerum quibusdam quam illo iusto ad non
            pariatur mollitia neque ullam!
          </div>
          <div class="d-flex align-top mb-3">
            <h2 class="text-h6 text-no-wrap mr-3">
              賣家:
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellendus eligendi
            quod accusamus facere modi maxime cum quis, eius rerum quibusdam quam illo iusto ad non
            pariatur mollitia neque ullam!
          </div>
          <div class="d-flex align-top mb-3">
            <h2 class="text-h6 text-no-wrap mr-3">
              標籤:
            </h2>
            <v-chip
              v-for="i in 10"
              :key="i"
              class="mr-3"
              color="white"
              small
              link
              pill
              outlined
            >
              美食
            </v-chip>
          </div>

          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
            >
              <v-sheet
                :color="colors[i]"
                height="100%"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="display-3">
                    {{ slide }} Slide
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 6"
                :key="i"
                :cols="2"
              >
                <v-img
                  :src="`https://picsum.photos/500/300?image=1`"
                  :lazy-src="`https://picsum.photos/10/6?image=1`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col :sm="3">
        <v-card class="pa-5">
          <h2 class="text-h6 mb-3 ">
            此賣家其他影片...
          </h2>
          <div
            class="overflow-auto"
            style="max-height: 80vh"
          >
            <v-card>
              <v-card
                v-for="i in 10"
                :key="i"
                class="mb-3"
              >
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
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ListDetail',
  data: () => ({
    colors: ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'],
    slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
  }),
}
</script>
