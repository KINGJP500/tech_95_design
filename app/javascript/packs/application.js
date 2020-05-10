// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//import { Application } from "stimulus"
//import { definitionsFromContext } from "stimulus/webpack-helpers"
import 'cocoon';
// ...
const $ = require('jquery');
//...
global.$ = $
global.jQuery = $

require("@rails/ujs").start()
require("jquery")
require("jquery-ui")
global.toastr = require("toastr")
require("bootstrap")// the real links
require('src/html.sortable')
require("turbolinks").start()
require("@rails/activestorage").start()
//require("bootstrap-sprockets")
require("channels")

//the javascript files
import ('src/blog')
import ('src/page')
import('src/portfolio')
import('src/plugins') // note the function usage!
// ...

//import 'core-js/stable'
//import 'regenerator-runtime/runtime'


import "../stylesheets/application" // <- Add this line

$('.alert').alert()

// ....

$(document).on('turbolinks:load', function() {
  $('body').tooltip({
    selector: '[data-toggle="tooltip"]',
    container: 'body',
  });

  $('body').popover({
    selector: '[data-toggle="popover"]',
    container: 'body',
    html: true,
    trigger: 'hover',
  });
});
// ...

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

console.log('Hello World from webpacker')
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
