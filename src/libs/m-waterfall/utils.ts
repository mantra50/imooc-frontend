/**
 * 从 itemElements 中抽离出所有的 img 标签
 * @param itemElements
 * @returns imgElements
 */
export const getImgElements = (els: HTMLDivElement[]) => {
  const imgElements: HTMLImageElement[] = []
  els.forEach((el) => {
    imgElements.push(...el.getElementsByTagName('img'))
  })
  return imgElements
}

/**
 * 获取所有 img 的 src
 * @param els imgElements
 * @returns img 的 src 数组
 */
export const getImgSrcs = (els: HTMLImageElement[]) => els.map((el) => el.src)

/**
 * 监听图片渲染完成
 * @param els imgSrcs
 */
export const onComplateImgs = (imgs: string[]) => {
  const promisArr = [] as Promise<{ img: string; index: number }>[]
  imgs.forEach((img, index) => {
    promisArr.push(
      new Promise<{ img: string; index: number }>((resolve, reject) => {
        const imgObj = new Image()
        imgObj.src = img
        imgObj.onload = () => {
          resolve({ img, index })
        }
        imgObj.onerror = () => {
          reject({ img, index })
        }
      })
    )
  })
  return Promise.all(promisArr)
}
