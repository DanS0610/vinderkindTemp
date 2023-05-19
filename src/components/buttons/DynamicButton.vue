<template>
  <button
    v-if="btnImgSrc === ''"
    :id="btnId"
    :type="btnType"
    class="btn btn-main-header"
    :style="btnStyles"
    v-on:click="$emit('doAction')"
  >
    {{ btnTitle }}
  </button>
  <button
    v-if="btnImgSrc !== ''"
    :id="btnId"
    :type="btnType"
    class="btn btn-main-header"
    :style="btnStyles"
    v-on:click="$emit('doAction')"
  >
    <img class="btn-header-img" :src="require(`@/assets/${btnImgSrc}`)" :alt="btnTitle" />
  </button>
</template>

<script>
export default {
  name: 'DynamicButtonComponent',
  emits: ['doAction'],
  props: {
    btnTitle: {
      default: 'Button'
    },
    btnType: {
      default: 'button'
    },
    btnImgSrc: {
      default: ''
    },
    btnId: {
      default: ''
    },
    defaultStyles: {
      default: [
        {
          'background-color': '#white',
          color: '#808D93',
          'min-width': '5rem',
          'max-width': '8rem',
          height: '100% !important',
          'font-size': '14px'
        }
      ]
    }
  },
  computed: {
    btnStyles() {
      let styles = this.defaultStyles
      return styles
    }
  }
}
</script>
<style>
@media screen and (max-width: 540px) {
  .btn-main-header {
    color: rgb(128, 141, 147) !important;
    min-width: 1rem !important;
    max-width: 5rem !important;
    height: 100% !important;
    font-size: 10px !important;
  }
  .btn-header-img {
    width: 1.5rem !important;
  }
}
</style>
