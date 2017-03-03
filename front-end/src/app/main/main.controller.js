/* Author: Jacob Riggs
   Date: 3/2/17
   main.controller.js

   purpose: Controller for main.html page

*/

export class MainController {
  constructor($log) {
    'ngInject';
    this.$log = $log;
  }

  postMessage() {
    this.$log.log('post');
  }
}