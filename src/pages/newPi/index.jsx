import { useState, useEffect } from 'react';
import { View, Text, Map, CoverView, Button, Block,Image,Icon } from '@tarojs/components';
import { Popup, Sticky } from '@antmjs/vantui';
import SearchBar from '../../components/search_bar';
import PopupOrder from '../../components/popup_order';
import './index.scss';
import '../../app.scss'
import React, { Component } from 'react'


function Body(){
  return (
    <View className={'bodyContainer'}>
      <View className={'innerContainer1'} style={{paddingTop:"30px"}}>
          {/*这个标签以及内部是个标签,因为暂时没有素材所以用css整了个,后面换成图片就行*/}
          <View className={'cen mid '} style={{position:"relative",left: "50%",
            transform:" translateX(-50%)",width:"120px",height:"120px"}}>
            <View className={'logo2 cen mid bgcolor3'}> <Text>√</Text>
          </View>
          {/*对就是上面的部分*/}
          </View>
          <View className={'cen big-FontSize NameOrTitle'}>预定成功</View>
          <View  className={'cen small-FontSize'}>预定成功喵,你也太成功了吧,牛蛙牛蛙</View>
      </View>
      <View className={'divide'}/>
      <View className={'innerContainer2'}>
        <View className={'infoContainer buzhidaoganshad'}>
          <View  style={{fontSize:"25px"}} className={'logo cen mid bgcolor3'}> <Text>P</Text>
          </View>
          <View className={'info'}>
               <View className={'infoElement'}>
                 <View  className={'middle-FontSize NameOrTitle'}>美联广场车位: 13号</View>
                 <View style={{fontSize:"12px",marginTop: '2px'}}>
                   <View className={'PropertiesOfBlackBlock'}>普通车位</View>
                   <Text className={'small-FontSize gray-Font'}
                   style={{marginLeft:"2px",float:'left' ,marginLeft:"10px",marginTop: '4px'}}>  一切正常</Text>
                 </View>
               </View>
               <View className={'divide'} style={{marginTop:"15px"}}/>
               <View className={'infoElement'}>
                 <View className={'small-FontSize fontFamily gray-Font'}>预约时间: 2021 年 2 月 12 日</View>
                 <View className={'small-FontSize  fontFamily gray-Font'}>截止事件: 1946932654</View>
               </View>
          </View>
        </View>
        <View className={'buttonContainer buzhidaoganshad'}>
        <Button className={'button1 mid cen bgcolor3'} style={{color:'white'}}   loading-text="ing">
          购买停车位
        </Button>
        <Button className={'button2 mid cen NameOrTitle bgcolor3'}  loading-text="ing">
          我再康康
        </Button>
        </View>
      </View>
    </View>
  )
}

function Index() {
  return (
    <View className={"container"}>
      <Body></Body>
    </View>
  );
}

export default Index;
