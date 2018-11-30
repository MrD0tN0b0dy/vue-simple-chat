<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-conter center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter name to join public channel</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ 
          name: 'Chat', 
          params: { name: this.name } 
        })
      } else {
        this.feedback = "Enter your name to join."
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  margin-top: 100px;
  max-width: 400px;
}

.welcome h2 {
  font-size: 3em;
}

.welcome button {
  margin: 30px auto;
}
</style>
