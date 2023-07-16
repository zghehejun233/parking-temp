import react, { useState, useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { Popup, GridItem, Grid, NavBar } from '@antmjs/vantui';

export default function PopupOrder(props) {
  const [carNumber, setCarNumber] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    setCarNumber('鲁A12345');
  }, []);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Popup
      show={show}
      position="bottom"
      onClose={() => {
        setShow(false);
      }}
    >
      <View>
        <NavBar
          title="车牌号码"
          leftArrow
          safeAreaInsetTop={false}
          onClickLeft={() => {
            setShow(false);
          }}
        />
        <View
          style={{
            height: '24vh',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            clickable
            columnNum={7}
            border={false}
            square
            gutter={0}
            style={{ width: '70vw' }}
            onClick={(item) => {
              setCarNumber(item.text);
              setShow(false);
            }}
          >
            <GridItem text={carNumber.substring(0, 1)} />
            <GridItem text={carNumber.substring(1, 2)} />
            <GridItem text={carNumber.substring(2, 3)} />
            <GridItem text={carNumber.substring(3, 4)} />
            <GridItem text={carNumber.substring(4, 5)} />
            <GridItem text={carNumber.substring(5, 6)} />
            <GridItem text={carNumber.substring(6, 7)} />
          </Grid>
        </View>
        {/* 确认和清除按钮 */}
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 16px',
          }}
        >
          <Text
            style={{ color: '#1989fa', fontSize: '16px' }}
            onClick={() => {
              setShow(false);
            }}
          >
            清除
          </Text>
          <Text
            style={{ color: '#1989fa', fontSize: '16px' }}
            onClick={() => {
              setShow(false);
            }}
          >
            确认
          </Text>
        </View>
      </View>
    </Popup>
  );
}
