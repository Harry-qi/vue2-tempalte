import request from '@/utils/request'
export default {
  // 登
  login(data) {
    return request.post('/api/manage/user/login', data)
  }
}
