<template>
  <div class="home">
    <div class="container">
      <div class="mx-auto" style="width: 200px;">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <h3>コンピュータによる方程式の解法</h3>
      <hr>
      <Nibun/>
      <hr>
      <Newton/>
      <hr>
      <calc/>
    </div>
  </div>
</template>

<script>
import Newton from '@/components/Newton.vue'
import Nibun from '@/components/Nibun.vue'
import Calc from '@/components/Calc.vue'

export default {
  name: 'Home',
  components: {
    Newton,
    Nibun,
    Calc
  }
}
</script>
