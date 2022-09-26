import { Layout, Divider } from "antd";

import React from "react";
import "antd/dist/antd.css";
import Map from "./map";
import Test from "./test_comp_01";

const { Sider, Content, Footer } = Layout;

const App = () => (
  // <Layout className="layout">
  //   <Test />
  // </Layout>

  <Layout className="layout">
    {/* <Split> */}
    <Sider>
      <Divider gutter={16}>
        <div style={{ bordercolor: "white" }}>
          <p style={{ color: "gray" }}>Заявка</p>
        </div>
      </Divider>
    </Sider>

    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <div className="site-layout-content">
        <Map />
      </div>
    </Content>
    {/* </Split> */}
  </Layout>
);

export default App;
