<template>
  <div>
    <span>
      <span>{{ message }}</span>
      <button @click="sendMessage" >Click me to send random number</button>
    </span>
  </div>
</template>

<script setup>
import { v4 as uuid } from "uuid"
const message = ref("")

const { $socket } = useNuxtApp()
 const uid = uuid()

onMounted(() => {
   $socket.onopen = () => {
    localStorage.setItem(`connection-${uid}`, uid)
    console.log("connected")
    $socket.send(uid)
  }

  $socket.onmessage = ({ data }) => {
    console.log("data", data)
    message.value = data
  }
  $socket.onclose = function () {
    console.log("disconnected")
  }
})

const sendMessage = () => {
    fetch("/api/sendmessage", {
      method: "POST",
      body: JSON.stringify({ message: Math.random(), sender: localStorage.getItem(`connection-${uid}`) }),
    }).then(res => res.json()).then(data =>{
        console.log("sent")
    })
}
</script>