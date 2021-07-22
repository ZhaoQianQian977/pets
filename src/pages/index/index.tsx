import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

interface functionType{
  id?:number,
  title?:string,
  desc?:string,
  url?:string

}

function Index() {
  const functionList:functionType[] = [
    {
      id:0,
      title: "库存管理",
      desc: "包含药品、宠物用品管理",
      url:'/pages/stock/index'
    },
    {
      id:1,
      title: "排班管理",
      desc: "针对员工工作时间管理",
      url:'/pages/scheduling/index'
    },
    {
      id:2,
      title: "住院宠物管理",
      desc: "主治医生、用药记录",
      url:'/pages/hospitalization/index'
    },
    {
      id:3,
      title: "美容管理",
      desc: "美容排班",
      url:'/pages/cosmetology/index'
    },
  ];
  const navigatorClick=(item:functionType)=>{
    Taro.navigateTo({url:item.url})
  }
  return <View>
    {
      functionList?.map(item=>(
        <View onClick={()=>navigatorClick(item)}>{item.title}</View>
      ))
    }
  </View>;
}
export default Index;
