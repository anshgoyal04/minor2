function sendStrategy() {
    var strategyInput = document.getElementById('strategyInput').value;
    var messageBox = document.getElementById('messageBox');
  
    if (strategyInput.trim() !== '') {
      var strategyMessage = document.createElement('div');
      strategyMessage.className = 'strategy-message';
      strategyMessage.innerHTML = '<strong>Commander:</strong> ' + strategyInput;
      messageBox.appendChild(strategyMessage);
      alert('Message send successfully');
      // Clear the input
      document.getElementById('strategyInput').value = '';
    }
  }
  function logout(){
    alert('Successfully logout');
  }