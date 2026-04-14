# 企微故事收集机器人

## 部署到 Render

### 1. 上传到 GitHub
创建仓库，上传以上 4 个文件

### 2. 连接 Render
1. 访问 [render.com](https://render.com) 用 GitHub 登录
2. 点击 **New +** → **Blueprint**
3. 选择你的仓库

### 3. 配置环境变量
在 Environment 中添加：
- BOT_ID: `aibsEQWD0FHDE-wCxcgB82dUE8LR0EFx50n`
- SECRET: `FWa51VT6ZSEwaScxUrMjDHiTkDf2qrva13wGsmxwnAQ`
- FORM_URL: `https://doc.weixin.qq.com/smartsheet/form/1_wpl9nRCgAAXoMer-xP2XtyxBHwulXOjw_bd43d1`

### 4. 部署完成
访问 `https://你的服务名.onrender.com/health` 验证
