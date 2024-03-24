<template>
  <div class="flex h-screen flex-col overflow-auto">
    <!-- <header
      class="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50"
    >
      <UContainer class="flex items-center justify-between gap-3 h-16">
        <div class="lg:flex-1 flex items-center gap-1.5">
          <ULink
            to="/"
            class="flex-shrink-0 font-bold text-xl flex items-end gap-1.5 text-gray-900 dark:text-white"
            aria-label="Logo"
          >
            aaa
          </ULink>
        </div>
        <ul class="items-center gap-x-8 hidden lg:flex">
          <li class="relative">
            <ULink
              class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
              to="/getting-started"
            >
              Docs
            </ULink>
          </li>
          <li class="relative">
            <a
              class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
              href="/pro"
            >
              Pro
            </a>
          </li>
          <li class="relative">
            <a
              class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary"
              href="/releases"
            >
              Releases
            </a>
          </li>
        </ul>
        <div class="flex items-center justify-end lg:flex-1 gap-1.5">
          <ButtonColorMode />
          <ButtonHamburgerMenu class="lg:hidden" />
        </div>
      </UContainer>
    </header>
-->
    <slot />
  </div>
</template>
