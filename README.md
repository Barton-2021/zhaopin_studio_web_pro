# zhaopin_studio_web_pro
基于next.js的工作室招聘官网

本仓库包含一个最小的 Next.js 招聘官网模板，项目名：广州智尘梦科技工作室 — 招纳贤才。

主要特性：
- 固定顶部导航栏（始终固定在页面顶部）
- 两个岗位展示：前端开发工程师、物联网全栈开发工程师
- 使用 Framer Motion 做入场动画，使用 CSS 做基础特效

如何运行：
1. 在项目根目录运行：npm install
2. 启动开发服务器：npm run dev

默认端口：3000

后端与上传：
- 在每个岗位下的“申请职位”表单会 POST 到 `/api/apply`，接收 `name,email,jobId,resume`。
- 上传的简历会存放在项目根的 `uploads/` 文件夹（已在 `.gitignore` 中忽略）。
- 申请记录会写入 `data/applications.json`，便于本地查看或后续同步至数据库。


