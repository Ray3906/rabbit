<script setup>
import LayoutNav from './components/layout-nav.vue'
import LayoutHeader from './components/layout-head.vue'
import LayoutFooter from './components/layout-foot.vue'
import LayoutFixed from './components/layout-fixed.vue'


import {onMounted} from 'vue'
import { useCategoryStore } from '@/stores/category'
const useStore =useCategoryStore()
  onMounted(()=>{
    useStore.getCategory()
  })
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>