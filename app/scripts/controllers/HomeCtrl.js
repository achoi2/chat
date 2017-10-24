(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;
        this.getByRoomId = Message.getByRoomId;


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

        this.setNewRoom = function(room) {
            this.newRoom = room;
            this.messages = this.getByRoomId(room.$id);
            
        }

      }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', '$uibModal','Message', HomeCtrl]);
})();
