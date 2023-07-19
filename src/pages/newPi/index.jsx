import { useState, useEffect } from 'react';
import { View, Text, Map, CoverView } from '@tarojs/components';
import { Popup, Sticky } from '@antmjs/vantui';
import SearchBar from '../../components/search_bar';
import PopupOrder from '../../components/popup_order';
import './index.scss';


function Top(){
  return (
    <View className={'top mid'}>
      <View style={{position:"absolute",left: "3%"}}>  {"<"}  </View>
      <View style={{position:"relative",left: "50%",
        transform:" translateX(-50%)"}}>  预约成功 </View>
      <View style={{position:"absolute",right: "3%"}} className={'mid'}>
        <button style={{background:"white",border:"none",height:"25px",width:"30px",
          borderBottomLeftRadius:"15px",borderTopLeftRadius:"15px",borderRight:"solid grey 1px"}}><strong>···</strong></button>
        <button style={{background:"white",border:"none",height:"25px",width:"30px",
          borderBottomRightRadius:"15px",borderTopRightRadius:"15px",borderLeft:"solid grey 1px"}}>⚪</button>
      </View>
    </View>
  )
}
function Body(){
  return (
    <View className={'bodyContainer'}>
      <View className={'innerContainer1'} style={{paddingTop:"30px"}}>
          <View className={'cen mid'} style={{position:"relative",left: "50%",
            transform:" translateX(-50%)",width:"120px",height:"120px",border:"solid 1px"}}>
            图片标签
          </View>
          <View className={'cen'} style={{fontSize:"30px",color:"brown"}}><strong>预定成功</strong></View>
          <View  className={'cen'} style={{fontSize:"10px"}}>预定成功喵,你也太成功了吧,牛蛙牛蛙</View>
      </View>
      <View className={'divide'}/>
      <View className={'innerContainer2'}>
        <View className={'infoContainer buzhidaoganshad'}>
          <View className={'logo cen mid'}> <Text>P</Text>
          </View>
          <View className={'info'}>
               <View className={'infoElement'}>
                 <View style={{fontSize:"16px"}}><strong>美联广场车位: 13号</strong></View>
                 <View style={{fontSize:"12px",marginTop: '4px'}}>
                   <button style={{background:"black",color:"white",borderRadius:"10px"
                     ,height:"20px",border:'none',marginTop: '4px',padding:"2px"}}>普通车位</button>
                   <Text style={{marginLeft:"2px"}}>  一切正常</Text>
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
          <button className={'button1'}><strong>买下这车位</strong></button>
          <button className={'button2'}><strong>买下这车位</strong></button>
        </View>

      </View>
    </View>
  )
}

function Index() {
  return (
    <View className={"container"}>
     <Top></Top>
      <Body></Body>
    </View>
  );
}

export default Index;
