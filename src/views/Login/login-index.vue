<script setup>


</script>
<template>
  <div class="common-layout">
    <el-container style="height: 50%; width: 50%; display: grid; place-content: center">
      <el-main>
        <el-form
          ref="FormRef"
          :model="form"
          style="max-width: 300px"
          label-width="auto"
          :rules="rules"
          status-icon
          size="default"
        >
          <el-form-item label="User" prop="User">
            <el-input v-model="form.User"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="Password">
            <el-input v-model="form.Password"></el-input>
          </el-form-item>
          <el-form-item label-width="20px" prop="argee">
            <el-checkbox v-model="form.argee" label="确认协议"></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onsubmit">submit</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.common-layout {
  height: 100%;
  place-items: center;
  display: grid;
  background-color: black;
  background-image: radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 40px),
    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
    radial-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1) 2px, transparent 30px);
  background-size:
    550px 550px,
    350px 350px,
    250px 250px,
    150px 150px;
  background-position:
    0 0,
    40px 60px,
    130px 270px,
    70px 100px;
}
</style>
