<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <div>{{tips}}2222</div>
    <div>{{downloadPercent}}</div>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue',
    data () {
      return {
        downloadPercent: 0,
        tips: ''
      }
    },
    mounted () {
      let myNotification = new Notification('标题', {
        body: '通知正文内容'
      })
      myNotification.onclick = () => {
        console.log('通知被点击')
      }
      this.$electron.ipcRenderer.send('checkForUpdate')
      this.$electron.ipcRenderer.on('message', (event, text) => {
        this.tips = `${this.tips} | | ${text}`
      })
      this.$electron.ipcRenderer.on('downloadProgress', (event, progressObj) => {
        this.downloadPercent = progressObj.percent || 0
      })
      this.$electron.ipcRenderer.on('isUpdateNow', () => {
        this.tips = `${this.tips} | '下载完成'`
        this.$electron.ipcRenderer.send('isUpdateNow')
      })
    }
  }
</script>

<style>
  /* CSS */
</style>
