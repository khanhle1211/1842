<template>
  <div>
    <h2>{{ $t('employeeList') }}</h2>
    <table>
      <thead>
        <tr>
          <th>{{ $t('name') }}</th>
          <th>{{ $t('email') }}</th>
          <th>{{ $t('position') }}</th>
          <th>{{ $t('language1') }}</th>
          <th>{{ $t('language2') }}</th>
          <th>{{ $t('language3') }}</th>
          <th>{{ $t('actions') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee._id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.position }}</td>
          <td>{{ employee.language1 }}</td>
          <td>{{ employee.language2 }}</td>
          <td>{{ employee.language3 }}</td>
          <td>
            <router-link :to="`/edit/${employee._id}`">{{ $t('edit') }}</router-link>
            |
            <button @click="confirmDelete(employee._id)">
              {{ $t('delete') }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'EmployeeList',
  data() {
    return {
      employees: []
    };
  },
  methods: {
    fetchEmployees() {
      this.$axios.get('/employees')
        .then(res => {
          this.employees = res.data;
        })
        .catch(err => {
          console.error('❌ Lỗi khi lấy danh sách nhân viên:', err);
        });
    },
    confirmDelete(id) {
      if (confirm(this.$t('confirmDelete'))) {
        this.deleteEmployee(id);
      }
    },
    deleteEmployee(id) {
      this.$axios.delete(`/employees/${id}`)
        .then(() => {
          alert(this.$t('deleteSuccess')); // Thông báo xoá thành công
          this.fetchEmployees();
        })
        .catch(err => {
          console.error('❌ Lỗi khi xoá nhân viên:', err);
        });
    }
  },
  mounted() {
    this.fetchEmployees();
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f9f9f9;
}

button {
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #d9363e;
}

a {
  color: #42b983;
  font-weight: 600;
  text-decoration: none;
  margin-right: 5px;
}

a:hover {
  text-decoration: underline;
}
</style>
