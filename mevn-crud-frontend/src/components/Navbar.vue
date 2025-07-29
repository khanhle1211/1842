<template>
    <nav>
      <ul>
        <li><router-link to="/employees">Danh Sách Nhân Viên</router-link></li>
        <li><router-link to="/add">Thêm Nhân Viên</router-link></li>
        <li><router-link to="/test">Trang Thử Nghiệm </router-link></li>
        <li><router-link to="/about">Trang Giới Thiệu </router-link></li>
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
  