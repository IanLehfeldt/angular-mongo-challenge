MessageApp.controller('MessageController', ['MessageService', function(MessageService){
    console.log('Message Controller is loaded');
    var self = this;

    self.newMessage = {};

    MessageService.getMessages();
    self.messages = MessageService.gotMessages;

    self.sendMessage = function () {
        console.log('Message Sent!', self.newMessage);
        MessageService.sendMessage(self.newMessage);
        MessageService.getMessages();
    };

}]);