'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('Employee', {

    kodokukubun: DataTypes.STRING,
    keiyakunennsu: DataTypes.STRING,
    ky_sukiyk: DataTypes.INTEGER,
    ky_ymkiyk: DataTypes.ENUM('2018年12月号', '2019年1月号', '2019年2月号'),
    ky_cdsqsk: DataTypes.INTEGER,
    sq_kokyakukb: DataTypes.STRING,
    sq_name1: DataTypes.STRING,
    sq_name2: DataTypes.STRING,
    sq_kana1: DataTypes.STRING,
    sq_kana2: DataTypes.STRING,
    sq_company: DataTypes.STRING,
    sq_cmpkana: DataTypes.STRING,
    ct_nmtnbu: DataTypes.STRING,
    ct_noyubn: DataTypes.STRING,
    ct_adcst1: DataTypes.STRING,
    ct_adcst2: DataTypes.STRING,
    ct_adcst3: DataTypes.STRING,
    sq_ct_tel1: DataTypes.STRING,
    sq_ct_tel2: DataTypes.STRING,
    sq_ct_tel3: DataTypes.STRING,
    ct_dtsngp1: DataTypes.STRING,
    ct_dtsngp2: DataTypes.STRING,
    ct_dtsngp3: DataTypes.STRING,
    ct_cdsyok: DataTypes.STRING,
    ct_admail: DataTypes.STRING,
    ky_cdshsk: DataTypes.STRING,
    sh_kokyakukb: DataTypes.STRING,
    sh_name1: DataTypes.STRING,
    sh_name2: DataTypes.STRING,
    sh_kana1: DataTypes.STRING,
    sh_kana2: DataTypes.STRING,
    sh_company: DataTypes.STRING,
    sh_cmpkana: DataTypes.STRING,
    sh_ct_nmtnbu: DataTypes.STRING,
    sh_ct_noyubn: DataTypes.STRING,
    sh_ct_adcst1: DataTypes.STRING,
    sh_ct_adcst2: DataTypes.STRING,
    sh_ct_adcst3: DataTypes.STRING,
    sh_ct_notel: DataTypes.STRING,
    sh_ct_notel2: DataTypes.STRING,
    sh_ct_notel3: DataTypes.STRING,
    note: DataTypes.STRING,
    nyuryokusha: DataTypes.STRING,
    tool: DataTypes.STRING,
    douki: DataTypes.STRING,
    shain: DataTypes.STRING,
    shosai: DataTypes.STRING,
  }, {
    underscored: true,
    freezeTableName: true, // cf. https://stackoverflow.com/questions/21114499/how-to-make-sequelize-use-singular-table-names
  });
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};
