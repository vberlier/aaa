<script setup lang="ts">
const minimized = ref(false)

const el = ref(null)
const { y, directions } = useScroll(el)
watchEffect(() => {
  if (directions.top || directions.bottom) {
    minimized.value = true
  }
  if (directions.top && y.value < 64) {
    minimized.value = false
  }
})
</script>
<template>
  <div class="h-dvh overflow-hidden landscape:flex landscape:flex-row-reverse landscape:overflow-auto">
    <div class="relative h-2/3 overflow-hidden bg-gray-300 landscape:sticky landscape:top-0 landscape:h-dvh landscape:basis-1/3">
      <div
        class="flex h-full items-center justify-center"
        @pointerenter="minimized = false"
      >
        <InteractiveMap />
      </div>
      <div class="absolute left-0 top-0 z-[9999] flex h-16 items-center pl-6 landscape:hidden">
        <ULink
          to="/"
          class="text-2xl font-bold dark:text-gray-900"
        >
          aaa
        </ULink>
      </div>
      <div class="absolute right-4 top-4 z-[9999] flex rounded-lg bg-white p-1 shadow-xl dark:bg-gray-900">
        <ButtonColorMode />
      </div>
    </div>
    <div
      ref="el"
      :class="minimized ? 'top-1/4' : 'top-2/3'"
      class="absolute inset-0 z-[9999] bg-white pb-24 transition-[top] duration-300 portrait:overflow-auto landscape:relative landscape:top-0 landscape:flex-1 landscape:transition-none dark:bg-gray-900"
    >
      <div
        :class="minimized ? 'pt-16' : 'pt-0'"
        class="relative bg-white transition-[padding-top] duration-300 landscape:pt-0 landscape:transition-none dark:bg-gray-900"
      >
        <header class="fixed inset-x-0 flex h-20 items-center justify-between gap-6 bg-white px-6 portrait:bottom-0 landscape:sticky landscape:top-0 dark:bg-gray-900">
          <ULink
            to="/"
            class="text-2xl font-bold portrait:hidden"
          >
            aaa
          </ULink>
          <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            size="xl"
            placeholder="Recherche..."
            class="flex-1 rounded-full"
            :ui="{rounded: 'rounded-full'}"
          />
        </header>
        <slot />
      </div>
    </div>
  </div>
</template>
