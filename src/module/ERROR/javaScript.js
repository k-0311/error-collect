import { COMMONE_PROTOTYPE, DETECTOR_OS } from '@/common/portotype'

class JavaScriptError {
  install (app) {
    window.onerror = function (...args) {
      let jsError = {
        errorType: 'JS_ERROR',
        errorMsg: args[0],
        errorStack: JSON.stringify(args[4]['stack']).replace(/\\n[\s]*/g, ' '),
        ...DETECTOR_OS,
        ...COMMONE_PROTOTYPE
      }
      app.$http(jsError)
    }
    window.addEventListener('unhandledrejection', err => {
      let errorMsg = typeof err.reason === 'object' ? err.reason.message : err.reason;
      let errorStack = typeof err.reason === 'object' ? err.reason.stack : '';
      let rejectError = {
        errorType: 'UNCAUGHT_REJECT',
        errorMsg,
        errorStack,
        ...DETECTOR_OS,
        ...COMMONE_PROTOTYPE
      }
      app.$http(rejectError)
    }, true);
  }
}

export default new JavaScriptError()