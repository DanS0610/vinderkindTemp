<template>
  <div class="row title-row-landing">
    <div class="col-md-12 title-col-landing horizontal-space-between margin-bottom-subtitle">
      <img src="../assets/img/title@2x.png" alt="title" class="landing-title-img" />
      <h3 id="main-landing-title" class="text-centered subtitle">
        שרייבט אייך איין פאר אינהאלטפולרייכע מעשיות און ניגונים פאר די גאנצע משפחה
      </h3>
    </div>
  </div>
  <div class="subscbibe-form-div">
    <form action="">
      <label class="subtitle-bold margin-small-subtitle">Personal Information</label>
      <DynamicInput placeholderText="Full Name" :defaultStyles="normalInputStyles"></DynamicInput>
      <DynamicInput
        placeholderText="Email Address"
        :defaultStyles="normalInputStyles"
      ></DynamicInput>
      <DynamicInput
        placeholderText="Phone Number"
        :defaultStyles="normalInputStyles"
      ></DynamicInput>
      <div class="horizontal-justified-left medium-margin-bottom">
        <input class="form-check-input vinderkind-checkbox" type="checkbox" />
        <label class="label-big-normal margin-left-small mobile-small-font">Sign up for Vinderkind emails</label>
      </div>
      <label class="subtitle-bold margin-small-subtitle">Delivery Information</label>
      <DynamicInput placeholderText="Address" :defaultStyles="normalInputStyles"></DynamicInput>
      <DynamicInput
        placeholderText="Address Line 2"
        :defaultStyles="normalInputStyles"
      ></DynamicInput>
      <div class="small-input-container medium-margin-bottom">
        <DynamicInput textInputId="city-input" placeholderText="City" :defaultStyles="smallInput"></DynamicInput>
        <DynamicInput textInputId="state-input" placeholderText="State" :defaultStyles="smallInput"></DynamicInput>
        <DynamicInput textInputId="zip-input" placeholderText="Zip" :defaultStyles="smallInput"></DynamicInput>
      </div>
      <label class="subtitle-bold margin-small-subtitle">Payment Information</label>
      <DynamicInput
        placeholderText="Name on Card"
        :defaultStyles="normalInputStyles"
      ></DynamicInput>
      <DynamicInput placeholderText="Card Number" :defaultStyles="normalInputStyles"></DynamicInput>
      <div class="small-input-container">
        <DynamicInput textInputId="exp-input" placeholderText="Exp. MM/YY" :defaultStyles="smallInput"></DynamicInput>
        <DynamicInput textInputId="cvv-input" placeholderText="CVV" :defaultStyles="smallInput"></DynamicInput>
        <DynamicInput textInputId="zip-input" placeholderText="Zip" :defaultStyles="smallInput"></DynamicInput>
      </div>
      <div class="horizontal-justified-left small-margin-bottom">
        <input class="form-check-input vinderkind-checkbox" type="checkbox" name="" id="" />
        <label class="label-big-normal margin-left-small mobile-small-font"
          >Automatically renew my subscription</label
        >
      </div>
      <DynamicInput
        :divClass="noMarginInputClass"
        class="small-margin-bottom"
        placeholderText="Promo Code"
        :defaultStyles="normalInputStyles"
      ></DynamicInput>
      <DynamicButton
        btnType="submit"
        btnTitle="Subscribe for $200"
        btnId="sub-btn"
        :defaultStyles="signUpBtnStyles"
      ></DynamicButton>
      <div id="terms-conditions-container" class="column-centered small-margin-bottom">
        <p class="small-text-normal text-centered width-60-percent mobile-small-font mobile-90-percent">
          By clicking on the subscribe button, you agree with our
          <a class="no-decoration-vinderkind" href="http://">terms and conditions</a> &
          <a class="no-decoration-vinderkind" href="">cancelation policy.</a>
        </p>
      </div>
    </form>
  </div>
  <div class="row footer-row">
    <div class="col-md-12 full-height">
      <HalfSizeNavBar></HalfSizeNavBar>
    </div>
  </div>
</template>

<script setup>
import HalfSizeNavBar from '../components/layout/HalfSizeNavBar.vue'
import DynamicInput from '../components/inputs/DynamicInput.vue'
import DynamicButton from '../components/buttons/DynamicButton.vue'
import { useActiveHomePageStore } from '../stores/activeHomePage'

const store = useActiveHomePageStore()

store.activePage = "subscribe"

const normalInputStyles = [
  {
    'margin-bottom': '0.5rem',
    'box-shadow': '0px 0px 6px #0000001F',
    border: '1px solid !important',
    'font-size': '14px',
    height: '3.5rem',
    'max-width': '100%',
    opacity: '0.7'
  }
]
const noMarginInputClass = ['form-floating', 'full-width-el']

const smallInput = [
  {
    'margin-bottom': '0.5rem',
    'box-shadow': '0px 0px 6px #0000001F',
    border: '1px solid !important',
    'font-size': '14px',
    height: '3.5rem',
    width: '208px',
    'max-width': '100%',
    opacity: '0.7'
  }
]
const signUpBtnStyles = [
  {
    'background-color': '#9601C7',
    'border-radius': '34px',
    color: 'white',
    'min-width': '10rem',
    width: '100%',
    'max-width': '100%',
    height: '4.188rem !important',
    'font-size': '24px',
    'font-weight': 'bold'
  }
]
</script>
