const LoginService = (function () {
    var _service;
    function _getService() {
      if (!_service) {
        _service = this;
        return _service;
      }
      return _service;
    }
    function _setAccessToken(token) {
      localStorage.setItem("jwt", token);
    }
    function _getAccessToken() {
      return localStorage.getItem("jwt");
    }

    function _clearTokenService() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
      }
    
  
    
  
    return {
      getService: _getService,
      setAccessToken: _setAccessToken,
      getAccessToken: _getAccessToken,
      cleanService: _clearTokenService
    };
  })();
  export default LoginService;