<template>
  <div id="app">
    <nav>
      <router-link to="/">{{ $t('home') }}</router-link> |
      <router-link to="/add">{{ $t('add') }}</router-link> |
      <router-link to="/about">{{ $t('about') }}</router-link> |
      <router-link to="/test">{{ $t('test') }}</router-link>
    </nav>

    <!-- Nút chọn ngôn ngữ -->
    <div class="lang-switch">
      <button @click="changeLang('vi')">🇻🇳 VI</button>
      <button @click="changeLang('en')">🇺🇸 EN</button>
      <button @click="changeLang('jp')">🇯🇵 JP</button>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Thêm style cho nút chọn ngôn ngữ */
.lang-switch {
  margin-bottom: 20px;
}

.lang-switch button {
  margin: 0 5px;
  padding: 6px 12px;
  border: none;
  background: #eee;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
}

.lang-switch button:hover {
  background: #d2d2d2;
}
</style>
