<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

use think\Route;


Route::group('admin', function () {
    // 追梦小窝专用测试路由
    Route::any('login', 'admin/Login/login');
    // 获取登录用户信息
    Route::any('info', 'admin/Login/info');
}, ['after_behavior' => '\app\admin\middleware\AdminCheck']);
