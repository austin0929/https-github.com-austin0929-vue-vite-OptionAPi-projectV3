import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineStore('bookmarkStore', {
  state: () => ({
    bookmark: [],
    bookmarkDate: ''
  }),
  actions: {
    addBookmark (product) {
      const index = this.bookmark.findIndex(item => item.id === product.id)
      if (index === -1) {
        this.bookmark.push(product)
        toast('已加入收藏清單', {
          theme: 'auto',
          type: 'success',
          autoClose: 1000,
          hideProgressBar: true,
          dangerouslyHTMLString: true
        })
      } else {
        this.bookmark.splice(index, 1)
        toast('已移除收藏清單', {
          theme: 'auto',
          type: 'success',
          autoClose: 1000,
          hideProgressBar: true,
          dangerouslyHTMLString: true
        })
      }
      localStorage.setItem('bookMarks', JSON.stringify(this.bookmark))
    },
    isSelected (productId) {
      const result = this.bookmark.some(item => item.id === productId)
      return result
    },
    getBookmark () {
      this.bookmark = JSON.parse(localStorage.getItem('bookMarks')) || []
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const month = currentDate.getMonth() + 1
      const day = currentDate.getDate()

      this.bookmarkDate = `${year}/${month}/${day}`
    },
    delBookmark (mark, index) {
      this.bookmark.findIndex((item) => item.id === mark.id)
      if (index !== -1) {
        this.bookmark.splice(index, 1)
        localStorage.setItem('bookMarks', JSON.stringify(this.bookmark))
        this.getBookmark()
        toast('已移除收藏清單', {
          theme: 'auto',
          type: 'success',
          autoClose: 1000,
          hideProgressBar: true,
          dangerouslyHTMLString: true
        })
      }
    }
  }
})
