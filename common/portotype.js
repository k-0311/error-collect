import detector from 'detector'

// 设备信息相关
export const DETECTOR_OS = {
  device:detector.device.name, 
  os:`${detector.os.name} ${detector.os.fullVersion}`,
  engine:`${detector.engine.name} ${detector.engine.fullVersion}`,
  browser:`${detector.browser.name} ${detector.browser.fullVersion}`,
}


export const COMMONE_PROTOTYPE = {
  WebId: 'CDPF-UBI-SCVR',
  userIp: '192.168.1.120',
  time: new Date().getTime(),
  errorUrl: location.href,
}