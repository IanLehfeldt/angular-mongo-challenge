MessageApp.service('MessageService', ['$http', function($http){
    console.log('Message service is loaded!');
    var self = this;
    self.gotMessages = { list: [] };

    self.sendMessage = function(newMessage){
        $http.post('/messages', newMessage).then(function(response){
            console.log('Message sent to server: ', response.data);
        });
    };

    self.getMessages = function(){
        $http.get('/messages').then(function(response){
            self.gotMessages.list = response.data;
            console.log('Messages received: ', self.gotMessages);
        });
    };
}]);