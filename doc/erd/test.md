
## Enzyme的一些API：
- type()：返回当前组件的类型
- text()：返回当前组件的文本内容
- html()：返回当前组件的HTML代码形式
- props()：返回根组件的所有属性
- prop(key)：返回根组件的指定属性
- state([key])：返回根组件的状态
- setState(nextState)：设置根组件的状态
- setProps(nextProps)：设置根组件的属性
- find(selector)：返回元素
- debug()：返回当前组件的HTML代码的字符串形式
- exists([selector])：返回当前组件是否存在的布尔值
- simulate(event[, ...args]：组件交互,用来模拟事件触发
- instance()：返回测试组件的实例；
- at(index)：返回一个渲染过的对象；
- get(index)：返回一个react node，要测试它，需要重新渲染；
- contains(nodeOrNodes)：当前对象是否包含参数重点 node，参数类型为react对象或对象数组；
