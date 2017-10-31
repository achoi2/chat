(function() {
    function UsernameCtrl($uibModalInstance, $cookies) {

      this.currentUser = function (username) {
          $cookies.put("chatCurrentUser", username);
          if (typeof username == "string") {
          $uibModalInstance.close();
          }
      }

    }

    angular
        .module('chat')
        .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();
