import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const imgPath = path.join(process.cwd(), 'sources', 'img', 'my_wechat.jpg')
  if (!fs.existsSync(imgPath)) {
    res.status(404).send('Not found')
    return
  }

  const stat = fs.statSync(imgPath)
  res.setHeader('Content-Type', 'image/jpeg')
  res.setHeader('Content-Length', stat.size)

  const stream = fs.createReadStream(imgPath)
  stream.pipe(res)
}
