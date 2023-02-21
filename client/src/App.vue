<script setup>
import { ref, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

const apiMessage = ref("Waiting for message...");

function msgClick(event) {
  console.log("Message was clicked!");
}

onMounted(async () => {
  // Make an get request to our API's message endpoint and store the response as json
  const msgResponse = await (await fetch("/api/message")).json();
  apiMessage.value = msgResponse.body;
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div @click="msgClick" class="wrapper">
      <HelloWorld :msg="apiMessage"  />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
