import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class EmployeeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };

    this.loadEmployee = this.loadEmployee.bind(this);
  }

  loadEmployee() {
    return fetch(`/_api/employees/${this.state.id}`)
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          employee: responseJson.employee,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.loadEmployee();
  }

  render() {
    const attributes_array = !this.state.employee ? null
      : ["created_at","id","kodokukubun","keiyakunennsu","ky_sukiyk","ky_ymkiyk","ky_cdsqsk","sq_kokyakukb","sq_name1","sq_name2","sq_kana1","sq_kana2","sq_company","sq_cmpkana","ct_nmtnbu","ct_noyubn","ct_adcst1","ct_adcst2","ct_adcst3","sq_ct_tel1","sq_ct_tel2","sq_ct_tel3","ct_dtsngp1","ct_dtsngp2","ct_dtsngp3","ct_cdsyok","ct_admail","ky_cdshsk","sh_kokyakukb","sh_name1","sh_name2","sh_kana1","sh_kana2","sh_company","sh_cmpkana","sh_ct_nmtnbu","sh_ct_noyubn","sh_ct_adcst1","sh_ct_adcst2","sh_ct_adcst3","sh_ct_notel","sh_ct_notel2","sh_ct_notel3","note","nyuryokusha","tool","douki","shain","shosai"].map((attr) =>
          { return {
            name: attr,
            val: this.state.employee[attr] ? this.state.employee[attr] : "-"
          } }
        );
    const attributes_dom = attributes_array === null ? "... loading"
      : <ListGroup>
          {attributes_array.reduce((accumulator, attr, idx) => {
            return accumulator.concat([
              <ListGroupItem className="d-flex justify-content-between align-items-center" key={idx} header={attr.name}>{attr.val} <Badge pill>{attr.name}</Badge></ListGroupItem>,
            ]);
          },[])}
        </ListGroup>

    return (attributes_dom);
  }
}

export default EmployeeDetail;
