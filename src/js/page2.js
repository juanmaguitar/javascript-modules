import * as h from './modules/helpers';
import $ from '../../node_modules/jquery';

/* We would either do the entire library */
import _ from '../../node_modules/lodash';


console.log(">>>>> PAGE 2 <<<<<<<");

// try out lodash
var dogs = [
  { 'name': 'snickers', 'age': 2, breed : 'King Charles'},
  { 'name': 'prudence', 'age': 5, breed : 'Poodle'}
];

console.log("lodash...");
console.log(_.findWhere(dogs, { 'breed': 'King Charles' }));


// Async Non-Module Loading
$('.click-me').on('click', () => {
    console.log ("start async loading....")
    require.ensure([], function() {
      require("./non-modules/message");
    });
});