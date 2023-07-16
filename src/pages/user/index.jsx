import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import {
  Cell,
  Grid,
  GridItem,
  Image,
  Collapse,
  CollapseItem,
  CellGroup,
} from '@antmjs/vantui';
import { getUserInfo } from '../../api/user';
import './index.scss';

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
        <View>
          <CellGroup inset>
            <Cell
              center
              value="内容"
              isLink
              renderTitle={
                <View
                  style={{ display: 'flex', alignItems: 'center', margin: 12 }}
                >
                  <Image
                    id='avatar'
                    round
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                  />
                  <Text>{getUserInfo().nickName}</Text>
                </View>
              }
            />
          </CellGroup>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: '10px',
          }}
        >
          <Text
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '10px 0 10px 10px',
            }}
          >
            我的车辆
          </Text>
          <Collapse accordion>
            <CollapseItem title="鲁A12345" name="1">
              <View>
                <Cell title="车牌号" value="鲁A12345" />
                <Cell title="车辆类型" value="小型汽车" />
                <Cell title="车辆品牌" value="大众" />
                <Cell title="车辆型号" value="大众" />
                <Cell title="车辆颜色" value="白色" />
              </View>
            </CollapseItem>
            <CollapseItem title="鲁A23456" name="2">
              <View>
                <Cell title="车牌号" value="鲁A23456" />
                <Cell title="车辆类型" value="小型汽车" />
                <Cell title="车辆品牌" value="大众" />
                <Cell title="车辆型号" value="大众" />
                <Cell title="车辆颜色" value="白色" />
              </View>
            </CollapseItem>
            <CollapseItem title="鲁A34567" name="3">
              <View>
                <Cell title="车牌号" value="鲁A34567" />
                <Cell title="车辆类型" value="小型汽车" />
                <Cell title="车辆品牌" value="大众" />
                <Cell title="车辆型号" value="大众" />
                <Cell title="车辆颜色" value="白色" />
              </View>
            </CollapseItem>
          </Collapse>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: '10px',
          }}
        >
          <Text
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '10px 0 10px 10px',
            }}
          >
            更多功能
          </Text>
          <Grid
            clickable
            columnNum={4}
            border={false}
            gutter={0}
            iconSize="32px"
          >
            <GridItem icon="chat-o" text="文字" />
            <GridItem icon="photo-o" text="图片" />
            <GridItem icon="photo-o" text="图片" />
            <GridItem icon="photo-o" text="图片" />
          </Grid>
        </View>
      </View>
    );
  }
}

export default User;
