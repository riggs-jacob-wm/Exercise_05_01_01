/* Author: Jacob Riggs
   Date: 3/2/17
   main.controller.js

   purpose: Controller for main.html page

   3/3/17 - JNR - Changed the file to be able to use the $http service that is used for th postMessage() function
   3/6/17 - JNR - Changed what the msg is set to so that it picks up what is typed in on the site.

   3/9/17 - JNR - Added the getMessages to be able to draw messages from the database onto our html page.

*/

export class MainController {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.getMessages();
  }

  getMessages() {
    var vm = this;
    this.$http.get('http://localhost:8080/api/message').then(function(result) {
          vm.messages = result.data;
        });
}

  postMessage() {
    this.$http.post('http://localhost:8080/api/message', {
      msg: this.message
    });
  }

}