下面给你一个**「Color Guideline 设计规范文档（Color Spec）」的标准结构化版本**。
格式已经是专业团队可直接使用的 Design System 文档骨架，不含色值，只含体系结构与说明。
你之后只需要填入 HEX 即可。

---

# 🎨 **Color Guideline / Design System — 色彩规范文档（科技极简版）**

---

# **1. Introduction（简介）**

### **1.1 Color Philosophy（色彩理念）**

本系统以**科技极简（Tech Minimal）+ 长时舒适学习**为核心原则。
目标是提供一个：

* 低刺激
* 高可读
* 情绪稳定
* 科学逻辑感强
* 支撑心流专注

的学习体验。

### **1.2 设计目标**

* 清晰的层级
* 一致的状态表达
* 减少视觉噪音
* 兼顾不同年龄用户
* 长时间使用不疲劳

---

# **2. Color Architecture（色彩架构）**

### **2.1 主色（Primary）— Teal（青绿）**

**角色：** 品牌核心色 + 主操作按钮
**特征：** 冷色、中低饱和、科技安稳
**层级：**

* Primary 100
* Primary 300
* Primary 500（主按钮）
* Primary 700（深色模式 / 强调）

---

### **2.2 强调色（Accent）— Aqua（亮青蓝）**

**角色：** 链接、次级按钮、轻强调
**特征：** 轻快但不喧闹
**层级：**

* Accent 200
* Accent 400
* Accent 600

---

### **2.3 中性色（Neutral）— 冷灰 + 米白**

**角色：** 背景、文本、容器
**特征：** 逻辑清晰与舒适阅读的基础
**层级：**

#### Background（背景）

* Background Base（米白）
* Background Subtle（浅冷灰）

#### Surface（界面层级）

* Surface 0（纯白）
* Surface 1（浅冷灰）
* Surface 2（中浅冷灰）

#### Border / Divider（边线）

* Border Subtle
* Border Default

#### Typography（文本）

* Text Primary（深冷灰）
* Text Secondary（中灰）
* Text Tertiary（浅灰）
* Text On Primary（白）

---

### **2.4 语义色（Semantic Colors）**

以“低刺激”为主，避免给学习者带压力。

#### Success（正确）

* Success Light
* Success Default
* Success Dark

#### Error（错误）

* Error Light
* Error Default
* Error Dark

#### Warning（警告）

* Warning Light
* Warning Default

#### Info（信息）

* Info Light
* Info Default

---

# **3. Light Mode（浅色模式）规范**

### **3.1 背景**

* 大面积使用 Background Base（米白）
* 保持柔和与纸张阅读感

### **3.2 主色 / 强调色**

* 主色控制使用频率
* 强调色用于轻交互，不抢视觉层级

### **3.3 文本可读性**

* 主要黑度不超过深冷灰（避免纯黑刺眼）
* 对比度满足 AA 或 AAA

---

# **4. Dark Mode（深色模式）规范**

### **4.1 背景**

* 深青灰主体（非纯黑）
* 保证科技感与信息清晰度

### **4.2 Surface 层级**

* Surface 层通过亮度变化区分，不依赖阴影

### **4.3 文本**

* 主要文本为白
* 次要与辅助文本为浅灰

### **4.4 色彩亮度调整**

* Primary 和 Accent 在深色模式下需整体提亮
* 保证按钮、图标的可见性

---

# **5. Component Color Rules（组件用色规范）**

### **5.1 Buttons 按钮**

#### Primary Button

* 背景：Primary 500
* 文本：白
* Hover：Primary 300
* Active：Primary 700
* Disabled：浅灰背景 + 浅灰文本

#### Secondary Button

* 背景：Surface 0
* 边框：Border Default
* 文本：Primary / Accent
* Hover：极浅青绿背景

#### Tertiary Button

* 文本：Primary
* Hover：极浅青绿背景

---

### **5.2 Inputs（输入框）**

* 默认：Surface 1 + Border Subtle
* Focus：Primary 边框 + 极浅青绿背景
* Disabled：Surface 1 更浅 + Border Subtle

---

### **5.3 Cards（卡片）**

* 背景：Surface 0
* Boundaries：1px Border 或轻阴影（不可同时）
* Hover：亮度提升 2–4%

---

### **5.4 Navigation（导航）**

* 背景：Surface 2
* 激活项：Primary 文本或浅 Primary 背景
* Hover：浅灰提升

---

### **5.5 Feedback（反馈）**

* 成功：Success Default
* 错误：Error Default
* 警告：Warning Light
* 信息：Info Default

---

# **6. State Colors（交互状态颜色）**

### **6.1 Hover**

* 减少饱和度波动，更多使用亮度变化
* 单色 Hover 一律采用浅层 Primary / Accent

### **6.2 Active（按下）**

* 加深亮度
* 避免大面积深色阴影

### **6.3 Disabled**

* 统一：浅灰背景 + 浅灰文本
* 不使用透明度过低的方式避免“不可见”

---

# **7. Accessibility（无障碍）**

### **7.1 对比度要求**

* 文本：AA（建议 AAA）
* 按钮文字：AAA
* 语义色：必须能在浅/深模式下都清晰识别

### **7.2 色依赖性**

* 所有语义信息需同时有：
  颜色 + 图标 + 文本

---

# **8. Usage Rules（使用规范）**

### **8.1 色彩比例**

* Neutral：80%
* Primary：8%
* Accent：5%
* Semantic：7%

### **8.2 避免的情况**

* 大面积使用主色
* 亮红饱和度过高
* 大面积渐变
* 多色并存（一次最多 2 色强调）

---

# **9. Token Structure（设计 Token 结构）**

```
color
 ├─ primary
 │   ├─ 100
 │   ├─ 300
 │   ├─ 500
 │   └─ 700
 ├─ accent
 │   ├─ 200
 │   ├─ 400
 │   └─ 600
 ├─ neutral
 │   ├─ background
 │   ├─ surface
 │   ├─ border
 │   └─ text
 ├─ semantic
 │   ├─ success
 │   ├─ error
 │   ├─ warning
 │   └─ info
 └─ states
     ├─ hover
     ├─ active
     └─ disabled
```

---

# 📘 **如果你需要下一步，我可以继续：**

### **（1）为这份文档加入“视觉示例图的文字描述”（每类组件都有示意）**

或

### **（2）帮你把整个色彩系统转成 Figma 格式结构（文字版，可复制到 Figma Tokens 插件）**

或

### **（3）你如果愿意给一点品牌关键词，我可以为你做 3 套主题方向（简约 / 灵动 / 学术）的扩展主题**

你希望继续哪一个？
