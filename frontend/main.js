const { createApp } = Vue;

createApp({
  data() {
    return {
      pageTitle: "PHP ToDo List JSON",
      inputText: "",

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

    sendData() {
      const newTask = this.inputText;
      this.inputText = "";

      const dataToSend = {
        text: newTask,
      };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post(
          "http://localhost/php-todo-list-json/backend/api/setToDoList.php",
          dataToSend,
          params
        )
        .then((response) => {
          this.toDoList = response.data;
        });
    },
  },

  mounted() {
    this.fetchToDoList();
  },
}).mount("#app");
