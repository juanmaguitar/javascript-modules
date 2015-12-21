import * as h from './modules/helpers';
import $ from '../../node_modules/jquery';

/* We would either do the entire library */
import _ from '../../node_modules/lodash';

/* OR cherry pick methods from lodash */
import { throttle } from '../../node_modules/lodash';

import request from '../../node_modules/superagent';

// import some code that isn't a module
import './non-modules/not-a-module';

// import an exported object
import coolDude from './modules/object-export';

console.log(">>>>> APP <<<<<<<");

console.log("imported object... ");
console.log(coolDude);

// import

// Use imported jQuery
$('p').on('click', () => {
  alert('ya clicked it... i said!');
});

// Async Module Loading
$('.async-load').on('click',function() {
    // this.showLoader();
    console.log ("#### start async loading....")
    require.ensure([], function() {
      require("./modules/logger").log();
    });
});

// Async Non-Module Loading
$('.async-load').on('click', () => {
    console.log ("start async loading....")
    require.ensure([], function() {
      require("./non-modules/message");
    });
});


// use the imported helper object
console.log("imported helper object...");
console.log(h.formatPrice(5000));

// use imported superagent module
request
  .get('https://api.github.com/users/wesbos')
  .end(function(err, res){
      console.log("response from github...");
      console.log(res.body);
  });

// try out lodash
var dogs = [
  { 'name': 'snickers', 'age': 2, breed : 'King Charles'},
  { 'name': 'prudence', 'age': 5, breed : 'Poodle'}
];

console.log("lodash...");
console.log(_.findWhere(dogs, { 'breed': 'King Charles' }));

// try out cherry picked lodash
$('.click-me').on('click',throttle(function() {
  console.count('ouch!');
}, 1000));

