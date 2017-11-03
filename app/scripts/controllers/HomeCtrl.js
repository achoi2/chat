(function() {
    function HomeCtrl($scope, $cookies, Room, $uibModal, Message) {
        this.currentRoomId = null;
        this.rooms = Room.all;
<<<<<<< HEAD
        // this.getByRoomId = Message.getByRoomId;
        // this.messages = Messages.messages
=======
    //  this.getByRoomId = Message.getByRoomId;
      // this.messages = Messages.messages
>>>>>>> checkpoint6

        this.createNewRoom = function() {
          // detect if a modal is open, and if so close instead
          // have a toggle that tracks the button state and will have it disappear
            $uibModal.open({
              controller: 'ModalCtrl',
              controllerAs: 'modal',
              templateUrl: '/templates/modal.html',
              size: 'sm'
            })

        }

        this.setNewRoom = function(roomId) {
            this.currentRoomId = roomId;
            this.messages = Message.getByRoomId(roomId);
            console.log(this.messages)
        }

        this.submitMessage = function () {
<<<<<<< HEAD
          if ($scope.text != '') {
            var text = $scope.text;
            $scope.text = '';
            Message.add(text, this.currentRoomId)
          }
=======
            if ($scope.text != '') {
                var text = $scope.text;
                $scope.text = '';
                Message.add(text, this.currentRoomId)
            }
>>>>>>> checkpoint6
        }

      }

    angular
        .module('chat')
        .controller('HomeCtrl', ['$scope', '$cookies', 'Room', '$uibModal','Message', HomeCtrl]);
})();
