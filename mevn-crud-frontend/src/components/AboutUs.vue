<template>
  <div class="about-container">
    <h2>{{ $t('aboutTitle') }}</h2>
    <p>{{ $t('aboutDesc1') }}</p>
    <p>{{ $t('aboutDesc2') }}</p>

    <ul>
      <li>✔️ {{ $t('aboutPoint1') }}</li>
      <li>✔️ {{ $t('aboutPoint2') }}</li>
      <li>✔️ {{ $t('aboutPoint3') }}</li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  methods: {
    setLang(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style scoped>
.about-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  text-align: left;
  font-family: 'Arial', sans-serif;
  color: #333;
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

p {
  margin-bottom: 10px;
  line-height: 1.6;
}

ul {
  margin-top: 20px;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

.lang-buttons {
  margin-top: 30px;
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background-color: #42b983;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #369870;
}
</style>
