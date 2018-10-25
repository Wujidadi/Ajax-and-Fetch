/* fetch 是位於 window 的全局方法，不是建構子，所以可以直接呼叫
   fetch 是基於 ES6 的 Promise 的 */

/* Request 才是建構子 */
const req = new Request('jQuery_Ajax_test1.txt', {method: 'GET', cache: 'reload'})

fetch(req).then(function(response) {

    // 成功時的動作
    return response.text()

}).then(function(t) {

    // 成功時接下來要做的動作
    $('#btn1').click(function() {

        $('#div1').text(t)

    })

}).catch(function(err) {

    // 失敗時的動作
    $('#div1').text('錯誤！')

})