import { useState, useEffect } from 'react';
import { View, Text, Map, CoverView } from '@tarojs/components';
import { Popup, Sticky } from '@antmjs/vantui';
import SearchBar from '../../components/search_bar';
import PopupOrder from '../../components/popup_order';
import './index.scss';
import '../../app.scss'

function Index() {
  const [show, setShow] = useState(false);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    setMarkers([
      {
        id: 0,
        longitude: 113.32452,
        latitude: 23.099994,
        iconPath: '/image/location.png',
        width: 50,
        height: 50,
        callout: {
          content: '我在这里',
          color: '#000',
          fontSize: 16,
          borderRadius: 10,
          bgColor: '#fff',
          padding: 10,
          display: 'ALWAYS',
        },
      },
    ]);
  }, []);

  return (
    <View>
      <Map
        width="800px"
        id="map"
        longitude="113.324520"
        latitude="23.099994"
        scale="14"
        markers={markers}
        onCalloutTap={() => {
          console.log('点击');
          setShow(true);
          console.log('Current show:', show);
        }}
        className={'sizeOfMap imgAndMapGray'}
      >
        <CoverView
          className={'cssOfCoverView '}
        >
          {' '}
          <SearchBar />
        </CoverView>
      </Map>
      <PopupOrder show={show} />
    </View>
  );
}

export default Index;
