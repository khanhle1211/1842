import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  vi: {
    home: 'Danh sách nhân viên',
    add: 'Thêm nhân viên',
    about: 'Giới thiệu',
    test: 'Trang thử nghiệm',
    addTitle: 'Thêm nhân viên mới',
    editTitle: 'Sửa thông tin nhân viên',
    name: 'Tên',
    email: 'Email',
    position: 'Chức vụ',
    language1: 'Ngôn ngữ 1',
    language2: 'Ngôn ngữ 2',
    language3: 'Ngôn ngữ 3',
    update: 'Cập nhật',
    employeeList: 'Danh sách nhân viên',
    actions: 'Hành động',
    edit: 'Sửa',
    delete: 'Xoá',
    confirmDelete: 'Bạn có chắc chắn muốn xoá nhân viên này không?',
    updateSuccess: 'Nhân viên đã được cập nhật thành công!',
    addSuccess: 'Nhân viên đã được thêm mới!',
    // Giới thiệu
    aboutTitle: 'Về Chúng Tôi',
    aboutDesc1: 'Đây là hệ thống quản lý nhân viên được phát triển bằng MEVN Stack (MongoDB, Express, Vue, Node.js).',
    aboutDesc2: 'Mục tiêu của hệ thống là giúp doanh nghiệp dễ dàng theo dõi thông tin và kỹ năng ngôn ngữ của nhân viên.',
    aboutPoint1: 'Xem danh sách nhân viên',
    aboutPoint2: 'Thêm, sửa, xoá nhân viên dễ dàng',
    aboutPoint3: 'Giao diện hỗ trợ đa ngôn ngữ',
    // Trang thử nghiệm
    testTitle: '🧪 Trang Thử Nghiệm Quản Lý Nhân Viên',
    testIntro: 'Bạn có thể thử thêm, sửa, xoá nhân viên tại đây để kiểm tra hệ thống.',
    testLogTitle: '📝 Nhật ký kiểm thử:',
    employeeName: 'Tên nhân viên',
    employeeRole: 'Chức vụ',
    addEmployee: 'Thêm nhân viên',
    tableName: 'Tên',
    tableRole: 'Chức vụ',
    tableActions: 'Hành động',
    logAdd: '✅ Thêm',
    logEdit: '📝 Sửa',
    logDelete: '❌ Đã xoá nhân viên'
  },

  en: {
    home: 'Employee List',
    add: 'Add Employee',
    about: 'About Us',
    test: 'Test Page',
    addTitle: 'Add New Employee',
    editTitle: 'Edit Employee Information',
    name: 'Name',
    email: 'Email',
    position: 'Position',
    language1: 'Language 1',
    language2: 'Language 2',
    language3: 'Language 3',
    update: 'Update',
    employeeList: 'Employee List',
    actions: 'Actions',
    edit: 'Edit',
    delete: 'Delete',
    confirmDelete: 'Are you sure you want to delete this employee?',
    updateSuccess: 'Employee updated successfully!',
    addSuccess: 'Employee added successfully!',
    // About Us
    aboutTitle: 'About Us',
    aboutDesc1: 'This is an Employee Management System built with the MEVN Stack (MongoDB, Express, Vue, Node.js).',
    aboutDesc2: 'The purpose is to help businesses track employee information and language skills easily.',
    aboutPoint1: 'View employee list',
    aboutPoint2: 'Easily add, edit, and delete employees',
    aboutPoint3: 'Multilingual interface support',
    // Test Page
    testTitle: "🧪 Employee Management Test Page",
    testIntro: "You can test adding, editing, and deleting employees here.",
    testLogTitle: "📝 Test Logs:",
    employeeName: "Employee Name",
    employeeRole: "Role",
    addEmployee: "Add Employee",
    tableName: "Name",
    tableRole: "Role",
    tableActions: "Actions",
    logAdd: "✅ Added",
    logEdit: "📝 Edited",
    logDelete: "❌ Deleted employee"
  },

  jp: {
    home: '社員一覧',
    add: '社員を追加',
    about: '会社概要',
    test: 'テストページ',
    addTitle: '新しい社員を追加',
    editTitle: '社員情報を編集',
    name: '名前',
    email: 'メール',
    position: '役職',
    language1: '言語1',
    language2: '言語2',
    language3: '言語3',
    update: '更新',
    employeeList: '社員一覧',
    actions: '操作',
    edit: '編集',
    delete: '削除',
    confirmDelete: 'この社員を削除してもよろしいですか？',
    updateSuccess: '社員が正常に更新されました！',
    addSuccess: '社員が正常に追加されました！',
    // 会社概要
    aboutTitle: '私たちについて',
    aboutDesc1: 'これは MEVN スタック（MongoDB、Express、Vue、Node.js）で構築された社員管理システムです。',
    aboutDesc2: 'このシステムは、社員の情報と語学スキルを簡単に管理するために設計されています。',
    aboutPoint1: '社員リストの表示',
    aboutPoint2: '社員の追加・編集・削除が簡単',
    aboutPoint3: '多言語インターフェースをサポート',
    // テストページ
    testTitle: '🧪 社員管理テストページ',
    testIntro: 'ここで社員の追加、編集、削除を試してシステムをテストできます。',
    testLogTitle: '📝 テストログ：',
    employeeName: '社員名',
    employeeRole: '役職',
    addEmployee: '社員を追加',
    tableName: '名前',
    tableRole: '役職',
    tableActions: '操作',
    logAdd: '✅ 追加',
    logEdit: '📝 編集',
    logDelete: '❌ 削除済み'
  }
}

const i18n = new VueI18n({
  locale: 'vi',
  fallbackLocale: 'en',
  messages
})

export default i18n
