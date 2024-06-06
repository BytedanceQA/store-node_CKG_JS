# 接口文档

## 请求基础路径
```
http://localhost:8002
```

## 特别说明
部分接口需要配置 Token 才能访问，Token 配置方法：[在 Postman 中配置 Token](http://meishadevs.com/blog/%E5%9C%A8Postman%E4%B8%AD%E9%85%8D%E7%BD%AEToken/)

## 接口目录

[注册](#注册)  
[登录](#登录)  
[获取当前用户信息](#获取当前用户信息)  
[退出登录](#退出登录)  
[获得用户数量](#获得用户数量)  
[获得用户列表](#获得用户列表)  
[获得用户详情](#获得用户详情)  
[保存用户信息](#保存用户信息)  
[修改用户状态](#修改用户状态)  
[重置用户密码](#重置用户密码)  
[删除用户信息](#删除用户信息)  
[获得所有角色](#获得所有角色)  
[获得角色列表](#获得角色列表)  
[获得角色详情](#获得角色详情)  
[保存角色信息](#保存角色信息)  
[设置角色权限](#设置角色权限)  
[删除角色信息](#删除角色信息)  
[获得菜单列表](#获得菜单列表)  
[获得权限树](#获得权限树)  
[获得菜单详情](#获得菜单详情)  
[保存菜单信息](#保存菜单信息)  
[删除菜单信息](#删除菜单信息)  
[获得商品数量](#获得商品数量)  
[获得商品列表](#获得商品列表)  
[获得所有省份](#获得所有省份)  
[获得省份列表](#获得省份列表)  
[获得省份详情](#获得省份详情)  
[保存省份信息](#保存省份信息)  
[删除省份信息](#删除省份信息)  
[获得所有市](#获得所有市)  
[获得市列表](#获得市列表)  
[获得市详情](#获得市详情)  
[保存市信息](#保存市信息)  
[删除市信息](#删除市信息)  
[获得所有区](#获得所有区)  
[获得区列表](#获得区列表)  
[获得区详情](#获得区详情)  
[保存区信息](#保存区信息)  
[删除区信息](#删除区信息)  
[获得咨询数量](#获得咨询数量)  
[获得咨询列表](#获得咨询列表)  
[获得轮播图列表](#获得轮播图列表)  
[获得已发布的轮播图](#获得已发布的轮播图)  
[保存轮播图信息](#保存轮播图信息)  
[发布或撤销轮播图](#发布或撤销轮播图)  
[置顶或取消置顶轮播图](#置顶或取消置顶轮播图)  
[删除轮播图信息](#删除轮播图信息)  
[文件上传](#文件上传)  

## 接口列表

### 注册

#### 请求URL:  
```
/user/register
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|userName      |Y       |String  |用户名 |
|password      |Y       |String  |密码 |
|secondPassword      |Y       |String  |确认密码 |
|email      |Y       |String  |邮箱 |
|isAgree      |Y       |Int  |是否同意注册协议，1：同意，0：不同意 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "用户注册成功"
}
```

### 登录

#### 请求URL:  
```
/user/login
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|userName      |Y       |String  |用户名 |
|password      |Y       |String  |密码 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "登录成功",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2Nzg5ODM4MSwiZXhwIjoxNjY3OTM0MzgxfQ.tGlVwKXxpFU4JFGIYnvJk3ASi9s8tPbmPSEfDcKQ-0k"
  }
}
```

### 获取当前用户信息

#### 请求URL:  
```
/user/info
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "userName": "meishadevs",
    "email": "meishadevs@gmail.com",
    "isAgree": 1,
    "createTime": "2022-11-07",
    "roles": [
      1,
      2,
      3,
      4
    ],
    "id": 1,
    "roleList": [
      "销售",
      "运营人员",
      "管理员",
      "普通用户"
    ],
    "permissions": [
      "role",
      "user",
      "setting",
      "menu"
    ]
  }
}
```

### 退出登录

#### 请求URL:  
```
/user/logout
```

#### 请求方式: 
```
POST
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "退出成功"
}
```

### 获得用户数量

#### 请求URL:  
```
/user/count
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "count": 3
  }
}
```

### 获得用户列表

#### 请求URL:  
```
/user/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|pageSize      |N       |Int  |每页数据条数，默认展示 10 条 |
|pageInt    |N       |Int  |当前页数，默认为第 1 页 |
|userName      |N       |Int  |用户名 |
|status      |N       |Int  |用户状态，1：启用，2：禁用 |
|roleId      |N       |Int  |角色id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "id": 11,
        "userName": "test1024",
        "email": "test1024@163.com",
        "isAgree": 1,
        "status": 1,
        "roleNames": "客户",
        "createTime": "2022-11-11 11:45"
      },
      {
        "id": 6,
        "userName": "test",
        "email": "test@163.com",
        "isAgree": 1,
        "status": 0,
        "roleNames": "客户，管理员，销售",
        "createTime": "2022-11-11 11:38"
      }
      ....
    ],
    "count": 6
  }
}
```

### 获得用户详情

#### 请求URL:  
```
/user/detail
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|userId      |Y       |Int  |用户id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": 6,
    "userName": "test",
    "email": "test@163.com",
    "isAgree": 1,
    "status": 1,
    "createTime": "2022-11-11 11:38:03",
    "roles": [
      2,
      1,
      3
    ]
  }
}
```

### 保存用户信息

#### 请求URL:  
```
/user/save
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |N       |Int  |用户id，有值表示编辑用户信息，无值表示新增用户信息|
|userName      |Y       |String  |用户名 |
|roles      |Y       |Array  |所属角色，由角色 id 组成的数组 |
|email      |N       |String  |邮箱 |
|status      |Y       |Int  |用户状态，默认值为 0，表示禁用，1表示启用 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "用户信息新增成功"
}
```

### 修改用户状态

#### 请求URL:  
```
/user/change_status
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|userId      |Y       |Int  |用户id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "用户启用成功"
}
```

### 重置用户密码

#### 请求URL:  
```
/user/reset_password
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|userId      |Y       |Int  |用户id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "密码重置成功"
}
```

### 删除用户信息

#### 请求URL:  
```
/user/delete
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|userId      |Y       |Int  |用户id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "用户删除成功"
}
```

### 获得所有角色

#### 请求URL:  
```
/role/all
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "roleName": "管理员",
        "id": 1
      },
      {
        "id": 2,
        "roleName": "客户"
      },
      {
        "id": 4,
        "roleName": "测试"
      },
      ....
    ]
  }
}
```

### 获得角色列表

#### 请求URL:  
```
/role/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|pageSize      |N       |Int  |每页数据条数，默认展示 10 条 |
|pageInt    |N       |Int  |当前页数，默认为第 1 页 |
|roleName      |N       |Int  |角色名称 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "id": 8,
        "roleName": "test",
        "createBy": "admin",
        "createTime": "2022-11-17 15:33:14"
      },
      {
        "id": 5,
        "roleName": "运营",
        "createBy": "admin",
        "createTime": "2022-11-15 13:35:21"
      },
      ....
    ],
    "count": 5
  }
}
```

### 获得角色详情

#### 请求URL:  
```
/role/detail
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|roleId      |Y       |Int  |角色 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "roleName": "管理员",
    "id": 1,
    "menus": [
      23,
      22,
      2,
      3,
      4,
      5,
      1
    ],
    "createBy": "admin",
    "createTime": "2022-11-15 11:15:30"
  }
}
```

### 保存角色信息

#### 请求URL:  
```
/role/save
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|roleId      |N       |Int  |角色 id，传值表示编辑角色信息，不传值表示新增角色信息 |
|roleName      |Y      |Int  |角色名称 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "角色新增成功"
}
```

### 设置角色权限

#### 请求URL:  
```
/role/set_permissions
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|roleId      |Y      |Int  |角色 id |
|permissions      |Y      |Array  |由权限 id 组成的数组 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "角色权限分配成功"
}
```

### 删除角色信息

#### 请求URL:  
```
/role/delete
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|roleId      |Y      |Int  |角色 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "角色删除成功"
}
```

### 获得菜单列表

#### 请求URL:  
```
/menu/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "id": 1,
        "parentId": 0,
        "title": "首页",
        "url": "/home",
        "permissions": "home",
        "icon": "",
        "sort": 100,
        "remark": "",
        "type": 0,
        "createBy": "admin",
        "createTime": "2022-11-16 14:15:30",
        "__v": 0,
        "children": [
          {
            "id": 22,
            "parentId": 1,
            "title": "仪表盘",
            "url": "/dashboard",
            "permissions": "dashboard",
            "icon": "",
            "sort": 100,
            "type": 0,
            "createBy": "admin",
            "createTime": "2022-11-17 16:43:19",
            "__v": 0,
            "children": []
          }
        ]
      }
    ]
  }
}
```

### 获得权限树

#### 请求URL:  
```
/menu/permissions_list
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "id": 1,
        "parentId": 0,
        "title": "首页",
        "children": [
          {
            "id": 22,
            "parentId": 1,
            "title": "仪表盘",
            "children": [
              {
                "id": 23,
                "parentId": 22,
                "title": "工作台",
                "children": []
              }
            ]
          },
          {
            "id": 2,
            "parentId": 1,
            "title": "系统设置",
            "children": []
          }
        ]
      }
    ]
  }
}
```

### 获得菜单详情

#### 请求URL:  
```
/menu/detail
```

#### 请求方式: 
```
GET
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|menuId      |Y      |Int  |菜单 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": 3,
    "parentId": 2,
    "title": "用户管理",
    "url": "/user",
    "permissions": "user",
    "icon": "",
    "sort": 100,
    "remark": "",
    "type": 0,
    "createBy": "admin",
    "createTime": "2022-11-16 14:15:30"
  }
}
```

### 保存菜单信息

#### 请求URL:  
```
/menu/save
```

#### 请求方式: 
```
POST
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|menuId      |N      |Int  |菜单 id，传了指编辑菜单信息，不传指新增菜单信息|
|parentId      |N      |Int  |父级菜单 id，不传指新增父级菜单，传了指新增子级菜单 |
|type      |N      |Int  |菜单类型，0：菜单，1：按钮，默认值为 0 |
|title      |Y      |String  |菜单名称 |
|permissions      |Y      |String  |权限 |
|url      |N     |String  |路由地址 |
|icon      |N     |String  |图标 |
|sort      |N     |Int  |排序，值越小越靠前，默认值为 1|

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "菜单新增成功"
}
```

### 删除菜单信息

#### 请求URL:  
```
/menu/delete
```

#### 请求方式: 
```
POST
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|menuId      |Y      |Int  |菜单 id|

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "菜单删除成功"
}
```


### 获得商品数量

#### 请求URL:  
```
/product/count
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "count": 54
  }
}
```

### 获得商品列表

#### 请求URL:  
```
/product/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|pageSize      |N       |Int  |每页数据条数，默认展示 10 条 |
|pageInt      |N       |Int  |当前页数，默认为第 1 页 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "productImage": "https://img12.360buyimg.com/n7/jfs/t3196/295/4684591179/191025/4c57e3ca/5853a6d7N1c1d8ad7.jpg",
        "productName": "华为 HUAWEI P10",
        "productPrice": 3788,
        "commentNum": "2.1万"
      },
      {
        "productImage": "https://img14.360buyimg.com/n7/jfs/t3175/98/4506474928/251187/914831b7/5844f3a1N233450bb.jpg",
        "productName": "荣耀 畅玩5C",
        "productPrice": 1099,
        "commentNum": "29万"
      },
      .....
    ],
    "count": 54
  }
}
```

### 获得所有省份

#### 请求URL:  
```
/province/all
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "provinceCode": "110000",
        "provinceName": "北京市"
      },
      {
        "provinceCode": "360000",
        "provinceName": "江西省"
      },
      {
        "provinceCode": "440000",
        "provinceName": "广东省"
      },
     ....
    ]
  }
}
```

### 获得省份列表

#### 请求URL:  
```
/province/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|provinceName      |N       |String  |省份名称 |
|provinceCode      |N       |String  |省份编码 |
|pageSize      |N       |Int  |每页数据条数，默认展示 10 条 |
|pageInt      |N       |Int  |当前页数，默认为第 1 页 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "createBy": "admin",
        "createTime": "2022-11-18 17:28:26",
        "id": 6,
        "provinceCode": "210000",
        "provinceName": "辽宁省"
      },
      {
        "createBy": "admin",
        "createTime": "2022-11-18 17:28:26",
        "id": 13,
        "provinceCode": "350000",
        "provinceName": "福建省"
      },
      {
        "createBy": "admin",
        "createTime": "2022-11-18 17:28:26",
        "id": 9,
        "provinceCode": "310000",
        "provinceName": "上海市"
      },
      ....
    ],
    "count": 34
  }
}
```

### 获得省份详情

#### 请求URL:  
```
/province/detail
```

#### 请求方式: 
```
GET
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|provinceId      |Y      |Int  |省份id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "createBy": "admin",
    "createTime": "2022-11-18 17:28:26",
    "id": 14,
    "provinceCode": "360000",
    "provinceName": "江西省"
  }
}
```

### 保存省份信息

#### 请求URL:  
```
/province/save
```

#### 请求方式: 
```
POST
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |N      |Int  |省份 id，传值了表示编辑省份，没传值表示新增省份 |
|provinceName      |Y      |String  |省份名称 |
|provinceCode      |Y      |String  |省份编码 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "省份新增成功"
}
```

### 删除省份信息

#### 请求URL:  
```
/province/delete
```

#### 请求方式: 
```
POST
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|provinceId      |Y      |Int  |省份 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "省份删除成功"
}
```

### 获得所有市

#### 请求URL:  
```
/city/all
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|provinceCode      |N       |Int  |省份编码|

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "cityCode": "360100",
        "cityName": "南昌市",
        "provinceCode": "360000"
      },
      {
        "cityCode": "360500",
        "cityName": "新余市",
        "provinceCode": "360000"
      },
      {
        "cityCode": "360800",
        "cityName": "吉安市",
        "provinceCode": "360000"
      },
      ....
    ]
  }
}
```

### 获得市列表

#### 请求URL:  
```
/city/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|provinceCode      |N       |String  |省份编码 |
|cityName      |N       |String  |市名称 |
|cityCode      |N       |String  |市编码 |
|pageSize      |N       |Int  |每页数据条数，默认展示 10 条 |
|pageInt      |N       |Int  |当前页数，默认为第 1 页 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "id": 124,
        "cityCode": "360100",
        "cityName": "南昌市",
        "provinceCode": "360000",
        "provinceName": "江西省",
        "createBy": "admin",
        "createTime": "2022-11-19 11:29:45"
      },
      {
        "id": 128,
        "cityCode": "360500",
        "cityName": "新余市",
        "provinceCode": "360000",
        "provinceName": "江西省",
        "createBy": "admin",
        "createTime": "2022-11-19 11:29:45"
      },
      ....
    ],
    "count": 11
  }
}
```

### 获得市详情

#### 请求URL:  
```
/city/detail
```

#### 请求方式: 
```
GET
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|cityId      |Y       |Int  |市 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "cityCode": "360500",
    "cityName": "新余市",
    "createBy": "admin",
    "createTime": "2022-11-19 11:29:45",
    "id": 128,
    "provinceCode": "360000",
    "provinceName": "江西省"
  }
}
```

### 保存市信息

#### 请求URL:  
```
/city/save
```

#### 请求方式: 
```
POST
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |N      |Int  |市 id，传值了表示编辑市，没传值表示新增市 |
|provinceCode      |Y      |String  |省份编码 |
|cityName      |Y      |String  |市名称 
|cityCode      |Y      |String  |市编码 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "市新增成功"
}
```

### 删除市信息

#### 请求URL:  
```
/city/delete
```

#### 请求方式: 
```
POST
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|cityId      |Y      |Int  |市 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "市删除成功"
}
```

### 获得所有区

#### 请求URL:  
```
/district/all
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|cityCode      |N       |Int  |市编码|

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "cityCode": "360500",
        "districtCode": "360501",
        "districtName": "市辖区"
      },
      {
        "cityCode": "360500",
        "districtCode": "360502",
        "districtName": "渝水区"
      },
      {
        "cityCode": "360500",
        "districtCode": "360521",
        "districtName": "分宜县"
      }
    ]
  }
}
```

### 获得区列表

#### 请求URL:  
```
/district/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|provinceCode      |N       |String  |省份编码 |
|cityCode      |N       |String  |市编码 |
|districtName      |N       |String  |区名称 |
|pageSize      |N       |Int  |每页数据条数，默认展示 10 条 |
|pageInt      |N       |Int  |当前页数，默认为第 1 页 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "id": 9,
        "districtCode": "110109",
        "districtName": "门头沟区",
        "cityName": "北京市",
        "provinceName": "北京市",
        "createBy": "admin",
        "createTime": "2022-11-19 17:47:35"
      },
      {
        "id": 10,
        "districtCode": "110111",
        "districtName": "房山区",
        "cityName": "北京市",
        "provinceName": "北京市",
        "createBy": "admin",
        "createTime": "2022-11-19 17:47:35"
      },
      ....
    ],
    "count": 3165
  }
}
```

### 获得区详情

#### 请求URL:  
```
/district/detail
```

#### 请求方式: 
```
GET
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|districtId      |Y       |Int  |区 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "cityCode": "110100",
    "districtCode": "110108",
    "districtName": "海淀区",
    "id": 8,
    "cityName": "北京市",
    "provinceName": "北京市",
    "provinceCode": "110000"
  }
}
```

### 保存区信息

#### 请求URL:  
```
/district/save
```

#### 请求方式: 
```
POST
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |N      |Int  |市 id，传值了表示编辑区，没传值表示新增区 |
|cityCode      |Y      |String  |市编码 |
|districtName      |Y      |String  |区名称 
|districtCode      |Y      |String  |区编码 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "区新增成功"
}
```

### 删除区信息

#### 请求URL:  
```
/district/delete
```

#### 请求方式: 
```
POST
```

#### 请求参数：
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|districtId      |Y      |Int  |district id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "区删除成功"
}
```

### 获得咨询数量

#### 请求URL:  
```
/advisory/count
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "count": 30
  }
}
```

### 获得咨询列表

#### 请求URL:  
```
/advisory/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|pageSize      |N       |Int  |每页数据条数，默认展示 10 条 |
|pageInt      |N       |Int  |当前页数，默认为第 1 页 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "memberImage": "touxiang1.jpg",
        "memberName": "m***k",
        "memberGrade": "金星会员",
        "question": "还能再便宜点么？",
        "answer": "您好，现在已经是活动价格了。",
        "time": "11/5/2017 18:39:00"
      },
      {
        "memberImage": "touxiang2.jpg",
        "memberName": "世***8",
        "memberGrade": "木星会员",
        "question": "出售的商品是正品吗？",
        "answer": "您好，我们出售的所有商品均为正品，享受全国三包保修政策。",
        "time": "19/4/2017 21:11:00"
      },
      ....
    ],
    "count": 30
  }
}
```

### 获得轮播图列表

#### 请求URL:  
```
/banner/list
```

#### 请求方式: 
```
GET
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|bannerName      |N       |String  |轮播图名称 |
|pageSize      |N       |Int  |每页数据条数，默认展示 10 条 |
|pageInt      |N       |Int  |当前页数，默认为第 1 页 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "id": 19,
        "bannerName": "手表",
        "imageUrl": "https://store-1253560230.cos.ap-guangzhou.myqcloud.com/1669714541792.jpg",
        "publishStatus": 1,
        "sort": 54,
        "createBy": "admin",
        "createTime": "2022-11-29 17:35:56",
        "topStatus": true
      },
      {
        "id": 20,
        "bannerName": "女装",
        "imageUrl": "https://store-1253560230.cos.ap-guangzhou.myqcloud.com/1669714586000.jpg",
        "publishStatus": 1,
        "sort": 53,
        "createBy": "admin",
        "createTime": "2022-11-29 17:36:32",
        "topStatus": false
      },
      ....
    ],
    "count": 4
  }
}
```

### 获得已发布的轮播图

#### 请求URL:  
```
/banner/publish_list
```

#### 请求方式: 
```
GET
```

#### 请求参数：
无

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "list": [
      {
        "bannerName": "手表",
        "imageUrl": "https://store-1253560230.cos.ap-guangzhou.myqcloud.com/1669714541792.jpg",
        "sort": 54,
        "url": "/proinfo"
      },
      {
        "bannerName": "女装",
        "imageUrl": "https://store-1253560230.cos.ap-guangzhou.myqcloud.com/1669714586000.jpg",
        "sort": 53,
        "url": "/proinfo"
      },
      ....
    ]
  }
}
```

### 保存轮播图信息

#### 请求URL:  
```
/banner/save
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|id      |N       |Int  |轮播图 id，传了指表示编辑轮播图，没传值表示新增轮播图 |
|bannerName      |Y       |String  |轮播图名称 |
|imageName      |Y       |String  |图片名称 |
|imageUrl      |Y       |String  |图片链接 |
|publishStatus      |N       |Int  |发布状态，1：已发布，0：未发布，默认值为 0 |
|url      |N       |String  |跳转链接 |
|sort      |N       |Int  |显示顺序，值越大越靠前显示，默认值为 1 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "轮播图信息新增成功"
}
```

### 发布或撤销轮播图

#### 请求URL:  
```
/banner/publish
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|bannerId      |Y       |Int  |轮播图 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "轮播图发布成功"
}
```

### 置顶或取消置顶轮播图

#### 请求URL:  
```
/banner/top
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|bannerId      |Y       |Int  |轮播图 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "轮播图置顶成功"
}
```

### 删除轮播图信息

#### 请求URL:  
```
/banner/delete
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|bannerId      |Y       |Int  |轮播图 id |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "轮播图信息删除成功"
}
```

### 文件上传

#### 请求URL:  
```
/auth/upload
```

#### 请求方式: 
```
POST
```

#### 请求参数：

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|File      |Y       |binary  |二进制文件 |

#### 返回示例：

```javascript
{
  "code": 200,
  "msg": "文件上传成功",
  "data": {
    "fileName": "1669973424400.jpg",
    "fileUrl": "https://store-1253560230.cos.ap-guangzhou.myqcloud.com/1669973424400.jpg",
    "fileSize": 319731,
    "fileType": "image/jpeg"
  }
}
```

