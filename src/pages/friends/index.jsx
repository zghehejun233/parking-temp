import React, { useState } from "react";
import { View, Image as TaroImage, Text } from "@tarojs/components";
import {
  PullToRefresh,
  VirtualList,
  InfiniteScroll,
  Sticky,
} from "@antmjs/vantui";
import "./index.scss";
import '../../app.scss'
import { getUserInfo } from '../../api/user';

function Friends() {
  const [data, setdata] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const mockData = () => {
    const initData = [
      {
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        username: 'XarNud Vilas',
        content: '这tm哥们也不敢乱扣啊',
        postTime: '2023-07-16 13:45:00',
        likes: 114514,
      },
      {
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        username: 'Shinohara Haruna',
        content: '前端太苦逼，我绷不住了',
        postTime: '2023-07-16 13:45:00',
        likes: 114514,
      },
      {
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        username: '郭硕导',
        content: '钱还没定，先意思意思（',
        postTime: '2023-07-16 13:45:00',
        likes: 1919810,
      },
      {
        avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
        username: '董叔',
        content: '确实 前端不好写',
        postTime: '2023-07-16 13:45:00',
        likes: 2147483648,
      },
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
      resolve(newData.length > 110 ? "complete" : "loading");
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
      <Sticky zIndex={-1}>
        <View style={{ position: "relative" }}>
          <TaroImage
            src={getUserInfo().avatarUrl}
            className={'sizeOfImg'} />
          <View style={{ height: "150px", backgroundColor: "#ccc" }} />
        </View>
      </Sticky>
      <View style={{ height: "calc(100vh - 50px)" }}>
        <PullToRefresh onRefresh={onRefresh}>
          <VirtualList
           className={'cssOfVirtualList'}
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
                    <View className="bd-moment-post__header">
                      <TaroImage src={item.avatar} className='img' />
                      <View className='username NameOrTitle'>{item.username}</View>
                    </View>
                    <View className='bd-moment-post__body'>
                      <View className='content'>{item.content}</View>
                    </View>
                    <View className='bd-moment-post__footer'>
                      <View className='postTime timeColor'>{item.postTime}</View>
                      <View className='likes likeColor'>👍{item.likes}</View>
                    </View>
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
