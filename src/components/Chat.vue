<template>
	<div class="chat container">
		<h2 class="center teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">Message</span>
            <span class="grey-text time">Time</span>
          </li>
        </ul>
      </div>

      <div class="card-action">
        <NewMessage :name="name" />
      </div>
    </div>
	</div>
</template>

<script>
import NewMessage from '@/components/NewMessage'

export default {
	name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .chat h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }

  .chat span {
    font-size: 1.4em;
  }

  .chat .time {
    display: block;
    font-size: 1.2em;
  }
</style>
