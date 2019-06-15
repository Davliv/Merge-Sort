function mergesort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge (
        mergesort(left),
        mergesort(right)
    )
}

function merge (left,right) {
    let result = [];
    let indexleft = 0;
    let indexright = 0;


  while (indexleft < left.length && indexright < right.length) {
        if (left[indexleft] < right[indexright]) {
            result.push(left[indexleft]);
            indexleft++;
        }
        else {
            result.push(right[indexright]);
            indexright++;
        }
        
    }
    return result.concat(left.slice(indexleft)).concat(right.slice(indexright));
}
const list = [5,7,1,4,9,8,6,3];
console.log(mergesort(list));