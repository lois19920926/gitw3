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
