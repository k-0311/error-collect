class App {
  static modules = []
  constructor(http) {
    if (!http || typeof http !== 'function') {
      throw new Error('Please pass in a request method that must be a function')
    }
    this.$http = http
    this._init();
  }
  _init () {
    this._rewriteConsoleError()
    this._installModules()
  }
  _rewriteConsoleError () {
    const oldError = console.error;
    console.error = function (tempErrorMsg, isSend = false) {
      if (isSend) {
        let errorMsg = (arguments[0] && arguments[0].message) || tempErrorMsg;
        let errorStack = arguments[0] && arguments[0].stack;
        let console_error = {
          errorType: 'CONSOLE_ERROR',
          errorMsg,
          errorStack: errorStack ? errorStack : `CustomizeError：${errorMsg}`
        }
        this.$http(console_error)
      }
      return oldError.apply(console, arguments);
    }
  }
  _installModules () {
    App.modules.map(module => {
      if (typeof module == 'function') {
        module(this)
      } else if (module.install && typeof module.install == 'function') {
        module.install(this)
      }
    });
  }
  static use (module) {
    Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);
    return this
  }
}

export default App