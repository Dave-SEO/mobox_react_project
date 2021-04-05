import { Col, Layout, Row } from 'antd';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import React from 'react';
import { MyHeader, SideMenu, Swiper } from './component';
import stores from './store';
const {Footer, Sider, Content } = Layout;

configure({enforceActions: 'observed'}) // 开启严格模式
// export interface defaultProps {
//   counter?:{count: number},
//   isLogin?: boolean,
// }
// // const stores = observable<defaultProps>({
// //   counter: {count: 1},
// //   isLogin: false
// // })

function App() {
  return (
    <div >
      <Provider {...stores}>
        <Layout>
          <MyHeader></MyHeader>
          <Content style={{height: '70vh', width: 1230, margin: '0 auto'}}>
            <Row style={{marginTop: 20}}>
              <Col span={6}>
                <SideMenu />
              </Col>
              <Col span={18}>
                  <Swiper></Swiper>
              </Col>
            </Row>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
