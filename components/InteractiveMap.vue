<script setup>
import { ref } from 'vue'
const zoom = ref(6)
</script>
<template>
  <div class="relative size-full">
    <LMap
      ref="map"
      :zoom="zoom"
      :center="[47.21322, -1.559482]"
    >
      <LTileLayer
        url="https://cartodb-basemaps-c.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>
<style>
.leaflet-left  {
  left: unset;
  right: 1rem;
}
.leaflet-top  {
  top: 4rem;
}
</style>
