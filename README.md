# FishDaddy - 魚老爹餐廳

## 專案說明

以餐廳食物為主題，有各種美食可供訂購，滿足顧客需求。

## 設計理念

* **名稱由來：** 喜歡貓咪的人都是一家人，同在一個星球上
* **主要風格：** 咖啡色搭配灰色系
* **色系搭配：** #6c5c53、#aaa、#6c5c53

## 使用技術

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Bootstrap.js](https://img.shields.io/badge/-Bootstrap-563D7C?style=for-the-badge&logo=bootstrap)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

* 使用 Vue 3 和 Vue vite 架設開發。
* 引入 Vue Router 與 Vue Axios 等套件。
* 使用 Bootstrap 5 & SCSS 建構響應式版型。
* 加入 ESLint standard 規範管理程式品質。
* 透過 Pinia 進行狀態管理，負責跨元件參數操作。

## 使用套件

* Vue Router 管控路由。
* Vue Axios API。
* Vee-Validate 表單驗證。
* Vue-loading-overlay 動畫加載頁面。
* swiper 輪播功能。
* Bootstrap Icons。

## 後端Swagger API文件

* <https://hexschool.github.io/vue3-courses-swaggerDoc/>

## 前台簡介

* 首頁
* 產品列表：產品分類、分頁功能、收藏功能
* 產品詳情
* 購物車：新增、刪除、修改功能
* 結帳：建立訂單

## 後台簡介

* 產品管理：新增、修改、刪除、圖片上傳功能
* 訂單管理：新增、修改、刪除功能
* 優惠券管理：新增、修改、刪除功能
* 部落格管理: 新增、修改、刪除功能

## 安裝方式

```bash=
npm install
```

## 啟動方式

啟動伺服器預設使用：<http://localhost:3000>

```bash=
npm run dev
```

## 打包方式

```bash=
npm run build
```

## 使用版本

* nodejs - v18.19.1
* npm - 10.2.4

