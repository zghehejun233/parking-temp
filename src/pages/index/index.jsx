import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from '@tarojs/components'
import { Button, Tabbar, TabbarItem } from '@antmjs/vantui'
import { add, minus, asyncAdd } from '../../actions/counter'
import { changeTab } from '../../actions/tab'
import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

@connect(({ tab }) => ({
  tab
}), (dispatch) => ({
  changeTab (tab) {
    dispatch(changeTab(tab))
  }
}))

class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <Tabbar active={this.props.tab.active} onChange={this.props.changeTab}>
          <TabbarItem icon='home-o' title='首页' />
          <TabbarItem icon='search' title='搜索' />
          <TabbarItem icon='friends-o' title='朋友' />
          <TabbarItem icon='setting-o' title='设置' />
        </Tabbar>
      </View>
    )
  }
}

export default Index

