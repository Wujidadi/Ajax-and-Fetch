/* jQuery 的 Ajax 方法 */
$(document).ready(function() {      // 這一行和第 10 行不寫（直接呼叫 btn01 的 click 事件），效果是一樣的
    $('#btn01').click(function() {
        htmlobj = $.ajax({
            url: 'jQuery_Ajax_test1.txt',
            async: false
        });
        $('#div01').html(htmlobj.responseText)
    });
});

/* 原生 JavaScript 的 Ajax 方法（onreadystatechange） */
document.getElementById('btn02').addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {     // 若不加這個 if 判斷，每次 readyState 變動都會回傳
            let resp = xhr.responseText;
            document.getElementById('div02').innerHTML = resp
        }
    }
    xhr.open("GET", "jQuery_Ajax_test2.txt", false);
    xhr.send()
});

/* 原生 JavaScript 的 Ajax 方法（onload） */
document.getElementById('btn03').addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status == 200) {    // onload 主要依據 status 來判斷是否回傳
            let resp = xhr.responseText;
            document.getElementById('div03').innerHTML = resp
        }
    }
    xhr.open("GET", "jQuery_Ajax_test2.txt", false);
    xhr.send()
});