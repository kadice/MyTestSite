{
    //子頁面網址重新導向回母頁面
    let sep = window.location.href.lastIndexOf('/');
    let base = location.href.substring(0, sep + 1);
    let page = location.href.substring(sep + 1);
    if ((page.indexOf('.html') > 0) && (page.indexOf('index.html') < 0)) {
        let url = base + ((window.origin == 'file://') ? "index.html" : "") + "?to=" + page;
        window.location.href = url;
    }
}
