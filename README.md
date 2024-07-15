## FishDaddy|魚老爹餐廳

魚老爹餐廳電商致力於將新鮮食物送到顧客的餐桌。我們以美國風情為靈感，結合現代設計，打造便捷、安全的購物平台，讓顧客輕鬆享受美味食物和貼心服務。

## 功能

前台

- 產品列表、產品細節、產品名稱篩選、產品價格篩選
- 關於我們
- 購物車列表、產品新增、產品刪除、產品修改數量
- 收藏列表、加入收藏、取消收藏
- 部落格列表、部落格文章
- 訂單列表、檢視訂單、建立訂單、訂單使用者驗證、訂單付款

後台(管理者)

- 產品列表、新增產品、刪除產品、修改產品
- 優惠券列表、新增優惠券、刪除優惠券、修改優惠券
- 部落格列表、新增文章、刪除文章、修改文章
- 管理者登入、管理者登出


## 專案技術
Vue3 / Vite / Options API  / Vue Router / Bootstrap5 / Sass / RESTful API / Pinia 


## 專案管理
Git / GitHub / 


## 環境變數

請將 `.env.example` 複製一份並命名為 `.env`，並將裡面的環境變數設定為你的值。

```bash
cp .env.example .env
```

### 安裝套件

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

### 打包專案

```bash
npm run build
```

### 部署專案

```bash
npm run deploy
```

## 套件

- vee-validate/i18n (^4.12.5)
- vee-validate/rules (^4.12.5)
- vee-validate (^4.12.5)
- axios (^1.6.8)
- bootstrap (^5.3.3)
- bootstrap-icons (^1.11.3)
- eslint (^8.57.1)
- eslint-config-standard (^17.1.0)
- eslint-plugin-vue (^9.23.0)
- pinia (^2.1.7)
- swiper (^11.1.1)
- vite-plugin-eslint (^1.8.1)
- vue (^3.4.1)
- vue-loading-overlay (6.0)
- vue-router (^4.3.0)
- vue-sweetalert2 (^5.0.5)
- vue3-toastify (^0.2.1)
- vitejs/plugin-vue (^5.0.4)
- sass (^1.72.0)
- vite (^5.1.6)

## 資料夾結構

- `.vscode`：Visual Studio Code 的設定檔
- `dist`：打包後的檔案
- `public`：公開的靜態檔案
- `src`：專案的程式碼
  - `assets`：靜態檔案
  - `components`：元件
  - `router`：路由
  - `store`：狀態管理
  - `views`：頁面
  - `App.vue`：根元件
  - `main.js`：進入點
- `.env.example`：環境變數範本
- `.eslintrc.js`：ESLint 設定檔
- `.gitignore`：Git 忽略檔案
- `.nvmrc`：Node.js 版本
- `index.html`：進入點 HTML
- `package-lock.json`：套件版本鎖定
- `package.json`：專案資訊
- `README.md`：專案說明
- `vite.config.js`：Vite 設定檔

## gh-pages 部署說明

內建預設是使用 gh-pages 進行部署，因此只需要在專案根目錄下執行以下指令即可。

```bash
npm run deploy
```
