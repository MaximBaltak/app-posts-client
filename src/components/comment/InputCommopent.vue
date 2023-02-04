<template>
  <div class="input">
    <div class="input_actions mt-10">
      <v-text-field
        type="text"
        id="input-comment"
        bg-color="white"
        label="Комментарий"
      ></v-text-field>
      <v-btn class="mb-6" variant="text" icon="mdi-send" color="rgba(3, 145, 77, 0.6)"></v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputCommopent'
}
</script>

<style lang="scss" scoped>
.input{
  background: white;
  width: 100%;
  min-height: 100px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  &_actions{
    display: flex;
    align-items: center;
    column-gap: 40px;
    height: 30px;
    justify-content: start;
  }
}
</style>
