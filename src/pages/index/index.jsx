import { useState, useEffect } from "react";
import { View, Text, Map } from "@tarojs/components";
import { Popup } from "@antmjs/vantui";
import "./index.scss";

function Index() {
  const [show, setShow] = useState(false);
  const [markers, setmarkers] = useState([]);
  useEffect(() => {
    setmarkers([
      {
        id: 0,
        longitude: 113.32452,
        latitude: 23.099994,
        iconPath: "/image/location.png",
        width: 50,
        height: 50,
        callout: {
          content: "我在这里",
          color: "#000",
          fontSize: 16,
          borderRadius: 10,
          bgColor: "#fff",
          padding: 10,
          display: "ALWAYS",
        },
      },
    ]);
  }, []);

  return (
    <View>
      <Map
        width='800px'
        id='map'
        longitude='113.324520'
        latitude='23.099994'
        scale='14'
        markers={markers}
        onMarkerTap={(e) => {
          console.log("点击");
          setShow(true);
        }}
        onCalloutTap={(e) => {
          console.log("点击");
          setShow(true);
        }}
        onLabelTap={(e) => {
          console.log("点击");
          setShow(true);
        }}
        style={{ width: "100%", height: "calc(100vh - 50px)" }}
      />
      <Popup
        show={show}
        position='bottom'
        onClose={() => {
          setShow(false);
        }}
      >
        <Text>内容</Text>
      </Popup>
    </View>
  );
}

export default Index;
