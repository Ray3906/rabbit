import { getCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export function useCategory() {
  //category
const categoryData = ref({})
const route = useRoute()
const getCategory = async (id =route.params.id) => {
  const res = await getCategoryAPI(id)
  categoryData.value = res.result
}

onMounted(() => {
  getCategory()
})

onBeforeRouteUpdate((to) => {
  console.log(to)
  
  getCategory(to.params.id)
})
  return {
     categoryData
   }
}