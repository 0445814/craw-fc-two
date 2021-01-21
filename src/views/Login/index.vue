<template>
  <v-container class="h-100">
    <v-row
      class="h-100"
      justify="center"
      align="center"
    >
      <v-col
        :sm="6"
        :lg="4"
      >
        <h2 class="d-flex justify-center align-center text-h4 mb-3">
          <v-icon
            class="mr-3"
            x-large
          >
            mdi-shield-account
          </v-icon>
          LOGIN
        </h2>
        <v-card
          :loading="loading"
        >
          <div class="pa-5">
            <h3 class="text-center">
              請先登入
            </h3>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="User"
                prepend-icon="mdi-email"
                :disabled="loading"
                required
              />

              <v-text-field
                v-model="password"
                class="mb-10"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :counter="10"
                :rules="passwordRules"
                prepend-icon="mdi-lock"
                label="Password"
                :disabled="loading"
                required
                @click:append="showPassword = !showPassword"
              />

              <div class="text-center">
                <v-btn
                  class="black--text"
                  color="white"
                  block
                  :loading="loading"
                  @click="handleLogin"
                >
                  LOGIN
                </v-btn>
              </div>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    valid: true,
    loading: false,
    showPassword: false,
    password: '1234567',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) => (v && v.length <= 10) || 'Password must be less than 10 characters',
    ],
    email: 'admin@gmail.com',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    handleLogin() {
      this.loading = true
      this.validate()
      const { email, password } = this
      const user = { email, password }

      window.localStorage.setItem('fc-user', JSON.stringify(user))
      setTimeout(() => {
        this.loading = false
        this.$router.push({ path: '/' })
      }, 1500)
    },
  },
}
</script>
