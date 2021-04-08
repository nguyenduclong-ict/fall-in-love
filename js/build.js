var app = new Vue({
  el: "#app",
  filters: {
    date(value) {
      if (value) {
        let d;
        if (value.toDate) d = value.toDate();
        else {
          d = new Date(value);
        }
        // prettier-ignore
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      }
      return;
    },
  },
  data() {
    return {
      question: "",
      id: "",
      message: "",
      yt: "Có",
      nt: "Không",
      all: false,
      copied: false,
    };
  },

  computed: {
    link() {
      const url = new URL("https://nguyenduclong-ict.github.io/fall-in-love");
      url.searchParams.append("q", this.question);
      url.searchParams.append("m", this.message);
      url.searchParams.append("id", this.id);
      url.searchParams.append("nt", this.nt);
      url.searchParams.append("yt", this.yt);
      if (this.all) url.searchParams.append("all", this.all);
      return url.toString();
    },
  },

  methods: {
    copy() {
      const copyToClipboard = (str) => {
        const el = document.createElement("textarea");
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      };
      copyToClipboard(this.link);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    },
  },
});
