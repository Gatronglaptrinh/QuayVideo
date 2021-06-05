function Caltools(a, pt, ut) {
    b = 0;
    f = 0;
    c = [];
    x = [];
    d = 0;
    e = 0;
    t = 0;
    s = a;
    uu = 0;
    aa = [];

    for (let i = 0; i < a.length; i++) {
        d = a[i];
        if (d == pt[0] || d == pt[1] || d == pt[2] || d == pt[3]) {
            c[b] = a.substring(f, i);
            x[b] = a[i];
            b++;
            f = i + 1;
            a = a.substring(f, a.length);
            f = 0;
            d = 0;
            i = 0;
        }
    }
    c[b] = a;
    for (let i = 0; i < c.length; i++) {
        if (isNaN(c[i])) {
            c[i] = undefined;
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ut[0] || x[i] == ut[1]) {
            aa[uu] = i;
            uu++;

        }
    }


    this.uuTien = uu;
    this.uuTienMang = aa;
    this.ptDUT = ut;
    this.lengthNum = c.length;
    this.lengthPt = x.length;
    this.num = c;
    this.pt = x;
    this.str = s;
    this.pts = pt;
}

function CalSTN(a) {
    for (let i = 0; i < a.uuTienMang.length; i++) {
        if (a.pt[a.uuTienMang[i]] == a.ptDUT[0]) {
            s = Number(a.num[a.uuTienMang[0]]) * Number(a.num[a.uuTienMang[0] + 1]);
            a.num.splice(a.uuTienMang[0], 2, String(s));
            a.pt.splice(a.uuTienMang[0], 1);
            a.uuTien--;
            i = 0;
            a.uuTienMang.splice(0, 1);
            console.log(s);
        }
        else if (a.pt[a.uuTienMang[i]] == a.ptDUT[1]) {
            s = Number(a.num[a.uuTienMang[0]]) / Number(a.num[a.uuTienMang[0] + 1]);
            a.num.splice(a.uuTienMang[0], 2, String(s));
            a.pt.splice(a.uuTienMang[0], 1);
            a.uuTien--;
            i = 0;
            a.uuTienMang.splice(0, 1);
            console.log(s);
        }
    }
    for (let i = 0; i < a.lengthPt; i++) {
        if (a.pt[0] == a.pts[0]) {
            s = Number(a.num[0]) + Number(a.num[1]);
            a.num.splice(0, 2, String(s));
            a.pt.splice(0, 1);
            i = 0;
            console.log(s);
        }
        else if (a.pt[0] == a.pts[1]) {
            s = Number(a.num[0]) - Number(a.num[1]);
            a.num.splice(0, 2, String(s));
            a.pt.splice(0, 1);
            i = 0;
            console.log(s);
        }
    }
    
}
sa = new Caltools("2x2x2", ['+', '-', 'x', ':'], ['x', ':']);
CalSTN(sa);