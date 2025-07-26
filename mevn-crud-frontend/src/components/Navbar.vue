<template>
    <nav>
      <ul>
        <li><router-link to="/employees">Employee list</router-link></li>
        <li><router-link to="/add">Add Employee</router-link></li>
        <li><router-link to="/test">Test Page</router-link></li>
        <li><router-link to="/about">Introduce</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    margin-right: 15px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a.router-link-active {
    font-weight: bold;
  }
  </style>
  