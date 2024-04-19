// Add your soldier-specific JavaScript logic here

function sendMessage() {
    var messageInput = document.getElementById('messageInput').value;
    var chatBox = document.getElementById('chatBox');
  
    if (messageInput.trim() !== '') {
      var sentMessage = document.createElement('div');
      sentMessage.className = 'sent-message';
      sentMessage.innerHTML = '<strong>Soldier:</strong> ' + messageInput;
      chatBox.appendChild(sentMessage);
      alert('Message send successfully');
  
      // Clear the input
      document.getElementById('messageInput').value = '';
    }
  }
  
  function initMap() {
    // Soldier's location on the map (sample coordinates)
    var soldierLocation = { lat: 37.7749, lng: -122.4194 };
  
    // Create a map centered on the soldier's location
    var map = new google.maps.Map(document.getElementById('map'), {
      center: soldierLocation,
      zoom: 10
    });
  
    // Add a marker at the soldier's location
    var marker = new google.maps.Marker({
      position: soldierLocation,
      map: map,
      title: 'Soldier Location'
    });
  }
  function logout(){
    alert('Successfully logout');
  }