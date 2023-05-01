$.getJSON('https://api.unsplash.com/users/sanjanadanait/likes/?client_id=BJLHaOR27lT-Dfu1FOiFoxtEjXcZZavsPjTq3nmZIKE', function(data) {
    console.log(data);
    
    $.each(data, function(index, value) {
      console.log(value);
      
      var name = value.user.name;
      var imageURL = value.urls.regular;
      
      $('.grid').append('<div class="image"><img src="' + imageURL + '"/></div>');
    });
  });