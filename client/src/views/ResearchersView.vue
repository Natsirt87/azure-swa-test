<script setup>
import { VaCard, VaCardTitle, VaCardContent } from 'vuestic-ui';
</script>

<template>
  <main>
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-20 px-10 max-w-5xl">
        
        <va-card class="flex-initial md:col-span-2 xl:col-span-3">
          <va-card-title>Title</va-card-title>
          <va-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </va-card-content>
        </va-card>

        <va-card class="flex-initial xl:col-span-2">
          <va-card-title>Title</va-card-title>
          <va-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </va-card-content>
        </va-card>

        <va-card class="flex-initial">
          <va-card-title>Title</va-card-title>
          <va-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </va-card-content>
        </va-card>
        
      </div>
    </div>
  </main>
</template>
