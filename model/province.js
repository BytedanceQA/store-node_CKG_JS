const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
  // 省份 id
  id: Number,

  // 省份名称
  provinceName: String,

  // 省份编码
  provinceCode: String,
  
  // 创建人
  createBy: String,

  // 创建时间
  createTime: String,
});

provinceSchema.index({ id: 1 });

const Province = mongoose.model('province', provinceSchema, 'province');

module.exports = Province;
