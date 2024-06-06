const Role = require('../controller/role');

const roleApi = (router) => {
  // 获得所有角色列表数据
  router.get('/role/all', (req, res, next) => {
    Role.getAllList(req, res, next);
  });

  // 获得角色列表数据
  router.get('/role/list', (req, res, next) => {
    Role.getPageList(req, res, next);
  });

  // 获得角色详情
  router.get('/role/detail', (req, res, next) => {
    Role.getRoleDetail(req, res, next);
  });

  // 保存角色数据
  router.post('/role/save', (req, res, next) => {
    Role.saveRoleData(req, res, next);
  });

  // 删除角色
  router.post('/role/delete', (req, res, next) => {
    Role.deleteRoleInfo(req, res, next);
  });

  // 设置角色权限
  router.post('/role/set_permissions', (req, res, next) => {
    Role.setRolePermissions(req, res, next);
  });
};

module.exports = roleApi;
