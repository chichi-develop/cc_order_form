import React from 'react';
import {
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Col,
  Container,
  Row,
  // Collapse,
  // CardBody,
  // Card 
} from 'reactstrap';

//  import yearData from './year';

// import year from './year';


class FieldGroup extends React.Component {
  render() {
    const label = this.props.label;
    const help = this.props.help;
    const name = this.props.name;
    return (
      <FormGroup row>
        <Label for={name} sm={3}>{label}</Label>
        <div>
          <Input {...this.props} />
          {help && <FormText color="muted">{help}</FormText>}
        </div>
      </FormGroup>
    );
  }
}
class EmployeeForm extends React.Component {

  render() {
    const employee = this.props.employee || {};
    const id = (employee.id ? <div>ID: {employee.id}</div> : '');
    const method = this.props.method || "POST";
    const action = employee.id ? `/_api/employees/${employee.id}?_method=${method}` : `/_api/employees?_method=${method}`;
    const cb = this.props.onChangeField;
    return (
      <form action={action} method='post'>
        <Container>
          <Row>
            <Col xs="auto">
              {id}
              <FormGroup tag="fieldset" row>
                <h3 >契約情報</h3>
                <Col >
                  <FormGroup>
                    <Label for="kodokukubun">購読形態</Label>
                    <Input type="select" name="kodokukubun" id="kodokukubun" >
                      <option>本人講読</option>
                      <option>再講読</option>
                      <option>ギフト</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col >
                  <FormGroup>
                    <Label for="keiyakunennsu">契約年数</Label>
                    <Input type="select" name="keiyakunennsu" id="keiyakunennsu" >
                      <option>1年</option>
                      <option>3年</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col >
                  <FormGroup>
                    <Label for="ky_ymkiyk">開始号</Label>
                    <Input type="select" name="ky_ymkiyk" id="ky_ymkiyk" >
                      <option>2019年2月号</option>
                      <option>2019年1月号</option>
                      <option>2018年12月号</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col>
                  <FormGroup>
                    <Label for="ky_sukiyk">部数(初期設定:1部）</Label>
                    <Input type="integer" name="ky_sukiyk" id="ky_sukiyk" defaultValue="1" >
                    </Input>
                  </FormGroup>
                </Col>
              </FormGroup>
            </Col>
            <Col xs="auto">
              <h3>請求先</h3>
              <FieldGroup size="sm" id="ky_cdsqsk" label="読者No." help="" type="" name='ky_cdsqsk' value={employee.ky_cdsqsk} placeholder="半角 例)20249192" onChange={cb} />
              <Col >
                <FormGroup>
                  <Label for="sq_kokyakukb">送り先</Label>
                  <Input type="select" name="sq_kokyakukb" id="sq_kokyakukb" >
                    <option>自宅</option>
                    <option>会社</option>
                  </Input>
                </FormGroup>
              </Col>

              <FieldGroup size="sm" id="sq_name1" label="姓" help="" type="text" name='sq_name1' value={employee.sq_name1} placeholder="例)致知" onChange={cb} />
              <FieldGroup size="sm" id="sq_name2" label="名" help="" type="text" name='sq_name2' value={employee.sq_name2} placeholder="例)太郎" onChange={cb} />
              <FieldGroup size="sm" id="sq_kana1" label="カナ" help="" type="text" name='sq_kana1' value={employee.sq_kana1} placeholder="例)チチ" onChange={cb} />
              <FieldGroup size="sm" id="sq_kana2" label="カナ" help="" type="text" name='sq_kana2' value={employee.sq_kana2} placeholder="例)タロウ" onChange={cb} />
              <FieldGroup size="sm" id="sq_company" label="会社名" help="" type="text" name='sq_company' value={employee.sq_company} placeholder="例)株式会社　致知出版社" onChange={cb} />
              <FieldGroup size="sm" id="sq_cmpkana" label="カナ" help="" type="text" name='sq_cmpkana' value={employee.sq_cmpkana} placeholder="例)チチシュッパンシャ" onChange={cb} />
              <FieldGroup size="sm" id="ct_nmtnbu" label="部課、役職" help="" type="text" name='ct_nmtnbu' value={employee.ct_nmtnbu} placeholder="例)開発課" onChange={cb} />
              <FieldGroup size="sm" id="ct_noyubn" label="〒" help="" type="text" name='ct_noyubn' value={employee.ct_noyubn} placeholder="半角 例)1500001" onChange={cb} />
              <FieldGroup size="sm" id="ct_adcst1" label="住所" help="" type="text" name='ct_adcst1' value={employee.ct_adcst1} placeholder="例)東京都渋谷区神宮前" onChange={cb} />
              <FieldGroup size="sm" id="ct_adcst2" label="番地" help="" type="text" name='ct_adcst2' value={employee.ct_adcst2} placeholder="例)4-24-9-101" onChange={cb} />
              <FieldGroup size="sm" id="ct_adcst3" label="建物名" help="" type="text" name='ct_adcst3' value={employee.ct_adcst3} placeholder="例)致知マンション" onChange={cb} />
              <FieldGroup size="sm" id="sq_ct_tel1" label="TEL1" help="" type="text" name='sq_ct_tel1' value={employee.sq_ct_tel1} placeholder="半角 例)0337962111" onChange={cb} />
              <FieldGroup size="sm" id="sq_ct_tel2" label="携帯" help="" type="text" name='sq_ct_tel2' value={employee.sq_ct_tel2} placeholder="半角 例)09038250152" onChange={cb} />
              <FieldGroup size="sm" id="sq_ct_tel3" label="FAX" help="" type="text" name='sq_ct_tel3' value={employee.sq_ct_tel3} placeholder="半角 例)0337962108" onChange={cb} />
              <Col >
                <FormGroup>
                  <Label for="ct_dtsngp1">年          </Label>
                  <Input size="sm" type="select" name="ct_dtsngp1" id="ct_dtsngp1" >

{/*
                    render: function(){
                        var list = [];
                  
                        var data = [
                           {text: "1" },
                           {text: "2" }
                         ];
                
                          for(var i in data){
                          list.push(<li>{data[i].text}</li>);
                          }
                  
                          return(
                          <ul>
                          {list}
                          </ul>
                          );
                          } 
                        }
                        {$list}
                      {/*
                          {[1, 2, 3].map(num => <option>{num}</option>)}
                      */}
                  </Input>
                </FormGroup>
              </Col>
              <Col >
                <FormGroup>
                  <Label for="ct_dtsngp2">月</Label>
                  <Input type="select" name="ct_dtsngp2" id="ct_dtsngp2" >
                    <option>---</option>
                    <option>1月</option>
                    <option>2月</option>
                    <option>3月</option>
                    <option>4月</option>
                    <option>5月</option>
                    <option>6月</option>
                    <option>7月</option>
                    <option>8月</option>
                    <option>9月</option>
                    <option>10月</option>
                    <option>11月</option>
                    <option>12月</option>

                  </Input>
                </FormGroup>
              </Col>

              <Col >
                <FormGroup>
                  <Label for="ct_dtsngp3">日</Label>
                  <Input type="select" name="ct_dtsngp3" id="ct_dtsngp3" >
                    <option>---</option>
                    <option>1日</option>
                    <option>2日</option>
                    <option>3日</option>
                    <option>4日</option>
                    <option>5日</option>
                    <option>6日</option>
                    <option>7日</option>
                    <option>8日</option>
                    <option>9日</option>
                    <option>10日</option>
                    <option>11日</option>
                    <option>12日</option>
                    <option>13日</option>
                    <option>14日</option>
                    <option>15日</option>
                    <option>16日</option>
                    <option>17日</option>
                    <option>18日</option>
                    <option>19日</option>
                    <option>20日</option>
                    <option>21日</option>
                    <option>22日</option>
                    <option>23日</option>
                    <option>24日</option>
                    <option>25日</option>
                    <option>26日</option>
                    <option>27日</option>
                    <option>28日</option>
                    <option>29日</option>
                    <option>30日</option>
                    <option>31日</option>
                  </Input>
                </FormGroup>
              </Col>
              <FieldGroup size="sm" id="ct_cdsyok" label="職種" help="" type="text" name='ct_cdsyok' value={employee.ct_cdsyok} placeholder="" onChange={cb} />
              <FieldGroup size="sm" id="ct_admail" label="e-mail" help="" type="text" name='ct_admail' value={employee.ct_admail} placeholder="例)cc@chichi.co.jp" onChange={cb} />

            </Col>
            <Col xs="auto">
              <h3 class="acordion">ギフト送本先</h3>

              <FieldGroup size="sm" id="ky_cdshsk" label="読者No." help="" type="text" name='ky_cdshsk' value={employee.ky_cdshsk} placeholder="半角 例)20249193" onChange={cb} />
              <Col >
                <FormGroup>
                  <Label for="sh_kokyakukb">送り先</Label>
                  <Input type="select" name="sh_kokyakukb" id="sh_kokyakukb" >
                    <option>自宅</option>
                    <option>会社</option>
                  </Input>
                </FormGroup>
              </Col>
              <FieldGroup size="sm" id="sh_name1" label="姓" help="" type="text" name='sh_name1' value={employee.sh_name1} placeholder="例)致知" onChange={cb} />
              <FieldGroup size="sm" id="sh_name2" label="名" help="" type="text" name='sh_name2' value={employee.sh_name2} placeholder="例)花子" onChange={cb} />
              <FieldGroup size="sm" id="sh_kana1" label="カナ" help="" type="text" name='sh_kana1' value={employee.sh_kana1} placeholder="例)チチ" onChange={cb} />
              <FieldGroup size="sm" id="sh_kana2" label="カナ" help="" type="text" name='sh_kana2' value={employee.sh_kana2} placeholder="例)ハナコ" onChange={cb} />
              <FieldGroup size="sm" id="sh_company" label="会社名" help="" type="text" name='sh_company' value={employee.sh_company} placeholder="" onChange={cb} />
              <FieldGroup size="sm" id="sh_cmpkana" label="カナ" help="" type="text" name='sh_cmpkana' value={employee.sh_cmpkana} placeholder="" onChange={cb} />
              <FieldGroup size="sm" id="sh_ct_nmtnbu" label="部課、役職" help="" type="text" name='sh_ct_nmtnbu' value={employee.sh_ct_nmtnbu} placeholder="" onChange={cb} />
              <FieldGroup size="sm" id="sh_ct_noyubn" label="〒" help="" type="text" name='sh_ct_noyubn' value={employee.sh_ct_noyubn} placeholder="半角 例)1500001" onChange={cb} />
              <FieldGroup size="sm" id="sh_ct_adcst1" label="住所" help="" type="text" name='sh_ct_adcst1' value={employee.sh_ct_adcst1} placeholder="例)東京都渋谷区神宮前" onChange={cb} />
              <FieldGroup size="sm" id="sh_ct_adcst2" label="番地" help="" type="text" name='sh_ct_adcst2' value={employee.sh_ct_adcst2} placeholder="半角 例)4-24-9-201" onChange={cb} />
              <FieldGroup size="sm" id="sh_ct_adcst3" label="建物名" help="" type="text" name='sh_ct_adcst3' value={employee.sh_ct_adcst3} placeholder="例)致知マンション" onChange={cb} />
              <FieldGroup size="sm" id="sh_ct_notel" label="TEL1" help="" type="text" name='sh_ct_notel' value={employee.sh_ct_notel} placeholder="半角 例)0337962111" onChange={cb} />
              <FieldGroup size="sm" id="sh_ct_notel2" label="携帯" help="" type="text" name='sh_ct_notel2' value={employee.sh_ct_notel2} placeholder="" onChange={cb} />
              <FieldGroup size="sm" id="sh_ct_notel3" label="FAX" help="" type="text" name='sh_ct_notel3' value={employee.sh_ct_notel3} placeholder="" onChange={cb} />
              <FieldGroup size="sm" id="note" label="契約に関する備考" help="" type="text" name='note' value={employee.note} placeholder="" onChange={cb} />
                <FormGroup>
                  <Label for="nyuryokusha">入力者</Label>
                  <Input type="select" name="nyuryokusha" id="nyuryokusha" >
                    <option>---------</option>
                    <option>13_鈴木盛夫</option>
                    <option>15_柳澤まり子</option>
                    <option>22_平峰重芳</option>
                    <option>23_久木野秀樹</option>
                    <option>24_志藤藤雄</option>
                    <option>25_太田泰文</option>
                    <option>26_小西佳奈</option>
                    <option>31_小笠原節子</option>
                    <option>33_道家真寿美</option>
                    <option>36_江口元浩</option>
                    <option>37_長尾加奈惠</option>
                    <option>39_森本美香子</option>
                    <option>41_藤尾允泰</option>
                    <option>44_後藤直</option>
                    <option>45_大串喜子</option>
                    <option>46_小鶴知子</option>
                    <option>47_橋本祐太郎</option>
                    <option>48_仙田貴也</option>
                    <option>51_小森俊司</option>
                    <option>53_花坂雅之</option>
                    <option>55_平岡猛</option>
                    <option>56_小松実紗子</option>
                    <option>58_浅倉広太郎</option>
                    <option>60_毛利竹志</option>
                    <option>61_岡田直樹</option>
                    <option>62_水川朋美</option>
                    <option>63_浅井敬行</option>
                    <option>65_小出佳朋</option>
                    <option>66_神谷正光</option>
                    <option>67_藤尾佳子</option>
                    <option>68_板東潤</option>
                    <option>70_川久保守</option>
                    <option>71_野口巌</option>
                    <option>72_篠原隼人</option>
                    <option>73_松澤広幸</option>
                    <option>74_松原輝衣</option>
                    <option>79_石井勝代</option>
                    <option>82_柴田雅久</option>
                    <option>84_宮本洋輔</option>
                    <option>104_西川ひとみ</option>
                    <option>108_平澤和代</option>
                    <option>115_清野節子</option>
                    <option>117_吉田麻実</option>
                    <option>120_神宮裕子</option>
                    <option>121_斉藤光二</option>
                    <option>122_インターン2</option>
                    <option>123_インターン3</option>
                    <option>124_インターン4</option>
                    <option>125_インターン5</option>
                    <option>126_インターン6</option>
                    <option>127_インターン7</option>
                    <option>128_staff3</option>
                    <option>129_staff4</option>
                    <option>130_staff5</option>
                    <option>131_staff6</option>
                    <option>132_staff7</option>

                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="tool">申込ツール</Label>
                  <Input type="select" name="tool" id="tool" >
                    <option>----</option>
                    <option>TEL受</option>
                    <option>TEL掛</option>
                    <option>直接</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="douki">申込動機</Label>
                  <Input type="select" name="douki" id="douki" >
                    <option>----</option>
                    <option>紹介</option>
                    <option>書籍</option>
                    <option>メルマガ・Web施策</option>
                    <option>社員</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="shain">担当社員</Label>
                  <Input type="select" name="shain" id="shain" >
                    <option>---------</option>
                    <option>13_鈴木盛夫</option>
                    <option>15_柳澤まり子</option>
                    <option>22_平峰重芳</option>
                    <option>23_久木野秀樹</option>
                    <option>24_志藤藤雄</option>
                    <option>25_太田泰文</option>
                    <option>26_小西佳奈</option>
                    <option>31_小笠原節子</option>
                    <option>33_道家真寿美</option>
                    <option>36_江口元浩</option>
                    <option>37_長尾加奈惠</option>
                    <option>39_森本美香子</option>
                    <option>41_藤尾允泰</option>
                    <option>44_後藤直</option>
                    <option>45_大串喜子</option>
                    <option>46_小鶴知子</option>
                    <option>47_橋本祐太郎</option>
                    <option>48_仙田貴也</option>
                    <option>51_小森俊司</option>
                    <option>53_花坂雅之</option>
                    <option>55_平岡猛</option>
                    <option>56_小松実紗子</option>
                    <option>58_浅倉広太郎</option>
                    <option>60_毛利竹志</option>
                    <option>61_岡田直樹</option>
                    <option>62_水川朋美</option>
                    <option>63_浅井敬行</option>
                    <option>65_小出佳朋</option>
                    <option>66_神谷正光</option>
                    <option>67_藤尾佳子</option>
                    <option>68_板東潤</option>
                    <option>70_川久保守</option>
                    <option>71_野口巌</option>
                    <option>72_篠原隼人</option>
                    <option>73_松澤広幸</option>
                    <option>74_松原輝衣</option>
                    <option>79_石井勝代</option>
                    <option>82_柴田雅久</option>
                    <option>84_宮本洋輔</option>
                  </Input>
                </FormGroup>
              <FieldGroup size="sm" id="shosai" label="動機詳細入力欄" help="" type="text" name='shosai' value={employee.shosai} placeholder="" onChange={cb} />
            </Col>

            <Button margin-top="200px" size="lg" color="success" type="submit" value="Submit" block>登録する</Button>
            <Col color="white"><br></br><br></br></Col>
          </Row>
        </Container>
      </form>
    );
  }
}
export default EmployeeForm;