import { builtinModules } from "module";

function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}



btn.onClick = function() {
    console.log('1')
    loadScript('http://abc.com/a.js');
}