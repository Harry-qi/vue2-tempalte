<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="30%"
    @close="$emit('update:visible',false)"
  >
    <slot />
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary" @click="submit">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '提示'
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  watch: {
    visible(val) {
      this.dialogVisible = val
    }
  },
  methods: {
    cancel() {
      this.$emit('update:visible', false)
    },
    submit() {
      this.$emit('update:visible', false)
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>

</style>
