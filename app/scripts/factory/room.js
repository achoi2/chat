(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.add = function(roomName) {
            rooms.$add({name: roomName})
        }
        return Room;

    }
    angular
        .module('chat')
        .factory('Room', ['$firebaseArray', Room]);
})();
