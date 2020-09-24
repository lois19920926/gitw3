// 1.印出乘法表，從 3~15，從 3x1、3x2~一直到 15x15

const multCom = () => {
    let result = [];
    for (let i = 3; i < 16 ; i++) {  //1-15的數字
        for (let j = 1; j < 16 ; j++) {
            result.push(`${i}x${j}=${i*j}`);
        }
    }
    console.log(result);
};
multCom();

// 2.請建立一個 BMI 函式，裡頭有兩個參數(身高,體重)，執行時會印出對應 BMI，並取小數點後一位
let height = 1.66;
let weight = 59;

const BMICom = () => {
    let BMI = ( weight / Math.pow(height, 2) );
    console.log(`身高 = ${height}m，體重 = ${weight}kg`);    
    console.log(`BMI = ${BMI.toFixed(1)}`);
    return;
}
BMICom();