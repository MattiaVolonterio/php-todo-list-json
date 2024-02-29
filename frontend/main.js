const { createApp } = Vue;

createApp({
  data() {
    return {
      pageTitle: "PHP ToDo List JSON",

      toDoList: [
        {
          isDone: false,
          text: "Fare la spesa",
        },
        {
          isDone: false,
          text: "Pulire i vetri",
        },
        {
          isDone: true,
          text: "Aggiornare il pc",
        },
        {
          isDone: false,
          text: "Ritirare la macchina dal meccanico",
        },
        {
          isDone: true,
          text: "Portare fuori la spazzatura",
        },
        {
          isDone: false,
          text: "Preparare la cena",
        },
      ],
    };
  },

  computed: {},

  methods: {},

  mounted() {},
}).mount("#app");
