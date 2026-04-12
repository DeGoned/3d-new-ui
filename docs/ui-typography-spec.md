# ProtoTi UI 字体设计规范

更新时间：2026-04-09

## 1. 适用范围

本规范适用于以下页面与区域：

- 个人中心 React 页面：`/`
- 报价管理页：`/public/quote-manage.html`
- 购物车页：`/public/cart.html`
- 订单确认页：`/public/order-confirmation.html`

本规范重点约束：

- 页面主标题
- 信息卡标题
- 模型文件标题
- 模型数量、价格、交期
- 订单汇总区文字
- 地址、物流、优惠券等右侧信息卡文字

## 2. 全局基础规范

### 2.1 字体家族

- 主字体：`Inter, sans-serif`

### 2.2 字体颜色层级

| 层级 | 用途 | 颜色建议 |
| --- | --- | --- |
| 一级正文 | 页面标题、重要金额、模型文件名 | `text-slate-900` |
| 二级正文 | 常规信息、说明性文案 | `text-slate-500` |
| 三级辅助 | 小标签、补充提示、输入辅助 | `text-slate-400` |
| 强调信息 | 主价格、可点击重点、激活状态 | `text-primary` |
| 成功/优惠 | 优惠金额、优惠提示 | `text-emerald-600` |
| 危险提示 | 删除、错误、负反馈 | `text-red-500` |

### 2.3 字重规则

- `font-extrabold / 800`：个人中心主欢迎标题
- `font-bold / 700`：页面标题、模型标题、主要价格、信息卡标题
- `font-semibold / 600`：数量值、次级强调信息、行内标签值
- `font-medium / 500`：普通正文、信息说明

## 3. 字体 Token

| Token 名称 | 字号 | 字重 | 颜色 | 典型用途 |
| --- | --- | --- | --- | --- |
| `PT-H1` | 40px | 800 | `text-slate-900` | 个人中心各页面主标题 |
| `PT-H2` | 24px | 700 | `text-slate-900` | 报价管理/购物车/订单确认主标题 |
| `PT-CARD-TITLE` | 14px | 700 | `text-slate-900` | `Order Summary` 等右侧信息卡标题 |
| `PT-BODY` | 14px | 500 | `text-slate-500` | 普通正文、说明性文案 |
| `PT-BODY-SM` | 13px | 600 | `text-slate-500` | 统计卡标签、小型说明 |
| `PT-META` | 11px | 500 | `text-slate-500` | 模型元信息、附件说明、备注标题 |
| `PT-CAPTION` | 10px | 700 | `text-slate-400` | 小型大写标签、估算交期、字段标题 |
| `PT-STAT` | 32px | 900 | `text-slate-900` | 个人中心统计数字 |
| `PT-FILE-TITLE` | 14px | 700 | `text-slate-900` | 模型文件名 |
| `PT-QTY` | 16px | 600 | `text-slate-900` | 单个模型数量值 |
| `PT-PRICE` | 16px | 700 | `text-primary` | 单个模型价格 |
| `PT-TOTAL` | 30px | 700 | `text-primary` | 订单汇总总价 |
| `PT-ORIGINAL-TOTAL` | 20px | 600 | `text-slate-400` | 使用优惠券后的原价划线金额 |

## 4. 页面级规范

### 4.1 个人中心

#### 页面主标题

- 适用页面：
  - Dashboard
  - Orders
  - Coupons
  - Address
  - Settings
- 统一使用：`PT-H1`
- 当前标题示例：
  - `Welcome back, Alex.`
  - `Your Orders.`
  - `Your Rewards.`
  - `Address Management.`
  - `Account Settings.`

#### 主标题下说明文案

- 字号：17px 左右
- 字重：500
- 颜色：`text-slate-500`
- 用途：解释当前页面作用、引导用户完成操作

#### 左侧边栏

- 用户姓名：16px / 700 / `text-slate-900`
- 等级标签：12px / 600 / uppercase / `text-slate-500`
- 导航文字：14px / 600
- 激活状态：14px / 600 / `text-primary`

#### 统计卡片

- 卡片标题：13px / 600 / `text-slate-500`
- 统计数字：32px / 900 / `text-slate-900`
- 操作文案：12px / 700 / uppercase / `text-primary`

### 4.2 报价管理页

#### 页面标题

- 标题：`My Quotes List`
- 使用：`PT-H2`

#### 模型列表表头

- 字号：10px-11px
- 字重：700
- 样式：大写 + 宽字距
- 颜色：`text-slate-500`

#### 单个模型行

- 文件名：`PT-FILE-TITLE`
- 尺寸 / 体积：10px / 500 / `text-slate-500`
- 配置主信息：12px / 700 / `text-slate-900`
- 配置次级信息：10px / 500 / `text-slate-500`
- 数量输入值：`PT-QTY`
- 模型价格：`PT-PRICE`
- 交期：10px / 500 / uppercase / `text-slate-500`
- 操作按钮文字：10px / 500-600

#### 右侧信息卡

- 卡标题：`PT-CARD-TITLE`
- 输入框文字：14px / 500 / `text-slate-700`
- 地址卡正文：11px / 500 / `text-slate-600`
- 物流名称：12px / 700 / `text-slate-900`
- 物流 badge：9px / 700 / uppercase / `text-primary`
- 汇总行文字：14px / 500
- 总价标题：18px / 700 / `text-slate-900`
- 总价金额：`PT-TOTAL`

### 4.3 购物车页

#### 页面标题

- 标题：`Shopping Cart`
- 使用：`PT-H2`

#### 标题右侧数量统计

- 字号：14px
- 字重：500
- 颜色：`text-slate-500`

#### 模型卡

- 文件名：`PT-FILE-TITLE`
- 尺寸：14px / 500 / `text-slate-500`
- 体积/面积：14px 或 12px / 500 / `text-slate-400`
- 材料主行：14px / 500 / `text-slate-900`
- 材料次行：14px / 500 / `text-slate-500`
- 数量输入值：`PT-QTY`
- 模型价格：`PT-PRICE`
- 单价：11px / 500 / `text-slate-400`
- 交期：10px / 500 / uppercase / `text-slate-500`
- 备注 / 附件标题：14px / 500 / `text-slate-500`

#### 右侧汇总区

- 必须与报价管理页右侧卡片保持同一套字体层级
- `Order Summary` 标题：`PT-CARD-TITLE`
- `Estimated Production`：`PT-CAPTION`
- 汇总行：14px / 500
- 总价标签：18px / 700
- 总价金额：`PT-TOTAL`

### 4.4 订单确认页

#### 页面标题

- 标题：`Order Details`
- 使用：`PT-H2`

#### 订单号

- 字号：12px
- 字重：500
- 颜色：`text-slate-500`

#### 单个模型卡

- 文件名：`PT-FILE-TITLE`
- 模型编号：11px / 500 / `text-slate-500`
- `Qty` 标签：9px / 700 / uppercase / `text-slate-400`
- 数量值：`PT-QTY`
- 模型价格：`PT-PRICE`
- 单价：11px / 500 / `text-slate-400`
- 交期：10px / 500 / uppercase / `text-slate-500`
- 折叠展开按钮：11px / 700 / uppercase / `text-primary`

#### 模型折叠区

- 尺寸 / 材料 / 工艺信息：11px / 500 / `text-slate-500`
- 行内字段名称：11px / 600 / `text-slate-700`
- 附件标题：11px / 500 / `text-slate-500`
- 备注标题：11px / 500 / `text-slate-500`

#### 折叠状态角标

- 附件角标：
  - 红底白字
  - 数字内容为附件数量，如 `1`、`2`
  - 字号：10px / 700
- 备注角标：
  - 红底白字
  - 只显示 `...`
  - 代表该模型已有备注内容

#### 右侧汇总区

- `Order Summary` 标题：`PT-CARD-TITLE`
- `Estimated Production` 标签：`PT-CAPTION`
- 汇总行文字：14px / 500
- 汇总金额：14px / 500 / `text-slate-900`
- `Total` 标签：18px / 700 / `text-slate-900`
- 当前总价：`PT-TOTAL`
- 原价划线：`PT-ORIGINAL-TOTAL`
- 优惠金额：14px / 500 / `text-emerald-600`

## 5. 状态规范

### 5.1 默认状态

- 订单流页面中的价格默认保持蓝色
- 未选择优惠券时，不显示优惠券详情卡
- 未应用优惠券时，不显示原价划线金额

### 5.2 优惠券生效状态

- 原价显示为灰色划线金额
- 优惠后金额继续使用主蓝色
- `Coupon Discount` 行显示绿色优惠金额

### 5.3 未配置 / 禁用状态

- 保持原有字号，不额外放大
- 仅通过颜色减弱强调，如 `text-slate-400`
- 禁止未配置状态的字号大于正常可操作状态

## 6. 统一性规则

### 6.1 同层级页面标题必须统一

以下标题属于同一级别，必须统一为 `PT-H2`：

- `My Quotes List`
- `Shopping Cart`
- `Order Details`

### 6.2 右侧汇总区必须统一

以下页面右侧信息区的字体层级必须保持一致：

- 报价管理页 `Order Summary`
- 购物车页 `Order Summary`
- 订单确认页 `Order Summary`

统一内容包括：

- 卡片标题
- 小型辅助标题
- 汇总行
- 总价标签
- 总价金额

### 6.3 模型信息层级必须统一

以下页面中的模型信息必须遵循同一层级：

- 报价管理页
- 购物车页
- 订单确认页

统一内容包括：

- 模型文件名
- 数量
- 模型价格
- 单价
- 交期
- 尺寸 / 材料 / 工艺等补充信息

## 7. 执行建议

- 如果同一种信息在多个页面重复出现，优先复用同一组字号 token，而不是单页单独定义
- 如果后续建立组件库，建议把本规范中的 token 抽成设计变量
- 若页面需要新增新类型文字，请先判断是否能归入现有 token，再决定是否扩展规范
