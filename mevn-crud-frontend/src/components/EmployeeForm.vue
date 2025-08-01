<template>
  <div>
    <h2>{{ isEdit ? $t('editTitle') : $t('addTitle') }}</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label>{{ $t('name') }}:</label>
        <input type="text" v-model="employee.name" required />
      </div>
      <div>
        <label>{{ $t('email') }}:</label>
        <input type="email" v-model="employee.email" required />
      </div>
      <div>
        <label>{{ $t('position') }}:</label>
        <input type="text" v-model="employee.position" required />
      </div>
      <div>
        <label>{{ $t('language1') }}:</label>
        <input type="text" v-model="employee.language1" />
      </div>
      <div>
        <label>{{ $t('language2') }}:</label>
        <input type="text" v-model="employee.language2" />
      </div>
      <div>
        <label>{{ $t('language3') }}:</label>
        <input type="text" v-model="employee.language3" />
      </div>
      <button type="submit">{{ isEdit ? $t('update') : $t('add') }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EmployeeForm',
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      employee: {
        name: '',
        email: '',
        position: '',
        language1: '',
        language2: '',
        language3: ''
      },
      originalEmployee: null,
      isEdit: false
    };
  },
  methods: {
    fetchEmployee(id) {
      this.$axios.get('/employees/' + id)
        .then(response => {
          this.employee = response.data;
          this.originalEmployee = JSON.parse(JSON.stringify(response.data)); // ✅ lưu bản gốc
        })
        .catch(error => {
          console.error('Lỗi khi lấy thông tin nhân viên:', error);
        });
    },
    submitForm() {
      if (this.isEdit) {
        const current = JSON.stringify(this.employee);
        const original = JSON.stringify(this.originalEmployee);

        if (current === original) {
          alert(this.$t('noChange'));
          this.$router.push('/'); // ✅ thông báo nếu không có thay đổi
          return;
        }

        this.$axios.put('/employees/' + this.id, this.employee)
          .then(() => {
            alert(this.$t('updateSuccess'));
            this.$router.push('/');
          })
          .catch(error => {
            console.error(this.$t('errorUpdate'), error);
          });
      } else {
        this.$axios.post('/employees', this.employee)
          .then(() => {
            alert(this.$t('addSuccess'));
            this.$router.push('/');
          })
          .catch(error => {
            console.error(this.$t('errorAdd'), error);
            alert(this.$t('addFail'));
          });
      }
    }
  },
  mounted() {
    if (this.id) {
      this.isEdit = true;
      this.fetchEmployee(this.id);
    }
  }
};
</script>

<style scoped>
form div {
  margin-bottom: 10px;
}
label {
  display: inline-block;
  width: 120px;
  font-weight: bold;
}
input {
  padding: 5px;
  width: 220px;
}
button {
  padding: 6px 14px;
  font-weight: bold;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background-color: #369870;
}
</style>
