<script setup lang="ts">
definePageMeta({
  layout: "map",
})

const results = [
  {
    image: 'https://a0.muscache.com/im/pictures/c26020dc-91a6-4286-92cf-d51d4f413816.jpg?im_w=720'
  },
  {
    image: "https://a0.muscache.com/im/pictures/8a8676c1-7c9e-4bf5-81c3-c5968959c248.jpg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-778192138191747777/original/9d5057f4-f58a-4886-a5d8-63a09cec822f.jpeg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-33890138/original/70cee622-8ca8-4206-8175-7d65067dc6e8.jpeg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/a4be269f-4230-45d9-a2e4-b75cad1fbb37.jpg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/87bc5e43-42d3-4a90-b25a-ee17a322a36d.jpg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/5c977fa5-ecbe-40fd-8fbc-6d2e50ddc9bc.jpg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-620104874562495057/original/18c38d7c-592a-4cb7-9c02-b412ad1fd4b2.jpeg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/db3d5d23-363e-4f3e-8f49-08048ec0c028.jpg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1030447782741926715/original/64af4b2c-b784-48e0-a0b8-f28a74d354ed.jpeg?im_w=720"
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-54120722/original/a81623b4-719f-4b32-8612-10accb614d94.jpeg?im_w=720"
  }
]
</script>
<template>
  <div
    class="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 p-6"
  >
    <div
      v-for="i in results"
      :key="i.image"
    >
      <img
        :src="i.image"
        class="aspect-square rounded-lg"
      >
      <p class="py-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ipsam, repudiandae officiis rerum cumque eius sunt assumenda nam.
      </p>
    </div>
  </div>
</template>
