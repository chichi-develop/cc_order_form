import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  //Button,
  Container,
  Row,
  Col } from 'reactstrap';

import { BrowserRouter, Route, } from 'react-router-dom';

import EmployeeList from './employee/employee_list';
import EmployeeDetail from './employee/employee_detail';
import EmployeeNew from './employee/employee_new';
import EmployeeEdit from './employee/employee_edit';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>操作方法</h2>
          <ul>
            １）本人講読 :「契約情報」「請求先」を入力する</ul>
          <ul>
            ２）ギ フ ト :「契約情報」「請求先」「ギフト送本先」を入力する</ul>
          <ul>
            ３）再 講 読 :「契約情報」「請求先（読者番号・氏名・会社名（法人のみ）」と</ul>

                     住所等変更がある時はその項目を入力する
      </div>
    );
  }
}

class ExpressSampleApp extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <BrowserRouter>
        <span>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
             『致知』定期講読受付システム
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem><NavLink href="/">ホーム</NavLink></NavItem>
                <NavItem><NavLink href="/employees/new">新規入力</NavLink></NavItem>
                <NavItem><NavLink href="/employees">申込一覧</NavLink></NavItem>
                <NavItem><NavLink href="https://www.chichi.co.jp/specials/orderinman/">マニュアル</NavLink></NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Container>
            <Row>
              <Col xs="12"><Route exact path="/" component={Home} /></Col>
              <Col xs="12"><Route exact path="/employees" component={EmployeeList} /></Col>
              <Col xs="12"><Route exact path='/employees/:id([0-9]+)' component={EmployeeDetail} /></Col>
              <Col xs="12"><Route exact path="/employees/new" component={EmployeeNew} /></Col>
              <Col xs="12"><Route exact path="/employees/:id([0-9]+)/edit" component={EmployeeEdit} /></Col>
            </Row>
           </Container>
        </span>
      </BrowserRouter>
    );
  }
}

export default ExpressSampleApp;
