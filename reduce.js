const arr = [1, 2, 3, 4, 5, 6]
const res = arr.reduce((pre, acc) => {
    console.log(pre, acc)
    return pre + acc
})
console.log(res)