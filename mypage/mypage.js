document.getElementById('profile-input').addEventListener('change', function() {
  var file = this.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function(event) {
      var profileImage = document.getElementById('profile-image');
      profileImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});