(function () {
    function HomeCtrl(Room) {
        this.Room = Room;
    }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
