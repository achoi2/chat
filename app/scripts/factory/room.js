(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        // in db: "435fr4": {"name":"my name"}
        Room.all = rooms;

        Room.add = function(room) {
          rooms.$add({ name: room })
        }

        return Room;
    }

    angular
        .module('chat')
        .factory('Room', ['$firebaseArray', Room]);
})();
