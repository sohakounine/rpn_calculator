function reverse_polish_notation(s) {
    var st, tk, i, x, y, z
    s = s.length > 0 ? s.split(',') : []
    st = []
    for (i = 0; i < s.length; ++i) {
        tk = s[i]
        if (/^[+-]?(\.\d+|\d+(\.\d*)?)$/.test(tk))
            z = Number(tk)
        else {
            if (tk.length > 1 || '+-*/'.indexOf(tk) == -1 || st.length < 2) break
            y = st.pop();
            x = st.pop();
            z = eval(x + tk + ' ' + y)
        }
        st.push(z)
    }
    return i < s.length || st.length > 1 ? 'error' :
        st.length == 1 ? st.pop() : ''
}
var eval_ans = reverse_polish_notation(process.argv.splice(2).toString());
console.log(eval_ans);
module.exports.reverse_polish_notation = reverse_polish_notation;