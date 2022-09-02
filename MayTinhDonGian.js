function number(a) {
    document.getElementById('hienthi').value+=a
}
function reset() {
    document.getElementById('hienthi').value=''
}
function ketqua() {
    let input = document.getElementById('hienthi').value
    let ketqua = eval(input)
    document.getElementById('hienthi').value = ketqua
}
