import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import HeaderBar from '../../components/HeaderBar'
import SideMenu from '../../components/SideMenu'
import BizCharts from '../BizCharts'
import Form from '../Form'
import GouldMap from '../GouldMap'
import Table from '../Table'

const { Content } = Layout

class Main extends Component {
  render() {
    return (
      <Layout>
        <HeaderBar />
        <Layout>
          <SideMenu />
          <Content>
            <Switch>
              <Route exact path="/" component={Table} />
              <Route path={'/biz-charts'} component={BizCharts} />
              <Route path={'/form'} component={Form} />
              <Route path={'/map'} component={GouldMap} />
              <Route path={'/table'} component={Table} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default Main
