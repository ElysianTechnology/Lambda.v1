import Vue from 'vue'
import App from './App'

var jQuery = $  = require('jquery');
var Tether = require('tether');
require('bootstrap');
require('scrollmagic');
require('gsap');
require('animation.gsap');
require('debug.addIndicators');

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
