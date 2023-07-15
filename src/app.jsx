import { Component } from 'react'
import { Provider } from 'react-redux'

import configStore from './store'

import './app.scss'

const store = configStore()

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      // 通过 Provider 组件将 Redux 的 store 传递给子组件，相当于进行全局注入
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
