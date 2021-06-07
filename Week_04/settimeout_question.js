function fn1() {
    for (var i = 0; i < 4; i++) {
        var tc = setTimeout(function (i) {
            console.log(i)
            clearTimeout(tc)
        }, 10, i)
    }
}
fn1()

setTimeout(function () {}, 1000)