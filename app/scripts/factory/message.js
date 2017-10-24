(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        

    Message.getByRoomId = function(roomId) {
        ref.orderByChild("roomId").equalTo("roomId");
        return $firebaseArray(ref);
    }

        return Message;

    }


    angular
        .module('chat')
        .factory('Message', ['$firebaseArray', Message]);
})();
