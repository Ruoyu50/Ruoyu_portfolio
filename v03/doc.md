下面给你 **「完整且专业的 Design System 文档目录结构（Design System ToC）」**。
它适用于：

* 中大型产品
* 有 Figma 设计库 + Token 管理
* 长期可扩张的系统
* 你这个单词学习类软件（Tech Minimal 风格）

目录结构是 **体系化骨架**，你未来只需在每一节里填内容即可。

---

# 📚 **Design System — 完整目录结构（ToC）**

---

# **0. 引言（Introduction）**

* Design System 的角色与目标
* 面向的产品类型与用户场景
* 品牌价值与体验基调（calm / tech / clarity / focus）
* 使用方式（设计师、前端、UED、产品如何使用）

---

# **1. Foundations（设计基础）**

基础是整个 DS 的根。

## **1.1 Color（颜色系统）**

### • 1.1.1 Core Colors（基础色）

### • 1.1.2 Semantic Colors（语义色）

### • 1.1.3 Light / Dark Mode（双模式规则）

### • 1.1.4 Accessibility（对比度规范）

### • 1.1.5 Brand Usage Guide（品牌色使用规约）

---

## **1.2 Typography（字体系统）**

### • 1.2.1 字体族（Font Family）

### • 1.2.2 字号（Font Size Scale）

### • 1.2.3 字重（Font Weights）

### • 1.2.4 Line Height（行高）

### • 1.2.5 复合排版样式（Typography Styles）

### • 1.2.6 可访问性与阅读体验

---

## **1.3 Spacing（间距系统）**

### • 1.3.1 基础 spacing scale

### • 1.3.2 布局与内容间距规则

### • 1.3.3 组件内部 padding 规则

---

## **1.4 Iconography（图标系统）**

### • 1.4.1 图标风格

### • 1.4.2 线条粗细规范

### • 1.4.3 尺寸与视口

### • 1.4.4 禁用写实、禁止多色（若适用）

---

## **1.5 Elevation（层级与投影）**

### • 1.5.1 Z-index scale（页面层级规律）

### • 1.5.2 阴影等级

### • 1.5.3 透明度

---

## **1.6 Radius（圆角系统）**

### • 1.6.1 Global radius scale

### • 1.6.2 组件使用规范（输入框/卡片/按钮）

---

## **1.7 Motion（动效系统）**

### • 1.7.1 动效原则（Calm / Minimal / Non-distracting）

### • 1.7.2 Duration scale（过渡时长）

### • 1.7.3 Easing（缓动规则）

### • 1.7.4 注意力模型

---

## **1.8 State System（状态系统）**

（就是你刚做的那部分）

### • 1.8.1 Hover

### • 1.8.2 Active

### • 1.8.3 Focus

### • 1.8.4 Selected

### • 1.8.5 Disabled

### • 1.8.6 Loading

---

# **2. Tokens（设计变量）**

## **2.1 Token Architecture（令牌体系结构）**

* Core tokens
* Semantic tokens
* Component tokens
* Alias tokens
* Mode tokens（light/dark）
* 继承关系图

## **2.2 Token Naming Rules（命名规范）**

* 统一分层命名
* 可扩展性原则

## **2.3 Token Change Management（变更规范）**

* 如何更新 Token
* 如何版本化
* 如何同步到代码

---

# **3. Components（组件系统）**

组件是与实际 UI 交互最紧密的部分。

## **3.1 Component Principles（组件设计原则）**

* 一致性
* 可扩展性
* 可访问性
* 可测试性

---

## **3.2 UI 组件（基础组件）**

### **3.2.1 Button（按钮）**

* Primary / Secondary / Tertiary
* State mapping
* 禁用情境（don’t）

### **3.2.2 Input（输入框）**

### **3.2.3 Select / Dropdown（选择器）**

### **3.2.4 Checkbox / Radio（选择控件）**

### **3.2.5 Switch（切换）**

### **3.2.6 Tag / Badge（标签与徽标）**

### **3.2.7 Card（卡片）**

### **3.2.8 Tabs（选项卡）**

### **3.2.9 Breadcrumb（面包屑）**

### **3.2.10 Modal（模态框）**

### **3.2.11 Toast（轻提示）**

### **3.2.12 Tooltip（文字提示）**

### **3.2.13 Table（表格）**

### **3.2.14 Navigation（导航栏/侧栏）**

---

## **3.3 App 专用组件（适配你的单词学习产品）**

### **3.3.1 Word Card（单词卡）**

* 阅读模式
* 记忆模式
* 差异视觉

### **3.3.2 Progress / Learning Bar（学习进度条）**

### **3.3.3 Note Block（例句 / 记忆笔记块）**

### **3.3.4 Quiz Components（测验题组件）**

---

# **4. Patterns（模式与模板）**

## **4.1 表单模式（Form Patterns）**

* 验证
* 错误展示规则
* 多步表单

---

## **4.2 列表模式（List Patterns）**

* 列表 + 分组
* 空状态（Empty State）

---

## **4.3 导航模式（Navigation Patterns）**

* 顶栏
* 底栏
* 侧栏
* Breadcrumb usage

---

## **4.4 卡片网格（Card Grid Patterns）**

* 单词学习卡网格
* Responsiveness

---

## **4.5 多端适配（Responsive Patterns）**

* Mobile
* Tablet
* Desktop
* Breakpoints

---

# **5. Usage Guidelines（使用规范）**

## **5.1 品牌一致性使用规则**

## **5.2 色彩禁忌（不要滥用品牌色）**

## **5.3 信息层级原则**

## **5.4 动效使用限制**

## **5.5 可访问性（WCAG 2.1+）**

---

# **6. Resources（资源）**

* Figma Library
* Tokens 文件
* 组件文档链接
* 版本日志（Changelog）

---

# 🎉 你现在拥有的是：

* 一个 **标准化、可扩展、专业级** 的 Design System 文档目录
* 可用于专业团队协作
* 完整涵盖 token、基础、组件、模式、规则
* 特别适配“科技清爽 + 专注学习体验”的应用

---

# 如果你愿意，我可以继续帮你：

### **E. 把整个目录结构压缩成一个「超简精华版」，适合放在 GitHub README / 文档首页**

或

### **F. 开始填“1. Foundations”中你需要的某一节内容（例如：Spacing / Motion / Accessibility）**

你想继续哪一个？
