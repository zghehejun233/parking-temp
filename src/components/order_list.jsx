import React, { useCallback, useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Image as TaroImage, Text } from '@tarojs/components';
import {
  PullToRefresh,
  VirtualList,
  InfiniteScroll,
  Sticky,
  Cell,
  CellGroup,
  Icon,
} from '@antmjs/vantui';

export default function OrderList() {
  const [data, setdata] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    mockData().then((res) => {
      setdata(res);
    });
  }, []);

  const mockData = () => {
    const initData = [
      {
        carCode: '粤B12345',
        location: '美莲广场',
        carport: 'B1-235',
        // 使用标准时间格式
        orderedTime: '2021-01-01 12:00',
        latesetInTime: '2021-01-01 13:00',
        latesetOutTime: '2021-01-01 12:00',
        status: '使用中',
        price: '2.5',
        exceedPrice: '30',
        currentCost: '3.75',
      },
      {
        carCode: '鲁A12345',
        location: '美莲广场',
        carport: 'B1-235',
        orderedTime: '2021-01-01 12:00',
        latesetInTime: '2021-01-01 12:00',
        latesetOutTime: '2021-01-01 12:00',
        status: '使用中',
        price: '2.5',
        exceedPrice: '30',
        currentCost: '3.75',
      },
      {
        carCode: '粤B12345',
        location: '美莲广场',
        carport: 'B1-235',
        orderedTime: '2021-01-01 12:00',
        latesetInTime: '2021-01-01 12:00',
        latesetOutTime: '2021-01-01 12:00',
        status: '使用中',
        price: '2.5',
        exceedPrice: '30',
        currentCost: '3.75',
      },
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new Array(10).fill(0).map(() => {
            return initData[Math.floor(Math.random() * 4)];
          })
        );
      }, 200);
    });
  };

  const InfiniteScrollRef = React.useRef();
  const VirtualListRef = React.useRef();

  const loadMore = async () => {
    return new Promise(async (resolve) => {
      const result = await mockData();
      const newData = data.concat(result);
      setdata(newData);
      resolve(newData.length > 110 ? 'complete' : 'loading');
    });
  };

  const onRefresh = async () => {
    return new Promise(async (resolve) => {
      InfiniteScrollRef.current?.reset();
      const result = await mockData();
      await VirtualListRef.current?.reset(result);
      setdata(result);
      resolve(undefined);
    });
  };

  return (
    <View>
      <View style={{ height: 'calc(100vh - 50px)' }}>
        <PullToRefresh onRefresh={onRefresh}>
          <VirtualList
            // style={{ padding: 10, boxSizing: 'border-box' }}
            height="100vh"
            dataSource={data}
            showCount={6}
            ref={VirtualListRef}
            footer={
              data.length > 0 ? null : ( 
                <Text>暂无数据</Text>
              )
            }
            ItemRender={({ index, item, className, ...props }) => {
              return (
                (item && (
                  <View
                    key={index}
                    className={`bd-moment-post-wrapper ${className}`}
                    {...props}
                    onClick={() => {
                      Taro.navigateTo({
                        url: '/pages/order_detail/index',
                      });
                    }}
                  >
                    <Cell
                      inset
                      center
                      title={item.carCode}
                      renderTitle={
                        <View>
                          <Text>{item.location}</Text>
                          <Text>{item.carport}</Text>
                          <Text>{item.currentCost}</Text>
                        </View>
                      }
                      renderExtra={
                        <View>
                          <Text>
                            {'已使用' + formatTime(new Date(item.orderedTime))}
                          </Text>
                        </View>
                      }
                      renderIcon={
                        item.status === '使用中' ? (
                          <Icon name="success" />
                        ) : (
                          <Icon name="close" />
                        )
                      }
                      renderLabel={
                        <View>
                          <Text>{item.location + item.carport}</Text>
                        </View>
                      }
                    />
                  </View>
                )) || <View />
              );
            }}
          />
        </PullToRefresh>
      </View>
    </View>
  );
}
function formatTime(date) {
  //   const hours = date.getUTCHours();
  //   const minutes = date.getMinutes();

  //   // 使用字符串拼接
  //   const timeString = hours.toString().padStart(2, '0') + '小时';
  //   if (minutes !== 0) {
  //     timeString += minutes.toString().padStart(2, '0') + '分钟';
  //   }

  // 使用模板字面量
  // const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  const timeString = '1小时30分钟';
  return timeString;
}
