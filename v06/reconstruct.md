# 📚 单词卡 App（重构版）完整方案

**目标：完成 Checklist（不含 Wireframe & User Testing）**

---

## 一、Problem Statement

### 作业可用版本（清晰、不激进）

**How might we help college students engage with vocabulary in a way that feels natural, contextual, and less mentally exhausting than traditional memorization-based methods?**

> 我们如何帮助大学生以一种**更自然、有情境、且比传统死记硬背更不消耗意志力**的方式接触和吸收词汇？

✅ 满足 HMW
✅ 有明确对象（college students）
✅ 不攻击传统教育体系
✅ 为你后面的设计留足空间

---

## 二、Value Proposition

**Contextual Flashcards** is the **language experience platform** that allows **college students** to **encounter and internalize words through evolving everyday situations, rather than repetitive memorization or gamified pressure.**

拆解给老师看时你可以说：

* **What**：language experience platform
* **Customer**：college students
* **Value**：

  * encounter（遇见）
  * internalize（内化）
  * everyday situations（生活情境）
* **Differentiation**：not repetition, not gamification

---

## 三、Key Features（作业级表达）

> ⚠️ 注意：这里的 feature 是“系统能力”，不是 UI 按钮

### 1. Context-Based Flashcards

* 每张单词卡都绑定在一个具体情境中
* 单词不作为孤立信息存在

### 2. Non-Repetitive Daily Scenarios

* 系统每天提供不同的生活情境
* 避免机械复习和重复暴露

### 3. Narrative Continuity

* 情境之间存在轻度叙事关联
* 帮助用户形成“经历感”而非“学习感”

### 4. Optional Reference Support

* 用户可在需要时查看词义或解释
* 但系统不主动测试或提醒

> **总结一句话**：
> 单词不是被“背会”的，而是在不同生活片段中逐渐熟悉的。

---

## 四、Competitors

### Direct Competitors

* Anki
* Quizlet
* Memrise

### Secondary Competitors

* Duolingo
* Drops
* Lingvist

### Indirect Competitors

* Watching TV series
* Reading novels
* Studying abroad
* Note-taking tools (Notion, Apple Notes)

---

## 五、Competitor Feature Analysis & Summary

| 产品       | 学习方式 | 情境  | 重复机制 | 情感压力 | 总结       |
| -------- | ---- | --- | ---- | ---- | -------- |
| Anki     | 强制回忆 | ❌   | 高    | 中    | 高效但消耗意志力 |
| Quizlet  | 测试型  | ❌   | 高    | 中    | 偏应试      |
| Duolingo | 游戏化  | 伪情境 | 高    | 高    | 容易产生比较焦虑 |
| 看美剧      | 自然接触 | ✅   | 低    | 低    | 无结构引导    |
| **本产品**  | 情境体验 | ✅   | 低    | 低    | 平衡结构与自然性 |

---

## 六、Personas（1–2 个即可）

### Persona 1：College Student Living Between Languages

* 年龄：19–24
* 背景：非母语环境学习外语
* 行为：

  * 看得懂一些内容
  * 但不愿意背单词
* 痛点：

  * 学习工具太“像学习”
  * 容易产生心理疲劳

---

## 七、Empathy Map

✅（你已完成，这里只需在方案中引用）

你可以在文案中总结一句：

> 用户不是缺乏能力，而是对传统记忆方式产生情绪抵触。

---

## 八、User Journey（高层，不涉及 wireframe）

1. 打开应用
2. 进入当天的语言情境
3. 在阅读或观察中自然接触单词
4. 可选择性查阅含义
5. 情境结束，用户离开
6. 次日进入新的、不重复的情境

---

## 九、Business Plan（轻量即可）

### Product Positioning

* 非应试导向
* 非游戏化学习
* 更像“语言体验工具”

### Business Model

* Freemium

  * 免费：基础情境
  * 付费：更多情境类型 / 更深叙事

### Long-term Value

* 用户粘性来自体验连续性
* 而非学习压力或奖励机制

---

## 十、Information Architecture（文字版）

* Home

  * Today’s Situation
* Situation View

  * Context Content
  * Optional Word Reference
* Archive

  * Past Situations (read-only)
* Settings

  * Language preferences

---

## 十一、IA – MVP Features（2x2 Value / Effort）

|                | Low Effort | High Effort |
| -------------- | ---------- | ----------- |
| **High Value** | 情境化单词呈现    | 跨日叙事系统      |
| **Low Value**  | 基础卡片管理     | 高度自定义设置     |

👉 **MVP 聚焦**：

* 情境呈现
* 非重复体验
* 最小参考支持

---

## 十二、Brand Strategy

### Step 1

#### Vision Statement

To make language feel like part of everyday life, not a task to complete.

#### Mission Statement

To design a calm, non-judgmental space where users encounter language naturally through situations.

#### Brand Personality

* Calm
* Observational
* Human
* Non-instructional

#### Design Principles

1. No scores, no rankings
2. Language as atmosphere
3. Minimal guidance, maximum trust

---

### Step 2 — Stylescapes（作业友好版）

你可以做 **3 个方向**，但都围绕“非学习感”：

#### Direction A – Quiet Minimal

* 色彩：灰白 / 米色
* 字体：Humanist Sans
* 情绪：安静、留白

#### Direction B – Narrative Editorial

* 色彩：深绿 / 暖灰
* 字体：Serif + Sans
* 情绪：像读杂志

#### Direction C – Contemporary Academic

* 色彩：酒红 / 奶油
* 字体：Slab Serif
* 情绪：理性、可信

---

## 十三、Storytelling（你这项目的加分项）

你可以在最后写一句总结：

> This project explores what happens when we stop trying to teach language, and instead design spaces where language is simply allowed to exist.

---

# ✅ Checklist 覆盖情况（给你一个安心确认）

* ✅ Problem Statement
* ✅ Value Proposition
* ✅ Key Features
* ✅ Competitors（Direct / Secondary / Indirect）
* ✅ Competitor Analysis
* ✅ Personas
* ✅ Empathy Map（你已完成）
* ✅ User Journey
* ✅ Business Plan
* ✅ IA
* ✅ MVP Feature Prioritization
* ✅ Brand Strategy Step 1 & 2

❌ Wireframes（你已完成，暂不动）
❌ User Testing（后面再做）

---
