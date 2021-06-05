var ketqua = document.getElementById('ketqua');
a = null;
b = null;
pt = null;

function Caculator(obj) {
    type = obj.value;
    if (type == '0' ||
        type == '1' ||
        type == '2' ||
        type == '3' ||
        type == '4' ||
        type == '5' ||
        type == '6' ||
        type == '7' ||
        type == '8' ||
        type == '9' ||
        type == '.' ||
        type == '+/-') {
        if (type == '0' ||
            type == '1' ||
            type == '2' ||
            type == '3' ||
            type == '4' ||
            type == '5' ||
            type == '6' ||
            type == '7' ||
            type == '8' ||
            type == '9') {
            if (ketqua.value == '0') {
                ketqua.value = type;
            } else if (ketqua.value != '0') {
                ketqua.value += type;
            }
        } else {
            if (type == '.') {
                if (ketqua.value != '0') {
                    ketqua.value += '.';
                }
            } else {
                ketqua.value *= -1;
            }
        }
    } else {
        if (type == '+' ||
            type == '-' ||
            type == 'x' ||
            type == ':') {
            a = ketqua.value;
            pt = type;
            ketqua.value = '0';
        } else if (type == '=') {
            b = ketqua.value;
            switch (pt) {
                case '+':
                    ketqua.value = Number(a) + Number(b);
                    break;
                case '-':
                    ketqua.value = Number(a) - Number(b);
                    break;
                case 'x':
                    ketqua.value = Number(a) * Number(b);
                    break;
                case ':':
                    ketqua.value = Number(a) / Number(b);
                    break;
                default:
                    console.log('lỗi');
            }
        } else {
            switch (type) {
                case 'CE':
                    ketqua.value = '0';
                    break;
                case 'C':
                    ketqua.value = '0';
                    a = null;
                    b = null;
                    pt = null;
                    break;
                case '<--':
                    ketqua.value = ketqua.value.substr(0, ketqua.value.length - 1)
                    break;
                default:
                    console.log('lỗi');
            }
        }
    }
}