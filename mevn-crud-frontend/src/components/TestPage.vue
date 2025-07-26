<template>
  <div class="test-wrapper">
    <div class="test-box">
      <h2>{{ $t('testTitle') }}</h2>
      <p>{{ $t('testIntro') }}</p>

      <!-- Form thêm nhân viên -->
      <form @submit.prevent="addEmployee">
        <input v-model="newEmployee.name" :placeholder="$t('employeeName')" required />
        <input v-model="newEmployee.position" :placeholder="$t('employeeRole')" required />
        <button type="submit">➕ {{ $t('addEmployee') }}</button>
      </form>

      <!-- Bảng danh sách nhân viên -->
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>{{ $t('tableName') }}</th>
            <th>{{ $t('tableRole') }}</th>
            <th>{{ $t('tableActions') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(emp, index) in employees" :key="emp.id">
            <td>{{ emp.id }}</td>
            <td>
              <input v-model="emp.name" :disabled="editingIndex !== index" />
            </td>
            <td>
              <input v-model="emp.position" :disabled="editingIndex !== index" />
            </td>
            <td>
              <button v-if="editingIndex !== index" @click="editEmployee(index)">📝 {{ $t('edit') }}</button>
              <button v-else @click="confirmUpdate(index)">💾 {{ $t('update') }}</button>
              <button @click="deleteEmployee(index)">❌ {{ $t('delete') }}</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Khu vực log kết quả -->
      <div class="logs">
        <h4>{{ $t('testLogTitle') }}</h4>
        <ul>
          <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let nextId = 1

export default {
  name: 'InteractiveTestPage',
  data() {
    return {
      employees: [],
      newEmployee: { name: '', position: '' },
      logs: [],
      editingIndex: null
    }
  },
  methods: {
    addEmployee() {
      const emp = {
        id: nextId++,
        name: this.newEmployee.name,
        position: this.newEmployee.position
      }
      this.employees.push(emp)
      this.logs.unshift(`✅ ${this.$t('logAdd')}: ${emp.name} (${emp.position})`)
      this.newEmployee.name = ''
      this.newEmployee.position = ''
    },
    editEmployee(index) {
      this.editingIndex = index
    },
    confirmUpdate(index) {
      const emp = this.employees[index]
      this.logs.unshift(`💾 ${this.$t('logEdit')}: ID ${emp.id} → ${emp.name}, ${emp.position}`)
      this.editingIndex = null
    },
    deleteEmployee(index) {
      const emp = this.employees[index]
      this.employees.splice(index, 1)
      this.logs.unshift(`❌ ${this.$t('logDelete')}: ${emp.name}`)
      if (this.editingIndex === index) {
        this.editingIndex = null
      }
    }
  }
}
</script>

<style scoped>
.test-wrapper {
  padding: 30px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
}
.test-box {
  background: white;
  padding: 30px;
  width: 800px;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}
.desc {
  margin-bottom: 20px;
  color: #555;
}
form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
form input {
  flex: 1;
  padding: 8px;
}
form button {
  padding: 8px 16px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
table, th, td {
  border: 1px solid #ddd;
}
td, th {
  padding: 10px;
}
.logs {
  background: #f0f0f0;
  padding: 15px;
  border-radius: 6px;
}
.logs ul {
  list-style: none;
  padding-left: 0;
}
.logs li {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
