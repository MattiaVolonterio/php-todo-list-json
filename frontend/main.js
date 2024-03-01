const { createApp } = Vue;

createApp({
  data() {
    return {
      pageTitle: "PHP ToDo List JSON",
      inputText: "",
      filterText: "",

      toDoList: [],
    };
  },

  methods: {
    fetchToDoList() {
      axios.get("../backend/api/getToDoList.php").then((result) => {
        this.toDoList = result.data;
      });
    },

    sendData() {
      if (this.inputText != "") {
        const newTask = this.inputText;
        this.inputText = "";

        const dataToSend = {
          text: newTask,
        };

        const params = {
          headers: { "Content-Type": "multipart/form-data" },
        };

        axios
          .post("../backend/api/setToDoList.php", dataToSend, params)
          .then((response) => {
            this.toDoList = response.data;
          });
      }
    },

    toggleStatus(item, index) {
      const newItemStatus = !item.isDone;

      const dataToSend = {
        text: item.text,
        isDone: newItemStatus,
        index,
      };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post("../backend/api/toggleStatus.php", dataToSend, params)
        .then((response) => {
          this.toDoList = response.data;
        });
    },

    deleteItem(index) {
      const dataToSend = {
        index,
      };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      axios
        .post("../backend/api/deleteItem.php", dataToSend, params)
        .then((response) => {
          this.toDoList = response.data;
        });
    },

    filterData() {
      const filter = this.filterText;

      const dataToSend = { filter };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post("../backend/api/filterToDoList.php", dataToSend, params)
        .then((response) => {
          this.toDoList = response.data;
        });
    },
  },

  mounted() {
    this.fetchToDoList();
  },
}).mount("#app");
