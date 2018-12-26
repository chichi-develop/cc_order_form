'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Employee', [{
      id: '1',
      kodokukubun: 'test',
      keiyakunennsu: 'test',
      ky_sukiyk: '1',
      ky_ymkiyk: 'test',
      ky_cdsqsk: '20249192',
      sq_kokyakukb: 'test',
      sq_name1: 'test',
      sq_name2: 'test',
      sq_kana1: 'test',
      sq_kana2: 'test',
      sq_company: 'test',
      sq_cmpkana: 'test',
      ct_nmtnbu: '',
      ct_noyubn: '1500001',
      ct_adcst1: '1',
      ct_adcst2: '1',
      ct_adcst3: '1',
      sq_ct_tel1: 'test',
      sq_ct_tel2: 'test',
      sq_ct_tel3: 'test',
      ct_dtsngp1: '1983',
      ct_dtsngp2: '5',
      ct_dtsngp3: '1',
      ct_cdsyok: 'test',
      ct_admail: 'test',
      ky_cdshsk: '20249192',
      sh_kokyakukb: 'test',
      sh_name1: 'test',
      sh_name2: 'test',
      sh_kana1: 'test',
      sh_kana2: 'test',
      sh_company: 'test',
      sh_cmpkana: 'test',
      sh_ct_nmtnbu: 'test',
      sh_ct_noyubn: '1500001',
      sh_ct_adcst1: 'test',
      sh_ct_adcst2: 'test',
      sh_ct_adcst3: 'test',
      sh_ct_notel: 'test',
      sh_ct_notel2: 'test',
      sh_ct_notel3: 'test',
      note: 'test',
      nyuryokusha: 'test',
      tool: 'test',
      douki: 'test',
      shain: 'test',
      shosai: 'test', 
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Employee', [ { name: 'John Doe' }]);
  }
};
