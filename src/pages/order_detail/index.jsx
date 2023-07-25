import { Component } from 'react';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { NavBar, Sticky, Icon, Button } from '@antmjs/vantui';
import { add, minus, asyncAdd } from '../../actions/counter';

import './index.scss';
import '../../app.scss'

export default function OrderDetail() {
  return (
    <View className="stack-container">
      <View className="background">
        <View className={'infoOfTimeContainer'} >
          <View className={'infoOfTime'} >
            <Text    style={{ fontSize: '64px'   }} >
              01
            </Text>
            <Text  style={{  marginBottom: '14px'  }}>
              小时
            </Text>
            <Text  style={{   fontSize: '64px'  }} >
              03
            </Text>
            <Text style={{  marginBottom: '14px'  }} >
              分钟
            </Text>
          </View>
          <Text style={{  paddingBottom: '12px'  }} >
            车位使用中
          </Text>
        </View>
        <View  className={'carBoardContainer'}  >
          <View
            className="foreground"
            style={{
              marginTop: '-20px',
              zIndex: '99',
            }}
          >
            <Text className={'carBoard'} > 鲁A·12345 </Text>
          </View>
        </View>
        <View className={'infoContainer'} >
          <Icon name="location-o" size="96" color="#FFC919" />
          <View  className={'detailInformation'}  >
            <Text>停车地点：美莲广场</Text>
            <Text>车位编号：A-01</Text>
            <View className="divide"/>
            <Text>预约时间：11月11日 12:00</Text>
            <Text>最晚入场：11月11日 12:00</Text>
            <Text>最晚离场：11月11日 12:00</Text>
            <View className="divide"/>
            <Text>收费标准：1元/小时</Text>
            <Text>超时收费：1元/小时</Text>
            <View className="divide"/>
            <View className={'costContainer'}>
              <Text>停车费用：</Text>
              <Text className={'cost NameOrTitle'}>3.75 </Text>
              <Text className={'cost'}>￥</Text>
            </View>
          </View>
        </View>
        <View style={{   width: '80%',   margin: '0 auto'}} >
          <Button
            color="#FFC919"
            size="large"
            type="default"
            style={{color: '#000'}}
          >
            结束停车/支付
          </Button>
        </View>
      </View>
    </View>
  );
}
