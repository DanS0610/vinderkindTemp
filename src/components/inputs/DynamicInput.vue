<template>
  <div :class="divClass">
    <input
      :id="textInputId"
      :name="nameInput"
      :type="typeInput"
      :class="inputClass"
      :placeholder="placeholderText"
      :aria-label="ariaName"
      :style="inputStyles"
      autocomplete="off"
      :required="requiredInput"
    />
    <label class="jdn-font-grey standard-font-size" :for="nameInput" :style="labelStyle">{{ placeholderText }}</label>
  </div>
</template>

<script>
export default {
  name: 'DynamicInputComponent',
  data() {
    return {
      selt: 'nameeeee'
    }
  },
  props: {
    nameInput: {
      default: 'text'
    },
    typeInput: {
      default: 'text'
    },
    placeholderText: {
      default: 'Write your text here...'
    },
    ariaName: {
      default: 'input'
    },
    inputClass: {
      default: ['form-control', 'user-dynamic-input']
    },
    divClass: {
      default: ["form-floating", "mb-3", "full-width-el"]
    },
    requiredInput: {
      default: false
    },
    textInputId: {
      default: ''
    },
    defaultStyles: {
      default: [
        {
          'margin-bottom': '0.5rem',
          'box-shadow': '0px 0px 6px #0000001F',
          'border': 'none',
          'font-size': '14px',
          'height': '3.5rem',
          'max-width': '100%',
          'opacity': '0.7'
        }
      ]
    }
  },
  computed: {
    inputStyles() {
      let styles = this.defaultStyles;
      return styles;
    },
    labelStyle() {
      return {
        color: '#CDCDCD'
      }
    },
  }
}
</script>
<style>
@media screen and (max-width: 540px) {
  .user-input {
    width: 15rem !important;
    height: 3.5rem !important;
  }
}
</style>
