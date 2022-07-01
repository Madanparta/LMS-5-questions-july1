// QNo 1. Print the following Pattern.

// let num =5;

// for(let i=1;i<=num;i++){
//     let stars =''
//     for(let j=1;j<=num;j++){
//         if(i==j||i+j==num+1){
//             stars += ' *'
//         }else{
//             stars += '  '
//         }
//     }
//     console.log(stars)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// QNo 2. Print the following Pattern.

// let num =3;

// for(let i=1;i<=num;i++){
//   let stars =''
//   for(let j=num;j>i;j--){
//     stars +='  '
//   }
//   for(let k=0;k<i*2-1;k++){
//     if(k===0||k===2*i-2){
//       stars +='  *'
//     }
//     else{
//       stars += '  '
//     }
//   }
//   console.log(stars)
// }
// for(let i=num;i>=1;i--){
//   let stars =''
//   for(let j=num;j>i;j--){
//     stars +='  '
//   }
//   for(let k=0;k<i*2-1;k++){
//     if(k===0||k===2*i-2){
//       stars +='  *'
//     }
//     else{
//       stars += '  '
//     }
//   }
//   console.log(stars)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Qno 3: Print the following pattern

// let n = 5;
// let count =1;
// for(let i=1;i<=n;i++){
// let stars = ''
// for(let j=1;j<=i;j++){
//     stars = `${stars} ${count}`;
//     count++;
// }
// console.log(stars)
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Qno 4: Print Fibonacci series in this order

// let a =0;
// let b=1;
// for(let i=a; i<=5; i++){
//     let stars = ''
//     for(let j=1; j<=i; j++){
//         stars = stars+`${a} `
//         let c=a+b;
//         a=b;
//         b=c;
//     }
//     console.log(stars)
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Qno 5: Print the following Pattern.

// for(let i=1;i<=3;i++){
//     let stars=" "
//     for(let j=1;j<=3-i;j++){
//         stars=stars+" "
//     }
//     let k=i
//     for(j=1;j<=i;j++){
//         stars=stars+k++
//     }
//      k=k-2;
//     for(let j=1;j<i;j++){
//         stars=stars+k--
//     }
//     console.log(stars)
// }
// for(let i=3-1;i>=1;i--){
//     let stars=" "
//     for(let j=1;j<=3-i;j++){
//         stars=stars+" "
//     }
//     let k=i
//     for(j=1;j<=i;j++){
//         stars=stars+k++
//     }
//      k=k-2;
//     for(let j=1;j<i;j++){
//         stars=stars+k--
//     }
//     console.log(stars)
// }