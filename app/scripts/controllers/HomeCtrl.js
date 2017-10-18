(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all
        // this.addRoom = Room.add
        // this.addRoom("name")


        this.createNewRoom = function() {
            $uibModal.open({
              controller: 'ModalCtrl',
              controllerAs: 'modal',
              templateUrl: '/templates/modal.html',
              size: 'sm'
            })

        }

      }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
