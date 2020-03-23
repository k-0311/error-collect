import App from './module/app-core'
import assets from './module/ERROR/assets'
import javaScript from './module/ERROR/javaScript'

App.use(assets)
App.use(javaScript)

const _app =  new App(function(res){
  console.log(res)
})

// console.log(_app.$http())
// export { App }
// export default App