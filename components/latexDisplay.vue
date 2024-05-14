<script lang="ts" setup>
  import { ref,onMounted } from 'vue'
  import katex from 'katex'
  const rawHTML = ref('')
  const latex = ref('')
  const renderLatex = () => {
    rawHTML.value = katex.renderToString(latex.value, {
      throwOnError: false,
      displayMode: true
    })
  }
  const updateLatex = (newLatex: string) => {
    latex.value = newLatex
    renderLatex()
  }
  onMounted(() => {
    renderLatex()
  })
</script>

<template>
  <span ref="latex" class="katex" v-html="rawHTML"></span>
</template>