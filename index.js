// function reverse(str){
//     return str.split('').reverse();

// }
// console.log(reverse('Hello'))


/////////////////

// function arr (num2,num1) {
 
//     let arr=[]
// num2.forEach(el => {
//     if(num1.includes(el)){arr.push(el)}

    
// });
// return arr
// }
// console.log(arr(['1','2','2','1'],
//     ['2','2'])
//     )
//     console.log(arr(['4','9','5' ],['4','9','4','8','4']))


///////////////////////////


// function arr(nums){
//     nums=nums.sort()
//    for (let i = 0; i < nums.length; i++) {
//     if (nums[i]===nums[i+1]) {
//         return true
    
//     }
//     else {return false}
//    }
// }
// console.log(arr(['1','2','3','1' ]))
// console.log(arr([1,2,3,4]))
// console.log(arr([1,1,1,3,3,4,3,2,4,2]))

///////////////////////////////////

// function commonPrefix(prefix){
//     const newArr=[]
//     for (let i = 0; i < prefix.length; i++) {
//         if (prefix[0][i]===prefix[1][i]&& prefix[0][i]===prefix[2][i]) {
// newArr.push(prefix[0][i])
            
//         }}
//         if (newArr.length>0 ) {
//             return newArr
//         }
//         else{
//             return ("")
//         }
        
// }
// console.log(commonPrefix(
//     ["flower","flow","flight"]
// ))
// console.log(commonPrefix(
//     ["dog","racecar","car"]
// ))

////////////////////////////

// function powfunction(n) { 
//     if (n===0) {return false
        
//     }
//     while (n%3===0) {
//          n=n/3
//     }
//     return n===1
   
// }
// console.log(powfunction(15))

////////////////////////////////

// function nums(digits){

//   let str=parseFloat(digits.join(''))+1
  
// return str.toString().split('')
// } 


// console.log(nums([1,2,3]));

////////////////////////////////////////////

// function rom(number) {
//     let sum=0;
//     const rumalfabeth={
//         'I': 1,
//         'V': 5,
//         'X':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':1000
//     }
//    for(let i=0;i<number.length;i++){
//     let oneNumber=rumalfabeth[number[i]]
//     let secondNumber=rumalfabeth[number[i+1]]
    
//       if(secondNumber>oneNumber){
//         sum+=secondNumber-oneNumber
//         i++
//       }else{
//         sum+=oneNumber
     
//       }
//    }
//     return console.log(sum);
// }

// rom('MCMXCIV')

//////////////////////////////////

function alfabeth(str) {
    let sum=0
    // const alfa={
    // 'A':1,
    // 'B':2,
    // 'C':3,
    // 'D':3,
    // 'E':5,
    // 'F':6,
    // 'G':7,
    // 'H':8,
    // 'I':9,
    // 'J':10,
    // 'K':11,
    // 'L':12,      
    // 'M':13,
    // 'N':14,
    // 'O':15,
    // 'P':16,
    // 'Q':17,
    // 'R':18,
    // 'S':19,
    // 'T':20,
    // 'U':21,
    // 'V':22,
    // 'W':23,
    // 'X':24,
    // 'Y':25,
    // 'Z':26
    // }
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

   for(let i=0;i<str.length;i++){
    if(alphabet.includes(str)){
        return (alphabet.indexOf(str[i])+1)
        
    }else{

    }
   }
    
}
console.log(alfabeth('A'));