<template>
  <div class="button-cover" :style="btnStyles" @click="$emit('doAction')">
    <div class="button r" id="button-1">
      <input type="checkbox" class="checkbox" checked />
      <div class="knobs"></div>
      <div class="layer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicButtonComponent',
  emits: ['doAction'],
  props: {
    optionOne: {
      default: 'Option 1'
    },
    optionTwo: {
      default: 'Option 2'
    },
    btnColor: {
      default: '#white'
    },
    fontColor: {
      default: '#808D93'
    },
    btnType: {
      default: 'button'
    },
    btnImgSrc: {
      default: ''
    },
    btnId: {
      default: ''
    }
  },
  methods: {
    ToggleSide() {
      let optionOne = document.getElementsByClassName('option-one')
      let optionTwo = document.getElementsByClassName('option-two')

      if (!optionOne[0].classList.contains('selected')) {
        optionOne[0].classList.add('selected')
        optionOne[0].classList.remove('not-selected')
        optionTwo[0].classList.add('not-selected')
        optionTwo[0].classList.remove('selected')
      } else {
        optionOne[0].classList.add('not-selected')
        optionOne[0].classList.remove('selected')
        optionTwo[0].classList.add('selected')
        optionTwo[0].classList.remove('not-selected')
      }
    }
  },
  computed: {
    btnStyles() {
      return {
        'background-color': this.btnColor,
        color: this.fontColor,
        'min-width': 'fit-content',
        width: '15.125rem !important',
        'max-width': '15.125rem !important',
        height: '3.063rem !important',
        'border-radius': '25px',
        border: 'none',
        'background-color': '#DEBC00'
      }
    },
    btnTextStyles() {
      return {
        'font-size': '18px'
      }
    }
  }
}
</script>
<style>
.button {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
}
.checkbox {
  position: relative;
  width: 100%;
  height: 95%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
}
#button-1 .knobs:before {
  content: 'Mothly';
  position: absolute;
  top: 3.4px;
  left: 10px;
  width: 50%;
  height: 85%;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  padding: 9px 4px;
  background-color: white;
  border-radius: 50px;
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  color: black;
}
#button-1 .knobs:after {
  content: 'Yearly';
  position: relative;
  color: white;
  bottom: 42px;
  left: 65%;

  font-size: 18px;
  font-weight: 600;
}

#button-1 .checkbox:checked + .knobs:before {
  content: 'Yearly';
  left: 110px;
  background-color: white;
}
#button-1 .checkbox:checked + .knobs:after {
  position: relative;
  content: 'Monthly';
  left: 10%;
}

#button-1 .checkbox:checked ~ .layer {
  background-color: #fcebeb;
}

#button-1 .knobs,
#button-1 .knobs:before,
#button-1 .layer {
  transition: 0.3s ease all;
}
</style>
