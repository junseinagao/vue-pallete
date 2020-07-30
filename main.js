const app = new Vue({
  el: "#app",
  data: {
    red: 0,
    green: 0,
  },
  methods: {
    changeColor(e) {
      this.red = e.offsetX;
      this.green = e.offsetY;
    },
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(${this.red}, ${this.green}, 200, 0.5)`,
      };
    },
  },
});
