<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter></Counter>
    <button v-on:click="showLogin">{{ buttonName }}</button>
    <button v-b-modal.LoginModal>Show Model</button>
    <b-modal id="LoginModal" title="Login ..." ok-only>
      <p>This is a test</p>
      <div>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
        ></b-embed>
      </div>
    </b-modal>
    <div v-if="login">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowfullscreen
      ></b-embed>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import { BEmbed } from "bootstrap-vue";

export default {
  components: {
    Counter,
    BEmbed
  },
  data() {
    return {
      login: false,
      buttonName: "Login"
    };
  },
  methods: {
    showLogin: function() {
      if (this.login === false) {
        this.login = true;
        this.buttonName = "Logout";
      } else {
        this.login = false;
        this.buttonName = "Login";
      }
      console.log("login: " + this.login);
    }
  }
};
</script>

