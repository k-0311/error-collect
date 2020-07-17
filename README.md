# error-collect
一个收集JavaScript错误和资源加载错误的小工具

# Usage

```javascript
import ec from 'rs-ec'

const someRequest = (error)=>{
    console.log(error) // error information collected
    //do something...
}
new ec(someRequest)
```

