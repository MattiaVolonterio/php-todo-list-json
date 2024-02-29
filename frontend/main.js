const { createApp } = Vue;

createApp({
  data() {
    return {
      pageTitle: "PHP ToDo List JSON",

      toDoList: [],
    };
  },

  methods: {
    fetchToDoList() {
      axios
        .get("http://localhost/php-todo-list-json/backend/api/getToDoList.php")
        .then((result) => {
          this.toDoList = result.data;
        });
    },
  },

  mounted() {
    this.fetchToDoList();
  },
}).mount("#app");
