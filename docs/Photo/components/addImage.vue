<script setup>
import { ref } from "vue"
import { UploadFilled } from "@element-plus/icons-vue"
const cover = ref(true)

const username = ref("")
const password = ref("")
const submit = () => {
  if (username.value === "admin" && password.value === "lhhandfrg1124") {
    cover.value = false
  } else {
    alert("用户名或密码错误")
  }
}

const addSuccess = (file, response) => {
  console.log(file, response)
}
</script>

<template>
  <div class="add-image">
    <div class="input-add" v-if="cover">
      <el-input
        v-model="username"
        style="width: 240px"
        placeholder="请输入账户名"
        clearable
        maxlength="8"
        show-word-limit
      />
      <el-input
        v-model="password"
        style="width: 240px"
        type="password"
        placeholder="请输入密码"
        show-password
        maxlength="15"
        show-word-limit
      />
      <div class="but">
        <el-button type="primary" @click="submit">验证</el-button>
        <el-button type="success">重置</el-button>
      </div>
    </div>

    <div class="add" v-else>
      <el-upload
        class="upload-demo seting-upload"
        drag
        action="https://www.imgtp.com/api/upload"
        method="post"
        multiple
        :on-success="addSuccess"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>
    </div>
  </div>
</template>

<style scoped>
.add-image {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .input-add {
    width: 600px;
    height: 400px;
    /* border: 1px solid red; */
    /* background: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-input {
      margin-bottom: 20px;
    }
    .but {
      width: 240px;
      display: flex;
      justify-content: space-between;
    }
  }

  .add {
    width: 800px;
    height: 600px;
    border: 1px solid red;
    > div {
      height: 600px;
      > .el-upload {
        height: 600px;
      }
    }
  }
}
</style>
