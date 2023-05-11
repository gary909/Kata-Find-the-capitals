var capitals = function (word) {
    let myArr = [];
    let myCnt = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i].toUpperCase() == word[i]){
            myArr.push(myCnt);
            myCnt = myCnt + 1;
        } else {
            myCnt = myCnt + 1;
        }
    }
    return myArr;
};

console.log(capitals('CodEWaRs')); // [0,3,4,6]