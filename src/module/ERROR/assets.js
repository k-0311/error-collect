import { COMMONE_PROTOTYPE } from '@/common/portotype'

class AssetsError {
  install (app) {
    window.addEventListener('error', function (err) {
      let resourceLoadInfo = {
        errorType: 'RESOURCE_LOAD',
        localName: err.target.localName,
        resourceUrl: err.target.localName === 'link' ? err.target.href : err.target.src,
        ...COMMONE_PROTOTYPE
      }
      app.$http(resourceLoadInfo);
    }, true)
  }
}

export default new AssetsError()