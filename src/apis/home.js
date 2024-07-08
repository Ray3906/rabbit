import http from '@/utils/http'
 
//轮播图API
export function getbannerAPI(params = {}) {
  const { distributionSite = "1" } = params
  return http({
    url: '/home/banner',
    method: 'get',
    params: {
      distributionSite
    }
  })
}


//分类API
export function getCategoryAPI() {
  return http({
    url: 'home/category/head',
    method:'get',
  })
}

// 新鲜好物API

export function findNewAPI() {
  return http({
    url: '/home/new',
    method:'get',
  })
}

//hot人气推荐API
export function getHotAPI() {
  return http({
    url: '/home/hot',
    method:'get',
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}