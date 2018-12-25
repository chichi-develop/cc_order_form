var models = require('../db/models');

/**
 * show all employee list
 */
exports.index = function(req, res, next) {
  models.Employee.all().then(employees => {
    res.json({ employees: employees });
  });
};

/**
 * show employee details
 */
exports.show = function(req, res, next) {
  models.Employee.findById(req.params.id).then(employee => {
    res.json({ employee: employee });
  });
};

/**
 * create employee
 */
exports.create = function(req, res, next) {
  var properties = ["id","kodokukubun","keiyakunennsu","ky_sukiyk","ky_ymkiyk","ky_cdsqsk","sq_kokyakukb","sq_name1","sq_name2","sq_kana1","sq_kana2","sq_company","sq_cmpkana","ct_nmtnbu","ct_noyubn","ct_adcst1","ct_adcst2","ct_adcst3","sq_ct_tel1","sq_ct_tel2","sq_ct_tel3","ct_dtsngp1","ct_dtsngp2","ct_dtsngp3","ct_cdsyok","ct_admail","ky_cdshsk","sh_kokyakukb","sh_name1","sh_name2","sh_kana1","sh_kana2","sh_company","sh_cmpkana","sh_ct_nmtnbu","sh_ct_noyubn","sh_ct_adcst1","sh_ct_adcst2","sh_ct_adcst3","sh_ct_notel","sh_ct_notel2","sh_ct_notel3","note","nyuryokusha","tool","douki","shain","shosai"];
  var new_values = {};
  properties.forEach(function(prop) {
    new_values[prop] = req.body[prop];
  });
  models.Employee.create(
    new_values
  ).then(new_employee => {
    res.redirect(302, '/employees');
  });
};

/**
 * update employee
 */
exports.update = function(req, res, next) {
  console.log('exports.update is executed');
  models.Employee.findById(req.params.id).then(employee => {
    var properties = ["id","kodokukubun","keiyakunennsu","ky_sukiyk","ky_ymkiyk","ky_cdsqsk","sq_kokyakukb","sq_name1","sq_name2","sq_kana1","sq_kana2","sq_company","sq_cmpkana","ct_nmtnbu","ct_noyubn","ct_adcst1","ct_adcst2","ct_adcst3","sq_ct_tel1","sq_ct_tel2","sq_ct_tel3","ct_dtsngp1","ct_dtsngp2","ct_dtsngp3","ct_cdsyok","ct_admail","ky_cdshsk","sh_kokyakukb","sh_name1","sh_name2","sh_kana1","sh_kana2","sh_company","sh_cmpkana","sh_ct_nmtnbu","sh_ct_noyubn","sh_ct_adcst1","sh_ct_adcst2","sh_ct_adcst3","sh_ct_notel","sh_ct_notel2","sh_ct_notel3","note","nyuryokusha","tool","douki","shain","shosai"];
    var update_values = {};
    properties.forEach(function(prop){
      update_values[prop] = req.body[prop];
    });
    employee.update(update_values);
    res.redirect(302, "/employees/" + employee.id);
  });
};

/**
 * destroy employee
 */
exports.destroy = function(req, res, next) {
  models.Employee.destroy
  ({
    where: { id: req.params.id }
  }).then(employee => {
    res.redirect(302, "/employees");
  });
};
