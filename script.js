function sendMessage() {
        var numbersInput = document.getElementById('numbers').value;
        var messageInput = document.getElementById('message').value;
       

        var numbersArray = numbersInput.split(',');
        console.log(numbersArray);
        numbersArray.forEach(function(number) {
            var url = 'https://api.whatsapp.com/send?phone=+91' + encodeURIComponent(number.trim()) + '&text=' + encodeURIComponent(messageInput);
            window.open(url, '_blank');
        });
    }