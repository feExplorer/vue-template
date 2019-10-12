// 上传文件
export const uploadFile = formData => {
  const res = service.request({
    method: 'post',
    url: '/upload',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return res
}
