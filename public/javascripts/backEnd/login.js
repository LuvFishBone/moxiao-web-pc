
jQuery(document).ready(function() {

  $.supersized({

    // Functionality
    slide_interval     : 4000,    // Length between transitions
    transition         : 1,    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
    transition_speed   : 1000,    // Speed of transition
    performance        : 1,    // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)

    // Size & Position
    min_width          : 0,    // Min width allowed (in pixels)
    min_height         : 0,    // Min height allowed (in pixels)
    vertical_center    : 1,    // Vertically center background
    horizontal_center  : 1,    // Horizontally center background
    fit_always         : 0,    // Image will never exceed browser width or height (Ignores min. dimensions)
    fit_portrait       : 1,    // Portrait images will not exceed browser height
    fit_landscape      : 0,    // Landscape images will not exceed browser width

    // Components
    slide_links        : 'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
    slides             : [    // Slideshow Images
                             {image : '/images/backEnd/login-bg-1.jpg'},
                             {image : '/images/backEnd/login-bg-2.jpg'},
                             {image : '/images/backEnd/login-bg-3.jpg'}
                         ]
  });

  var $name = $('#name');
  var $pwd = $('#pwd');
  var $submit = $('#submit');

  $submit.click(function() {
    var name = $name.val(), pwd = $pwd.val();
    if (valid(name, pwd)) {
      login(name, pwd);
    };
  });

  $(document).keyup(function(event){
    if(event.keyCode == 13){
      var name = $name.val(), pwd = $pwd.val();
      if (valid(name, pwd)) login(name, pwd);
    }
  });

  function valid(name, pwd) {
    var res = true;
    if (name === '') {
      alert('请输入账户');
      return res = false;
    }
    if (pwd === '') {
      alert('请输入密码');
      return res = false;
    }
    return res;
  } 

  function login(name, pwd) {
    var md5Pwd = md5(md5(pwd));
    API.post('/api/login', { name: name, password: md5Pwd }, function(res) {
      if (res.code === 0) {
        var token = res.data['Auth-Token'];
        $.cookie('Auth-Token', token, {path: '/'});
        location.href = "/backend/dashboard";
      }
      else {
        alert(res.msg);
      } 
    })
  }

});