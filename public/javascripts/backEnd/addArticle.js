
jQuery(document).ready(function() {
  var ue = UE.getEditor('editor');
	$("#thumbForm").ajaxForm(function(data){
    // console.log(data, '------img url------');
    // var url = location.protocol + '//' + location.host + data.url;
    var url = data.url;
    $("#thumbUrl").val(url);
  });
  
  var submit = $('#submit');
  submit.click(function() {
    var titVal = $('#title').val();
    var descVal = $('#desc').val();
    var thumbUrl = $('#thumbUrl').val();
    var content = ue.getContent();
    if (titVal === '') {
      alert('请填写标题');
      return;
    }
    if (descVal === '') {
      alert('请填写简介');
      return;
    }
    if (thumbUrl === '') {
      alert('请填写缩略图');
      return;
    }
    if (content === '') {
      alert('请填写内容');
      return;
    }

    API.post('/api/article/add', {
      title: titVal,
      intro: descVal,
      thumbUrl: thumbUrl,
      content: content,
    }, function(res) {
      console.log(res);
      if (res.code === 0 ) {
        alert(res.msg);
        location.href = '/backend/articleList';
      } 
    });
  });

});