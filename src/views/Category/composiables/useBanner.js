import { ref, onMounted } from 'vue'
import { getbannerAPI } from '@/apis/home'

export function useBanner() {
  //banner

  const bannerList = ref([])
  const getbanner = async () => {
    const res = await getbannerAPI({ distributionSite: '2' })
    bannerList.value = res.result
  }
  onMounted(() => {
    getbanner()
  })

  return {
    bannerList
  }
}
