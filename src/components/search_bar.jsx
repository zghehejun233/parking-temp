import React, { useState } from "react";
import { View } from "@tarojs/components";
import icons from "@vant/icons";
import { Popup, Button, Sticky, Field } from "@antmjs/vantui";
import '../app.scss'

export default function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-between",
          margin: " 0 16px",
        }}
      >
        <Field
          value={value}
          placeholder="请输入搜索关键词"
          border
          style={{ width: "100%", marginRight: "16px" }}
          onChange={(e) => {
            setValue(e.detail);
          }}
        />
        <Button
          icon="search"
          round
          className={'bgcolor3'}
          style={{ width: "48px" }}
        />
      </View>
    </View>
  );
}
