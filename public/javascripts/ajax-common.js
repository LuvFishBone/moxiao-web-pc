;(function() {
  var API = {
    apiSetting(type, url, opts) {
      const setting = {
        type,
        url,
        contentType: 'application/json',
        dataType: 'json',
        timeout: 8000,
      };
      $.extend(setting, opts);
      return setting;
    },
    errorHandle(xhr, callback, eventKey, eventType) {
      let msg = '';
      const eventOpts = {};
      if (xhr.status === 401 || xhr.status === 403) {
        alert('您的会话已过期请重新登陆');
        location.href = '/login';
      } else if (xhr.status === 405) {
        msg = '请求方式被拒绝!';
      } else if (xhr.status === 502 || xhr.status === 500) {
        msg = '服务器异常，请稍后重试...';
      } else {
        msg = '系统器异常，请稍后重试...';
      }
      if (msg) {
        if (typeof callback === 'function') {
          callback.apply(this, [msg]);
        } else {
          alert(msg);
        }
      }
    },
    // API上传助手
    upload(url, data, success, error, opts) {
      const options = $.extend({ contentType: false, processData: false, cache: false }, opts);
      const setting = this.apiSetting('post', url, { success, error, ...options });
      data.platformPath && (this.apiSetting.platformPath = data.platformPath);
      let formData = new FormData();
      if (data instanceof FormData) {
        formData = data;
      } else if ($.isPlainObject(data)) {
        $.each(data, (key, value) => {
          formData.append(key, value);
        });
      } else {
        alert('请传递FormData或Object基础类对象');
        return false;
      }
      setting.data = formData;
      return $.ajax(setting);
    },
    query(type, url, ...args) {
      let argsSetting = {};
      if (args.length === 1) {
        argsSetting = typeof (args[0]) === 'function' ? { success: args[0] } : { data: args[0] };
      } else if (args.length === 2) {
        if (typeof (args[0]) === 'function') {
          argsSetting = typeof (args[1]) === 'function' ? { success: args[0], error: args[1] } : { success: args[0], ...args[1] };
        } else {
          argsSetting = typeof (args[1]) === 'function' ? { data: args[0], success: args[1] } : { data: args[0], ...args[1] };
        }
      } else if (args.length === 3) {
        if (typeof (args[0]) === 'function') {
          argsSetting = { success: args[0], error: args[1], ...args[2] };
        } else {
          argsSetting = typeof (args[2]) === 'function' ? { data: args[0], success: args[1], error: args[2] } : { data: args[0], success: args[1], ...args[2] };
        }
      }
      if (argsSetting.error === undefined) {
        argsSetting.error = (xhr) => {
          this.errorHandle(xhr);
        };
      }
      const setting = this.apiSetting(type, url, argsSetting);
      if (setting.data && setting.contentType !== 'application/x-www-form-urlencoded') {
        setting.data = type === 'get' ? $.param(setting.data) : JSON.stringify(setting.data);
      }
      return $.ajax(setting);
    },
    get(url, ...args) { // url, [data], success, [error], opt
      return this.query('get', url, ...args);
    },
    post(url, ...args) { // url, [data], success, [error], opt
      return this.query('post', url, ...args);
    },
    put(url, ...args) { // url, [data], success, [error], opt
      return this.query('put', url, ...args);
    }
  }

  window.API = API;

  var GLOBAL = {
    init: function() {
      let loadingAjaxCount = 0;
      $(document).on('ajaxBeforeSend', (e, xhr, options) => {
        const url = options.url;
        loadingAjaxCount++;
        console.log(options, '---options---');
        if (!/^https?:\/\//.test(options.url)) {
          // if ($core.Cookies.get(TOKEN)) {
          //   xhr.setRequestHeader(TOKEN, $core.Cookies.get(TOKEN));
          // }
          // xhr.setRequestHeader(PRODUCT_CODE, Utils.getProductCode());
        }
      });

      $(document).on('ajaxComplete', () => {
        if (loadingAjaxCount <= 1) {
          
        }
        loadingAjaxCount--;
      });
    }
  }

  GLOBAL.init();
})();