import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

///////////////页面路由配置////////////////

const Routers = {
    // 首页
    '/': Loadable({
        loader: () => import(/* webpackChunkName: "index" */'./pages/Index.jsx'),
        loading: Loading,
      }),
    // 首页
    '/index': Loadable({
        loader: () => import(/* webpackChunkName: "index" */'./pages/Index.jsx'),
        loading: Loading,
    }),
    '/404': Loadable({
        loader: () => import(/* webpackChunkName: "404" */'./pages/404/index'),
        loading: Loading, 
    })
}

export default Routers;