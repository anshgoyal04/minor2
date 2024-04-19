function validateAndSubmit() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    // Simulated authentication logic (replace with secure server-side validation)
    if (role === 'commander' && username === 'commander_user' && password === 'commander_password') {
      alert('Commander login successful!');
      document.getElementById('loginForm').submit();
      window.location.href = 'cmd.html';
    } else if (role === 'soldier' && username === 'soldier_user' && password === 'soldier_password') {
      alert('Soldier login successful!');
      document.getElementById('loginForm').submit();
      window.location.href = 'sold.html';
    } else {
      alert('Invalid username, password, or role. Please try again.');
    }
  }