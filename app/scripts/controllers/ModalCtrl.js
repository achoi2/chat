(function() {
    function ModalCtrl($uibModalInstance, Room) {

      this.addRoom = function (roomName) {
          Room.add(roomName);
          $uibModalInstance.close();

      };

      this.cancel = function () {
          $uibModalInstance.close();

      };

    }

    angular
        .module('chat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
