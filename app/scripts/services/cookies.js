(function() {
    function chatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('chatCurrentUser');
        if(!currentUser || currentUser === '') {
            $uibModal.open({
                controller: 'UsernameCtrl',
                controllerAs: 'cookie',
                templateUrl: '/templates/UsernameModal.html',
                size: 'sm'
            })
        }
    }

    angular
        .module('chat')
        .run(['$cookies', '$uibModal', chatCookies]);
})();
