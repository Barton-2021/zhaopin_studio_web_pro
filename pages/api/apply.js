import fs from 'fs'
import path from 'path'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

const uploadsDir = path.join(process.cwd(), 'uploads')
const dataDir = path.join(process.cwd(), 'data')
const applicationsFile = path.join(dataDir, 'applications.json')

function ensureDirs() {
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir)
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
  if (!fs.existsSync(applicationsFile)) fs.writeFileSync(applicationsFile, '[]')
}

export default async function handler(req, res) {
  ensureDirs()

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const form = formidable({ multiples: false, uploadDir: uploadsDir, keepExtensions: true })

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: '解析表单失败' })
    }

    const name = fields.name || ''
    const email = fields.email || ''
    const jobId = fields.jobId || ''
    const resume = files.resume

    if (!name || !email || !resume) {
      return res.status(400).json({ error: '缺少必要字段' })
    }

    const record = {
      id: Date.now().toString(),
      name,
      email,
      jobId,
      resume: path.relative(process.cwd(), resume.path).replace(/\\/g, '/'),
      createdAt: new Date().toISOString(),
    }

    try {
      const raw = fs.readFileSync(applicationsFile, 'utf8')
      const arr = JSON.parse(raw || '[]')
      arr.push(record)
      fs.writeFileSync(applicationsFile, JSON.stringify(arr, null, 2))
      return res.status(200).json({ ok: true })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: '保存失败' })
    }
  })
}
