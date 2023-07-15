import { Component } from "react";
import { connect } from "react-redux";
import { View, Button, Text } from "@tarojs/components";
import {
  Cell,
  CellGroup,
  Toast,
  NavBar,
  MiniNavBar,
  Icon,
  Grid,
  GridItem,
  Tag,
  Image,
} from "@antmjs/vantui";
import { Collapse, CollapseItem } from "@antmjs/vantui";
import { add, minus, asyncAdd } from "../../actions/counter";
import { getUserInfo } from "../../api/user";
import "./index.scss";

class User extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <NavBar title='用户' safeAreaInsetTop={false} />
        {/* <CellGroup inset>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </CellGroup> */}
        <View>
          <Cell
            center
            value='内容'
            isLink
            renderTitle={
              <View
                style={{ display: "flex", alignItems: "center", margin: 12 }}
              >
                <Image
                  round
                  width={96}
                  height={96}
                  src='https://img.yzcdn.cn/vant/cat.jpeg'
                />
                <Text>{getUserInfo().nickName}</Text>
              </View>
            }
          />
        </View>
        <View>
          <Collapse accordion>
            <CollapseItem title='鲁A12345' name='1'>
              <View>
                <Cell title='车牌号' value='鲁A12345' />
                <Cell title='车辆类型' value='小型汽车' />
                <Cell title='车辆品牌' value='大众' />
                <Cell title='车辆型号' value='大众' />
                <Cell title='车辆颜色' value='白色' />
              </View>
            </CollapseItem>
            <CollapseItem title='鲁A23456' name='2'>
              <View>
                <Cell title='车牌号' value='鲁A23456' />
                <Cell title='车辆类型' value='小型汽车' />
                <Cell title='车辆品牌' value='大众' />
                <Cell title='车辆型号' value='大众' />
                <Cell title='车辆颜色' value='白色' />
              </View>
            </CollapseItem>
            <CollapseItem title='鲁A34567' name='3'>
              <View>
                <Cell title='车牌号' value='鲁A34567' />
                <Cell title='车辆类型' value='小型汽车' />
                <Cell title='车辆品牌' value='大众' />
                <Cell title='车辆型号' value='大众' />
                <Cell title='车辆颜色' value='白色' />
              </View>
            </CollapseItem>
          </Collapse>
        </View>
        <Grid clickable columnNum={4} border={false} gutter={0} iconSize='32px'>
          <GridItem icon='chat-o' text='文字' />
          <GridItem icon='photo-o' text='图片' />
          <GridItem icon='camera-o' text='拍摄' />
          <GridItem icon='photo-o' text='图片' />
          <GridItem icon='photo-o' text='图片' />
        </Grid>
      </View>
    );
  }
}

export default User;
