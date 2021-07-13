body = document.getElementById('font_body');
input = document.getElementById('input');
a = 0;
tinh = false;
var man = "";
d = 0;
db = ``;

function send() {
    if (man == '/tab' && d == 0) {
        man = '/tab';
        d++;
    } else if (document.getElementById('input').value != '') {
        man = document.getElementById('input').value;
    } else if (document.getElementById('input').value == '') {
        man = '/empty';
    }
    document.getElementById('bd1').innerHTML += '<span id="me">' + man + '</span><br/><span style="color:lightgray;font-size: 10px;">' + s.getTime(); + '</span><br>';
    document.getElementById('input').value = '';
    take();
}
var s = new Time();
function take() {
    console.log(man);
    if (!tinh) {
        switch (man) {
            case 'chào':
                document.getElementById('bd2').innerHTML += `<span id="you">chào Quân</span><br/>`;
                a = 0;
                d = 0;
                break;
            case 'hello':
                document.getElementById('bd2').innerHTML += `<span id="you">chào Quân</span><br/>`;
                a = 0;
                d = 0;
                break;
            case '/empty':
                document.getElementById('bd2').innerHTML += `<span id="you">Bạn để tin nhắn của bạn bị rỗng</span><br/>`;
                a = 0;
                d = 0;
                break;
            case '/tab':
                document.getElementById('bd2').innerHTML += `<span id="you">Bạn đã sử dụng phím tab</span><br/>`;
                a = 0;
                break;
            case '//cls':
                document.getElementById('bd1').innerHTML = ``;
                document.getElementById('bd2').innerHTML = ``;
                break;
            case '//help':
                document.getElementById('bd2').innerHTML += `<span id="you">//cls</span><br/><br/><span id="you">//help</span><br/><br/><span id="you">//calc</span><br><br>`;
                break;
            case '//calc':
                if (!tinh) {
                    tinh = true;
                } else if (tinh) {
                    tinh = false;
                }
                document.getElementById('bd2').innerHTML += `<span id="you">đi vào thành công</span><br><br><span id="you">Bạn phải bấm biểu thức cần tính</span><br>`;
                break;
            case 'function':
                document.getElementById('bd2').innerHTML += `<span id="you">function function_name(argument) {<br>// body...<br>}</span><br><br><br><br>`;
                a = 0;
                break;
            case 'switch':
                document.getElementById('bd2').innerHTML += `<span id="you">switch(expression) {<br>case x:<br>// code block<br>break;<br>case y:<br>// code block<br>break;<br>default:<br>  // code block<br><br></span><br><br><br><br>`;
                a = 0;
                break;
            default:
                if (a == 0) {
                    document.getElementById('bd2').innerHTML += '<span id="you">Tôi không hiểu</span><br/>';
                    a++;
                } else {
                    document.getElementById('bd2').innerHTML += '<span id="you">Tôi cũng không hiểu</span><br/>';
                    a++;
                }
                break;
        }
    } else {
        switch (man) {
            case '//cls':
                document.getElementById('bd1').innerHTML = ``;
                document.getElementById('bd2').innerHTML = ``;
                break;
            case '//help':
                document.getElementById('bd2').innerHTML += `<span id="you">//cls</span><br/><br>span id="you">//help</span><br/><br/><span id="you">//calc</span><br><br>`;
                break;
            case '//calc':
                if (!tinh) {
                    tinh = true;
                } else if (tinh) {
                    tinh = false;
                }
                document.getElementById('bd2').innerHTML += `<span id="you">ra ngoài thành công</span><br>`;
                break;
            default:
                b = eval(man);
                if (!isNaN(b)) {
                    document.getElementById('bd2').innerHTML += `<span id="you">` + b + `</span>`;
                }
                document.getElementById('bd2').innerHTML += '<br>';
                break;
        }
    }
}
input.onkeydown = function(e) {
    if (e.which == 13) {
        send();
    }
    if (e.which == 9) {
        man = '/tab';
        send();
    }
}
let c = true;

function thunho() {
    if (c) {
        db = document.body.innerHTML;
        document.body.innerHTML = `<div id="form_head" style="margin-top: 598px;"><span>Form Chat</span><span id="form_-" onclick="thunho()">-</span></div>`;
        c = false;
    } else {

        document.body.innerHTML = db;
        c = true;
        document.getElementById('input').onkeydown = function(e) {
            if (e.which == 13) {
                send();
            }
            if (e.which == 9) {
                man = '/tab';
                send();
            }
        }
    }
}