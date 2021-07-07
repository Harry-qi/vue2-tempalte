<template>
  <div>
    <el-button @click="visible=true">按钮</el-button>
    <Dialog :visible.sync="visible" title="tips">
      <p>升级中</p>
    </Dialog>
  </div>
</template>

<script>
import Dialog from './component/dialog'
export default {
  name: 'Index',
  components: {
    Dialog
  },
  data() {
    return {
      visible: false
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>
