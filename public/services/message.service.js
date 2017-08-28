MessageApp.service('MessageService', ['$http', function($http){
    console.log('Message service is loaded!');
    var self = this;

    self.sendMessage = function(newMessage){
        $http.post('/messages', newMessage).then(function(response){
            console.log('Message sent to server: ', response.data);
        });
    };
}]);