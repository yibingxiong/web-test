const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const wpath = require('../../config/path');
const routerConf = require('../../config/router');
const htmlPath = path.join(wpath.SERVER, 'html');

// 模板路由
for(let k of Object.keys(routerConf)) {
    app.get(k,  (req, res) => {
        const html = fs.readFileSync(path.join(htmlPath, routerConf[k]));
        res.append('Content-Type', 'text/html');
        res.end(html);
    })
}


app.listen(3001, () => console.log('Example app listening on port 3000!'))