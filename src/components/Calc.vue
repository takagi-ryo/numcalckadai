<template>
  <div class="calc">
    <h3 class="mx-auto"
        style="width: 200px;">
      計算回数の比較
    </h3>
    <div class="row">
      <div class="col">
        <h3>二分法</h3>
        <input v-model="error_range" type="text" placeholder="0.0001">
        <button @click="calc_nibun" type="button" class="btn btn-secondary">
          計算
        </button>
        <div v-for="item of v_ni_array" v-bind:key="item">
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="col">
        <h3>ニュートン法</h3>
        <input v-model="error_range" type="text" placeholder="0.0001">
        <button @click="calc_newton" type="button" class="btn btn-secondary">
          計算
        </button>
        <div v-for="item of v_nw_array" v-bind:key="item">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h5>計算回数:{{ v_ni_array.length }}回</h5>
      </div>
      <div class="col">
        <h5>計算回数:{{ v_nw_array.length }}回</h5>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      v_ni_array: nibun_array,
      v_nw_array: newton_array,
    }
  },
  methods: {
    calc_nibun() {
      console.log("nibun");
      nibun_out(this.error_range);
      console.log(nibun_array);
    },
    calc_newton() {
      console.log("newton");
      newton(this.error_range);
      console.log(newton_array);
    }
  }
};


  let nibun_array = [];
  let newton_array = [];

  const nibun_out = (EPS) => {
    let a = 0.0;
    let b = 1.0;

    let x = nibun(a,b,EPS);
    console.log("x = " + x);
  };

  const nibun = (a, b, EPS) => {
    let c;
    if(nibun_array.length > 0) nibun_array.splice(-nibun_array.length);
    do {
      c = (a + b) / 2.0;
      nibun_array.push(c);
      console.log(c);
      if (func_y(c) * func_y(a) < 0) b = c;
      else a = c;
    } while (Math.abs(a - b) > EPS);
    return c;
  };

  const newton = (EPS) => {
    let a = 1.0;
    let b;
    if(newton_array.length > 0) newton_array.splice(-newton_array.length);
    while (1) {// eslint-disable-line
      b = a - func_y(a) / func_z(a);
      newton_array.push(b);
      console.log(b);
      if (Math.abs(a - b) < EPS) break;
      else a = b;
    }
  };

  const func_y = (x) => {
    return Math.pow(x, 3.0) + x - 1.0;
  };

  const func_z = (x => {
    return 3.0 * Math.pow(x, 2.0) + 1.0;
  });

</script>
