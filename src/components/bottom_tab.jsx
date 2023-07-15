import { Component } from "react";
import { connect } from "react-redux";
import { Tabbar, TabbarItem } from "@antmjs/vantui";
import { changeTab } from "../actions/tab";

@connect(
  ({ tab }) => ({
    tab,
  }),
  (dispatch) => ({
    changeTab(tab) {
      dispatch(changeTab(tab));
    },
  })
)
export default class BottomTab extends Component {
  render() {
    return (
      <Tabbar active={this.props.tab.active} onChange={this.props.changeTab}>
        <TabbarItem icon="home-o" title="首页" />
        <TabbarItem icon="search" title="搜索" />
        <TabbarItem icon="friends-o" title="朋友" />
        <TabbarItem icon="setting-o" title="设置" />
      </Tabbar>
    );
  }
}
