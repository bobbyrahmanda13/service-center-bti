<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])

const logoItemo='i-simple-icons-discord'
</script>
<template>
  <UHeader>
    <template #title>
      <UPageLogos :item="logoItemo" class="h-6 w-auto" title="Nuxt UI"/>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UButton color="neutral" variant="ghost" to="https://github.com/nuxt/ui" target="_blank" icon="i-simple-icons-github"
        aria-label="GitHub" />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
