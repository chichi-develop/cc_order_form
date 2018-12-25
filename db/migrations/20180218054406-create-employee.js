'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Employee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ky_ymkiyk: {
        allowNull: false,
        defaultValue: '2019年1月号',
        type: Sequelize.ENUM('2018年12月号', '2019年1月号', '2019年2月号')
      },
      
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'), // cf. https://github.com/sequelize/sequelize/issues/5561
        type: Sequelize.STRING
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'), // cf. https://github.com/sequelize/sequelize/issues/5561
        type: Sequelize.STRING
      },
      kodokukubun: {
        allowNull: false,
        type: Sequelize.STRING
    },
    keiyakunennsu: {
        allowNull: false,

        type: Sequelize.STRING
    },
    ky_sukiyk: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    ky_cdsqsk: {
        type: Sequelize.INTEGER
    },
    sq_kokyakukb: {
        allowNull: false,
        type: Sequelize.STRING
    },
    sq_name1: {
        allowNull: false,
        type: Sequelize.STRING
    },
    sq_name2: {
        type: Sequelize.STRING
    },
    sq_kana1: {
        type: Sequelize.STRING
    },
    sq_kana2: {
        type: Sequelize.STRING
    },
    sq_company: {
        type: Sequelize.STRING
    },
    sq_cmpkana: {
        type: Sequelize.STRING
    },
    ct_nmtnbu: {
        type: Sequelize.STRING
    },
    ct_noyubn: {
        type: Sequelize.STRING
    },
    ct_adcst1: {
        type: Sequelize.STRING
    },
    ct_adcst2: {
        type: Sequelize.STRING
    },
    ct_adcst3: {
        type: Sequelize.STRING
    },
    sq_ct_tel1: {
        type: Sequelize.STRING
    },
    sq_ct_tel2: {
        type: Sequelize.STRING
    },
    sq_ct_tel3: {
        type: Sequelize.STRING
    },
    ct_dtsngp1: {
        type: Sequelize.STRING
    },
    ct_dtsngp2: {
        type: Sequelize.STRING
    },
    ct_dtsngp3: {
        type: Sequelize.STRING
    },
    ct_cdsyok: {
        type: Sequelize.STRING
    },
    ct_admail: {
        type: Sequelize.STRING
    },
    ky_cdshsk: {
        type: Sequelize.STRING
    },
    sh_kokyakukb: {
        type: Sequelize.STRING
    },
    sh_name1: {
        type: Sequelize.STRING
    },
    sh_name2: {
        type: Sequelize.STRING
    },
    sh_kana1: {
        type: Sequelize.STRING
    },
    sh_kana2: {
        type: Sequelize.STRING
    },
    sh_company: {
        type: Sequelize.STRING
    },
    sh_cmpkana: {
        type: Sequelize.STRING
    },
    sh_ct_nmtnbu: {
        type: Sequelize.STRING
    },
    sh_ct_noyubn: {
        type: Sequelize.STRING
    },
    sh_ct_adcst1: {
        type: Sequelize.STRING
    },
    sh_ct_adcst2: {
        type: Sequelize.STRING
    },
    sh_ct_adcst3: {
        type: Sequelize.STRING
    },
    sh_ct_notel: {
        type: Sequelize.STRING
    },
    sh_ct_notel2: {
        type: Sequelize.STRING
    },
    sh_ct_notel3: {
        type: Sequelize.STRING
    },
    note: {
        type: Sequelize.STRING
    },
    nyuryokusha: {
        allowNull: false,
        type: Sequelize.STRING
    },
    tool: {
        type: Sequelize.STRING
    },
    douki: {
        type: Sequelize.STRING
    },
    shain: {
        type: Sequelize.STRING
    },
    shosai: {
        type: Sequelize.STRING,
    },
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Employee');
  }
};
