import React from 'react'
import './customLayout.less'
import { Layout } from 'antd'

// My Custom imports
import ModHeader from "./Header/ModHeader"
import ModSider from "./Sider/ModSider"
import ModContent from "./Content/ModContent"
import ModBreadCrumb from "./BreadCrumb/ModBreadCrumb"


export default function CustomLayout() {
  
  return (
    <Layout>
    <ModHeader/>
    <Layout>
      <ModSider/>
      <Layout className="space">
        <ModBreadCrumb/>
        <ModContent/>
      </Layout>
    </Layout>
  </Layout>
  )
}

