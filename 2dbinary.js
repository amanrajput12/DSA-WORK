function searchSortedMatrix(matrix,target){
    let row= matrix.length
    let col = matrix[0].length
    console.log(col);
    // if(row==0) {
    //     return false
    // }
    let left=0
    let right = row*col-1

    while(left<=right){
       let mid =Math.round((left+right)/2)  
       let midelement = matrix[Math.floor(mid / col)][mid % col]

       if(target===midelement){
      return true
       }
       else if (target<midelement){
        right =mid-1
       }
       else {
        left =mid+1
       }

    }
    return false
}

let matrix =[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let target =3;
console.log(matrix.length);
// function call
let result = searchSortedMatrix(matrix,target)
console.log(result);