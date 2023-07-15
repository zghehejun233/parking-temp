import react from "react";
import { View, Image as TaroImage, Text } from "@tarojs/components";
import {
  PullToRefresh,
  VirtualList,
  InfiniteScroll,
  Sticky,
} from "@antmjs/vantui";
import "./index.scss";

function Friends() {
  const [data, setdata] = react.useState([]);
  const mockGoods = () => {
    const initData = [
      {
        image: "https://img.yzcdn.cn/vant/cat.jpeg",
        title:
          "中老年羽绒服男冬季爸爸装薄短款白鸭绒中年人男士保暖外套男装 夜空黑 L【建议115斤以内】",
        price: "¥165.00",
      },
      {
        image: "https://img.yzcdn.cn/vant/cat.jpeg",
        title: "HLA海澜之家马丁靴男士高帮男靴复古工装鞋",
        price: "¥361.00",
      },
      {
        image: "https://img.yzcdn.cn/vant/cat.jpeg",
        title:
          "洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭 灰色 41-42【标准码】",
        price: "¥22.50",
      },
      {
        image: "https://img.yzcdn.cn/vant/cat.jpeg",
        title: "夏季新款男士T恤宽松气质高端百搭时尚短袖体恤潮牌",
        price: "¥212.00",
      },
    ];
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new Array(8).fill("").map((_, index) => {
            return {
              index,
              ...initData[index % 4],
              isCutPrice: index % 2 === 0 ? true : false,
            };
          })
        );
      }, 1400);
    });
  };

  const InfiniteScrollRef = react.useRef();
  const VirtualListRef = react.useRef();

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
        <TaroImage src='https://img.yzcdn.cn/vant/cat.jpeg' />
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
                  className={`van-demo-goods-item-wrapper ${className}`}
                  {...props}
                >
                  <View className='van-demo-goods-item'>
                    <TaroImage src={item.image} className='img' />
                    <View className='title'>{item.title}</View>
                    {item.isCutPrice && (
                      <Text className='cutPrice'>最近大降价</Text>
                    )}
                    <View className='price'>{item.price}</View>
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
