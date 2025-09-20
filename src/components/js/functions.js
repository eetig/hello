/**
 * 这是一个加载项自定义函数
 * @customfunction
 * @param {string} arg0 - 支持字符串参数
 * @param {number} arg1 - 支持数值参数
 * @param {boolean} arg2 - 支持bool参数
 * @returns {number} - 可以设置返回值类型
 */
function custom_function(arg0, arg1, arg2, arg3, arg4) {
    let argAndType = (arg) => `${arg}: ${typeof arg}`
    let argAndTypeList = [arg0, arg1, arg2, arg3, arg4].map(argAndType)
    let message = `这是一个加载项自定义函数(${argAndTypeList.join(', ')})`
    console.log(message)
    return message
}


/**
 * 卧式储罐液位容积计算
 * @customfunction
 */
function V_tank01(L, r, h, hi) {
    return L*(Math.PI*r*r/2-(r-h)*Math.sqrt(2*r*h-h*h)-r*r*Math.asin((r-h)/r))+Math.PI*hi/3/r*(3*r*r*h-r*r*r+Math.pow((r-h),3))
}

/**
 * 卧式储罐液位容积计算
 * @customfunction
 */
function V_tank02(L, r, h) {
    return (1+2*r/L/3)*(L*r*r*(Math.asin(h-r)/r+(h-r)/r/r*Math.sqrt(r*r-(h-r)*(h-r))+Math.PI/2))
}

/**
 * 卧式储罐液位容积计算
 * @customfunction
 */
// function V_tank03_3ttd(h) {
//     let L = 4.5,r=0.8,hi=0.435;
//     return L*(Math.PI*r*r/2-(r-h)*Math.sqrt(2*r*h-h*h)-r*r*Math.asin((r-h)/r))+Math.PI*hi/3/r*(3*r*r*h-r*r*r+Math.pow((r-h),3))
// }

function V_tank04_4jcz(h) {
    let L = 4,r=1.1,hi=0.55;
    return L*(Math.PI*r*r/2-(r-h)*Math.sqrt(2*r*h-h*h)-r*r*Math.asin((r-h)/r))+Math.PI*hi/3/r*(3*r*r*h-r*r*r+Math.pow((r-h),3))
}