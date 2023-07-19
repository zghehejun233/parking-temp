import { useState, useEffect } from 'react';
import { View, Text, Map, CoverView, Button, Block,Image,Icon } from '@tarojs/components';
import { Popup, Sticky } from '@antmjs/vantui';
import SearchBar from '../../components/search_bar';
import PopupOrder from '../../components/popup_order';
import './index.scss';
import React, { Component } from 'react'


function Body(){
  return (
    <View className={'bodyContainer'}>
      <View className={'innerContainer1'} style={{paddingTop:"30px"}}>
          <View className={'cen mid'} style={{position:"relative",left: "50%",
            transform:" translateX(-50%)",width:"120px",height:"120px"}}>
            <View className={'logo2 cen mid'}> <Text>√</Text>
          </View>
          </View>
          <View className={'cen'} style={{fontSize:"30px",color:"brown"}}>预定成功</View>
          <View  className={'cen'} style={{fontSize:"15px",margin:"10px"}}>预定成功喵,你也太成功了吧,牛蛙牛蛙</View>
      </View>
      <View className={'divide'}/>
      <View className={'innerContainer2'}>
        <View className={'infoContainer buzhidaoganshad'}>
          <View  style={{fontSize:"25px"}} className={'logo cen mid'}> <Text>P</Text>
          </View>
          <View className={'info'}>
               <View className={'infoElement'}>
                 <View style={{fontSize:"20px"}}>美联广场车位: 13号</View>
                 <View style={{fontSize:"12px",marginTop: '4px'}}>
                   <View style={{background:"black",color:"white",borderRadius:"10px"
                     ,height:"18px",border:'none',marginTop: '4px',
                     padding:"2px",width:"50px",float:'left'}}>普通车位</View>
                   <Text style={{marginLeft:"2px",float:'left' ,marginLeft:"10px",marginTop: '6px'}}>  一切正常</Text>
                 </View>
               </View>
               <View className={'divide'} style={{marginTop:"10px"}}/>
               <View className={'infoElement'}>
                 <View style={{fontSize:"12px"}}>预约时间: 2021 年 2 月 12 日</View>
                 <View style={{fontSize:"12px",marginTop: '4px'}}>截止事件: 1946932654</View>
               </View>
          </View>

        </View>
        <View className={'buttonContainer buzhidaoganshad'}>
        <Button className={'button1 mid cen'}   loading-text="ing">
          购买停车位
        </Button>
        <Button className={'button2 mid cen'}  loading-text="ing">
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
