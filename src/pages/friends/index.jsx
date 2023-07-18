import React, {useCallback, useState} from "react";
import { View, Image as TaroImage, Text } from "@tarojs/components";
import {
  PullToRefresh,
  VirtualList,
  InfiniteScroll,
  Sticky,
} from "@antmjs/vantui";
import "./index.scss";
import { getUserInfo } from '../../api/user';

function Friends() {
  const [data, setdata] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const mockGoods = () => {
    const initData = [
      {
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        username: 'John Doe',
        content: '这是一条示例帖子内容。',
        postTime: '2023-07-18 14:30:00',
        likes: 10,
      },
      {
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        username: 'Jane Smith',
        content: '这是另一条示例帖子内容。',
        postTime: '2023-07-17 10:15:00',
        likes: 5,
      },
      {
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        username: 'Bob Johnson',
        content: '这是第三条示例帖子内容。',
        postTime: '2023-07-16 13:45:00',
        likes: 3,
      },
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new Array(8).fill("").map((_, index) => {
            return {
              index,
              ...initData[index % 4],
            };
          })
        );
      }, 1400);
    });
  };

  const InfiniteScrollRef = React.useRef();
  const VirtualListRef = React.useRef();

  const loadMore = async () => {
    return new Promise(async (resolve) => {
      const result = await mockGoods();
      const newData = data.concat(result);
      setdata(newData);
      resolve(newData.length > 110 ? "complete" : "loading");
    });
  };

  const onRefresh = async () => {
    return new Promise(async (resolve) => {
      InfiniteScrollRef.current?.reset();
      const result = await mockGoods();
      await VirtualListRef.current?.reset(result);
      setdata(result);
      resolve(undefined);
    });
  };

  return (
    <View>
      <Sticky zIndex={-1}>
        <View style={{ position: "relative" }}>
          <TaroImage
            src={getUserInfo().avatarUrl}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "5px",
              position: "absolute",
              bottom: "10px",
              right: "10px"
            }} />
          <View style={{ height: "150px", backgroundColor: "#ccc" }} />
        </View>
      </Sticky>
      <View style={{ height: "calc(100vh - 50px)" }}>
        <PullToRefresh onRefresh={onRefresh}>
          <VirtualList
            style={{ padding: 10, boxSizing: "border-box" }}
            height='calc(100vh - 50px)'
            dataSource={data}
            showCount={3}
            ref={VirtualListRef}
            footer={
              <InfiniteScroll
                parentClassName='van-virtual-list'
                loadMore={loadMore}
                ref={InfiniteScrollRef}
              />
            }
            ItemRender={({ index, item, className, ...props }) => {
              return (
                <View
                  className={`bd-moment-post-wrapper ${className}`}
                  {...props}
                >
                  <View className='bd-moment-post'>
                    <TaroImage src={item.avatar} className='img' />
                    <View className='username'>{item.username}</View>
                    <View className='content'>{item.content}</View>
                    <View className='postTime'>{item.postTime}</View>
                    <View className='likes'>{item.likes}</View>
                  </View>
                </View>
              );
            }}
          />
        </PullToRefresh>
      </View>
    </View>
  );
}

export default Friends;
