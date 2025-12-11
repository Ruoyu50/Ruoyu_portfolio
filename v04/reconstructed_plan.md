## 📚 单词卡App MVP 制作方案

基于您的核心功能和项目清单，我将MVP的范围界定为：**一个支持自定义卡片、AI生成叙事场景并能实时查词的记忆增强工具。**

### I. 概念与商业基础

#### Problem Statement（解决的问题）
How might we allow college students to **more effectively and deeply memorize complex information (beyond single words)** using context, personalized narratives, and self-made content?

> *如何才能让大学生通过上下文、个性化叙事和自制内容，**更有效、更深入地记住复杂信息（不限于单个单词）**？*

#### Value Proposition（价值主张）
**Interactive AI Storytelling Flashcards** is the **memory enhancement platform** that allows **college students and lifelong learners** to **transform isolated facts into cohesive, memorable narratives, significantly reducing study time and improving retention.**

> **交互式AI叙事单词卡**是**记忆增强平台**，它能让**大学生和终身学习者**将**孤立的事实转化为连贯、易记的叙事，从而显著减少学习时间并提高记忆保留率。**

#### Key Features (MVP 范围)
1.  **自定义通用卡片制作模板：**允许用户输入“词条/概念”和“定义/解释”。
2.  **AI叙事生成：**根据用户输入的卡片内容（或多个卡片），生成一段富有场景感的、符合科学原理的叙事性对话或小故事。
3.  **实时查阅与备注（学习模式）：**
    * 在卡片学习界面，可选中词条，**实时调取字典预览**。
    * 提供一个**轻量级文本输入框**供用户快速添加笔记/备注到该卡片。
4.  **卡片堆（Deck）管理：**创建、命名和浏览不同的卡片组。

#### IA - Highlight MVP Features (2x2 Feature Exercise 示例)

| 高价值 / 核心体验 | 低价值 / 辅助功能 |
| :--- | :--- |
| **高频** | **AI 叙事生成** (High Value/High Effort/Core) | **实时字典预览** (High Value/Low Effort/Essential) |
| **低频** | **高级记笔记功能（富文本）** (Low Value/High Effort/Nice-to-have) | **卡片堆管理/删除** (Low Value/Low Effort/Basic Utility) |

> **MVP 重点关注：AI 叙事生成、实时字典预览、自定义卡片模板。**

#### MVP Features - 10-20 Wireframes

您需要为以下**四个关键流程**制作线框图：
1.  **新卡片制作流程：**从选择模板 $\rightarrow$ 输入内容 $\rightarrow$ **AI 叙事生成** $\rightarrow$ 保存。
2.  **学习模式流程（核心）：**进入卡片堆 $\rightarrow$ 浏览卡片 $\rightarrow$ **实时查词** $\rightarrow$ **添加轻量备注** $\rightarrow$ 翻转/下一张卡片。
3.  **卡片堆管理流程：**主页 $\rightarrow$ 创建新卡片堆 $\rightarrow$ 编辑/重命名卡片堆。
4.  **AI叙事编辑/查看流程：**卡片学习界面 $\rightarrow$ 查看AI生成的故事 $\rightarrow$ 编辑故事（如果允许）。

---

### II. 项目执行与展示网站结构

您的展示网站（Case Study Project）应遵循以下结构，以满足您的所有项目清单：

| 网站/项目章节 | 对应项目清单项 | 产出内容（MVP 重点） |
| :--- | :--- | :--- |
| **1. Overview & Problem** | Problem Statement, Value Proposition | 简洁说明您要解决的记忆问题和您的独特解决方案。 |
| **2. Research & Discovery** | Competitors, Personas, Empathy Map, User Journey | **竞品分析**（直接：Quizlet, Anki；间接：Duolingo, Notion, AI 写作工具）。展示 1-2 个用户画像（Persona）和他们在学习中的痛点。 |
| **3. Strategy & Branding** | Brand Strategy (Step 1 & 2) | **品牌策略：**包括 Vision, Mission, Personality (例如：*Witty, Trustworthy, Innovative*)。展示**3 个风格版本**（Stylescapes），包含各自的Logo、色彩、字体、UI元素和应用于一个线框图的示例。 |
| **4. Information Architecture** | IA, MVP Features (2x2) | 展示 **2x2 Feature Matrix**，明确 MVP 功能。绘制一个简单的**应用地图 (Sitemap)**，突出 MVP 流程。 |
| **5. Design & Prototyping** | MVP Wireframes (16张), 10 Microinteractions | **线框图 (Wireframes)：**展示 4 个关键流程的 16 张中保真度线框图。**高保真原型：**应用您选定的一个品牌风格，制作可交互原型。突出展示**10 个微交互**（例如：拖动卡片、实时查词弹窗、AI生成加载动画、点赞/保存备注的反馈）。 |
| **6. User Testing & Feedback** | Interview Discussion Guide, Feature Ranking Board, Conduct User Testing | **测试准备：**展示您的讨论指南和功能优先级排序板。**测试结果：**展示用户测试的关键发现和学习到的教训（*可以放置录屏链接*）。 |
| **7. Business Plan & Next Steps** | Create a business plan | 简述商业模式（如： freemium 免费增值模式，基础卡片和AI功能收费）。总结项目成果和未来的迭代计划。 |

---

### III. 品牌策略 (Brand Strategy)

#### Step 1: 基础定义

* **Vision Statement (愿景):** To reinvent memorization, turning rote learning into a delightful, contextual, and deeply human experience.
    *(重塑记忆方式，将死记硬背转变为一种愉快、情境化和深度人性化的体验。)*
* **Mission Statement (使命):** To provide an accessible, AI-powered tool that bridges the gap between fragmented information and cohesive understanding for every learner.
    *(提供一个无障碍、AI驱动的工具，为每位学习者弥合零散信息与连贯理解之间的鸿沟。)*
* **Brand Personality/Characteristics (品牌个性):** **Inventive** (创新), **Trustworthy** (值得信赖), **Narrative** (叙事性), **Supportive** (支持性), **Witty** (诙谐)。
* **Design Principles (设计原则):**
    1.  **Clarity over Density:** 信息清晰优先于信息堆砌。
    2.  **Contextual Flow:** 设计应支持内容在不同情境下的流畅切换（如查词和故事）。
    3.  **Encourage Creation:** 简化自制卡片和AI生成内容的流程，鼓励用户创作。

#### Step 2: 3 Versions: Stylescapes (风格板)

| 元素 | 版本 A: 科学未来 (Sci-Fi Future) | 版本 B: 叙事极简 (Narrative Minimal) | 版本 C: 学院复古 (Academic Retro) |
| :--- | :--- | :--- | :--- |
| **品牌名称** | **SyntheMind** | **Co/Text** | **LexiForge** |
| **Logo** | 几何抽象标志，象征神经网络/连接 | 简约的引号或对话气泡符号 | 盾形徽章与开放的书本结合 |
| **主色调** | **深海蓝、电光紫** (科技感、夜间模式) | **米白、森林绿** (自然、平静) | **奶油黄、酒红** (温暖、经典) |
| **字体** | Sans-Serif (如 **Space Mono** 或 **Poppins**) | Serif (如 **Tiempos Fine**) | Slab Serif (如 **Rockwell**) |
| **图标/图案** | 虚线、点阵、故障艺术 (Glitch) 效果 | 简单的线条插画、手写体元素 | 墨水溅射、皮革纹理、经典花边 |
| **摄影/图像** | 抽象的 AI 渲染图，光线轨迹 | 真人学习场景，柔焦、自然光 | 泛黄的图书馆、旧教科书封面 |
| **UI 元素** | 圆角按钮，**发光**效果的焦点元素 | 锐角按钮，**分层**卡片式设计 | **阴影**效果的按钮，**书签**状标签 |
| **线框图应用** | *应用发光紫强调AI生成区域* | *应用绿色高亮上下文查词* | *应用酒红背景色强调重要提示* |