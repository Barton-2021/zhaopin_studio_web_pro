/*
 * @Author: Chen_陈工
 * @Date: 2025-09-29 22:42:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2025-09-29 23:01:15
 * @FilePath: \zhaopin_studio_web_pro\pages\index.js
 */
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../src/components/Header'
import JobCard from '../src/components/JobCard'

const jobs = [
  {
    id: 'frontend',
    title: '前端开发工程师',
    summary: '负责公司产品前端开发与性能优化，熟悉 React/Next.js，具备良好的组件化和样式能力。',
    bullets: ['鸿蒙/Arkts','React / Next.js', 'HTML/CSS/TypeScript', '性能优化 & 无障碍']
  },
  {
    id: 'iot',
    title: '物联网全栈开发工程师',
    summary: '负责物联网设备接入、后端服务与前端展示，熟悉嵌入式通讯协议与云端服务。',
    bullets: ['C/C++','嵌入式/设备接入', 'Node.js / Python 后端', 'MQTT / WebSocket']
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>广州智尘梦科技工作室 · 招纳贤才</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <main className="container">
        <section className="hero">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            广州智尘梦科技工作室
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            招纳贤才 — 与我们一起用技术照亮未来
          </motion.p>
        </section>

        <section id="jobs" className="jobs">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            在招岗位
          </motion.h2>

          <div className="job-grid">
            {jobs.map((j, i) => (
              <div key={j.id}>
                <JobCard job={j} index={i} />
                <div className="apply-note">
                  {/* <a className="apply-cta" href="#contact">扫码加微信投递简历</a> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="culture" className="culture">
          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            我们的文化
          </motion.h2>
          <motion.p initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
            我们崇尚开放、求实与创新，鼓励探索前沿技术并在小团队中承担实质影响力。
          </motion.p>
        </section>

        <section id="contact" className="contact">
          <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
            联系我们
          </motion.h2>

          <div className="contact-grid">
            <div className="contact-form">
              <p><strong>联系人：</strong> 陈工</p>
              <p><strong>手机：</strong> 189-3343-2872</p>
              <p><strong>邮箱：</strong> 2969823274@qq.com</p>
              <p style={{color:'var(--muted)',marginTop:8}}>（请将你的简历以邮件方式发送至上方邮箱，或扫码添加微信投递）</p>
            </div>

            <div className="wechat">
              <p>扫码添加微信投递简历，后续我们将邀请你加入招聘交流群或安排面试</p>
              <img src="/api/my_wechat" alt="微信二维码" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} 广州智尘梦科技工作室 — 招纳贤才
        {' '}
        <a className="icp-link" href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备2025387170号-2</a>
      </footer>
    </>
  )
}
