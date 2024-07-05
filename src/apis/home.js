import http from '@/utils/http'
 
//轮播图API
export function getbannerAPI() {
  return http({
    url: '/home/banner',
    method: 'get'
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