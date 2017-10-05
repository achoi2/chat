(function () {
    function HomeCtrl(Room) {
        this.rooms = Room.all
        this.addRoom = Room.add
        this.addRoom("name")
        console.log(this.rooms)

    }

    angular
        .module('chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
