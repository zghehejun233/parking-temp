import { Component } from 'react';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { NavBar, Sticky, Icon, Button } from '@antmjs/vantui';
import { add, minus, asyncAdd } from '../../actions/counter';

import './index.scss';

export default function OrderDetail() {
  return (
    <View className="stack-container">
      <View className="background">
        <View
          style={{
            height: '24vh',
            backgroundColor: '#FFC919',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            letterSpacing: '2px',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
              padding: '0 20px',
              width: '80%',
              fontSize: '24px',
            }}
          >
            <Text
              style={{
                fontSize: '64px',
              }}
            >
              01
            </Text>
            <Text
              style={{
                marginBottom: '14px',
              }}
            >
              小时
            </Text>
            <Text
              style={{
                fontSize: '64px',
              }}
            >
              03
            </Text>
            <Text
              style={{
                marginBottom: '14px',
              }}
            >
              分钟
            </Text>
          </View>
          <Text
            style={{
              paddingBottom: '12px',
            }}
          >
            车位使用中
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '1px',
          }}
        >
          <View
            className="foreground"
            style={{
              marginTop: '-20px',
              zIndex: '99',
            }}
          >
            <Text
              style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              鲁A·12345
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'flex-start',
            marginTop: '48px',
            marginLeft: '20px',
          }}
        >
          <Icon name="location-o" size="96" color="#FFC919" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '20px',
              fontSize: '14px',
              // 控制行距和字体间隔
              lineHeight: '28px',
              letterSpacing: '1px',
            }}
          >
            <Text>停车地点：美莲广场</Text>
            <Text>车位编号：A-01</Text>
            <Text>预约时间：11月11日 12:00</Text>
            <Text>最晚入场：11月11日 12:00</Text>
            <Text>最晚离场：11月11日 12:00</Text>
            <Text>收费标准：1元/小时</Text>
            <Text>超时收费：1元/小时</Text>
            <View
              style={{
                height: '48px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <Text>停车费用：</Text>
              <Text
                style={{
                  // color: '#FFC919',
                  fontSize: '36px',
                  marginBottom: '6px',
                }}
              >
                3.75
              </Text>
              <Text>元</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '80%',
            margin: '0 auto',
          }}
        >
          <Button
            color="#FFC919"
            size="large"
            type="default"
            style={{
              // 修改字体为黑色
              color: '#000',
            }}
          >
            结束停车&支付
          </Button>
        </View>
      </View>
    </View>
  );
}
