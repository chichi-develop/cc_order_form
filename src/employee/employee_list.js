import { Table, Button } from 'reactstrap';

import React from 'react';
import { Link } from 'react-router-dom';

// Employee一覧レンダリング用コンポーネント
class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };

    this.loadEmployeeList = this.loadEmployeeList.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  loadEmployeeList() {
    return fetch("/_api/employees")
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          employees: responseJson.employees,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  handleDeleteButton(employee_id) {
    return fetch(`/_api/employees/${employee_id}`, {
      method: 'DELETE'
    }).then(response => {
      const newEmployees = this.state.employees.filter(e => e.id !== employee_id);
      this.setState({ employees: newEmployees });
    });
  }

  componentWillMount() {
    this.loadEmployeeList();
  }

  render() {
    const employee_list = this.state.employees.map((employee) =>
      <tr key={`EmployeeList-${employee.id}`}>
        <td>
          <Link to={`/employees/${employee.id}`}>{employee.id}</Link>
        </td>
        <td>{employee.sq_name1}</td>
        <td>{employee.sq_name2}</td>
        <td>{employee.sq_company}</td>
        <td>{employee.ky_ymkiyk}</td>
        <td>{employee.ky_sukiyk}</td>
        <td>{employee.nyuryokusha}</td>
        <td>{employee.status}</td>
        <td>
          <Link to={`/employees/${employee.id}/edit`}><Button size="sm" outline>修正する</Button></Link>
          <Button size="sm" outline color="danger" onClick={() => this.handleDeleteButton(employee.id)}>削除する</Button>
        </td>
      </tr>
    );

    return(
      <Table responsive size="sm" hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>氏名</th>
            <th></th>
            <th>会社名</th>
            <th>開始号</th>
            <th>部数</th>
            <th>入力者</th>
            <th>取込状況</th>
          </tr>
        </thead>
        <tbody>
          {employee_list}
        </tbody>
      </Table>
    );
  }
}

export default EmployeeList;
