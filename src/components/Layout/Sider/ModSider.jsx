import React from 'react'
import { Layout } from 'antd'
import './modSider.less'

const {Sider} = Layout

export default function ModSider() {
    return (
    <Sider
    width={300} 
    className="bgColor">
        Mod Sider        
    </Sider>
    )
}
