function numberOneTriangle(num) {
    num = parseInt(num);
    for(let i=0; i<num; i++) {
        for(let j=0; j<=i; j++) {
            document.writeln("*");
        }
        document.writeln("<br>");
    }
}
numberOneTriangle(prompt('Nhập Một Số Nguyên Trong Khoảng (1-10):'));