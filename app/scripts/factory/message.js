(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);


        Message.add = function(messageContent, roomId) {
            messages.$add({content: messageContent,
                            roomId: roomId})
        }

        Message.getByRoomId = function(roomId) {
            var messagesByRoomIdRef = ref.orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(messagesByRoomIdRef)
        }
      return Message;

    }


    angular
        .module('chat')
        .factory('Message', ['$firebaseArray', Message]);
})();
