// DP
let dp = Array(102).fill().map(()=>Array(10002).fill(-1))

//matrix if passed inside func should be of size n+1 , W+1
const knapsacko1 = (wt,val,W,n) => {
    if(n===0|| W===0){
        return 0
    }
    if(dp[n][W]!==-1) {
        return dp[n][W]
    }

    if(wt[n-1]<=W){
        return dp[n][W] = Math.max((val[n-1]+knapsacko1(wt,val,W-wt[n-1],n-1)),knapsacko1(wt,val,W,n-1))
    }
    else{
        return dp[n][W] =knapsacko1(wt,val,W,n-1)
    }
}

console.log(knapsacko1([2,1,4,3,2],[1,4,3,5,2],11,5))



// console.log(dp)


//
// const max =(a, b) =>{
//           return (a > b) ? a : b;
//     }
const knapsack01TD = (wt,val,n,W) => {
    let dp = Array(n+1).fill().map(()=>Array(W+1).fill(-1))
    //console.log(dp)
    //let dp = new Array(n+1)
    for(let i = 0; i<= n ; i++){
           // dp[i] = new Array(W+1)
        for(let w =0 ; w <= W; w++){
            // recursive base condition as initilisation
            if(i==0 || w==0){
                dp[i][w] = 0
            }
            else if(wt[i-1]<=w){
                console.log("here###",i,w,val[i-1],dp[i-1][w-wt[i-1]],dp[i-1][w])
                dp[i][w] = max(val[i - 1]
                                             + dp[i - 1][w - wt[i - 1]],
                                             dp[i - 1][w]);
            }
            else if(wt[i-1]>w){
                dp[i][w] = dp[i-1][w]
            }
            
        }}


    console.log("&&&",dp, dp[n][W])

}
knapsack01TD([2,1,4,3,2],[1,4,3,5,2],5,11)



 function max(a, b)
    {
          return (a > b) ? a : b;
    }
  
    // Returns the maximum value that can
    // be put in a knapsack of capacity W
    function knapSack(W, wt, val, n)
    {
        let i, w;
        let K = new Array(n + 1);
  
        // Build table K[][] in bottom up manner
        for (i = 0; i <= n; i++)
        {
            K[i] = new Array(W + 1);
            for (w = 0; w <= W; w++)
            {
                if (i == 0 || w == 0)
                    K[i][w] = 0;
                else if (wt[i - 1] <= w)
                    K[i][w]
                        = max(val[i - 1]
                         + K[i - 1][w - wt[i - 1]],
                         K[i - 1][w]);
                else
                    K[i][w] = K[i - 1][w];
            }
        }
        console.log(K)
  
        return K[n][W];
    }

    knapSack(11,[2,1,4,3,2],[1,4,3,5,2],5)


// recursion
// extended-recursion-tree
// ip = n =3
// op =  '((()))', '(()())', '(())()', '()(())', '()()()' 


const solve = (open,close,output,result) =>{
    if(open===0 && close===0){
        result.push(output)
        return
    }
    if(open!==0){
        let op1 = output + "("
        solve(open-1,close,op1,result)

    }
    if(close>open){
        let op2 = output + ")"
        solve(open,close-1,op2,result)
    }
}

const generateBalancedParanthesis = (n) =>{
    let open = n;
    let close = n ;
    let result = []

    solve(open,close,"",result)
    console.log(result)
}
generateBalancedParanthesis(3)

//
//Print N-bit binary numbers having more 1’s than 0’s for any prefix
//Input:
// 2

// 3
// Output:
// 11 10
// 111 110 101 . 


const solve = (one,zero,count,output) =>{
    if(count===0){
       console.log(output) 
       return
    }
    
      let  op1 = output + "1"
        solve(one+1,zero,count-1,op1)
    
    if(zero<one){
        let op2 = output + "0"
        solve(one,zero+1,count-1,op2)
    }
}



const printNBinaryNumbers = (n) =>{
    let one = 0;
    let zero = 0
    let count = n

    solve(one,zero,count,"")
}
printNBinaryNumbers(5)

// IBH

//
const deleteStructure = (arr,k) =>{

    if(k==1){
        arr.pop()
        return arr
    }
    let last = arr[arr.length-1]
    arr.pop()
    deleteStructure(arr,k-1)
    arr.push(last)
}

const deleteEle = (arr) =>{

    if(arr.length==0){
        return
    }
    let k = Math.trunc(arr.length/2 + 1)
    console.log(k)
        deleteStructure(arr,k)

        return arr

}

console.log(deleteEle([5,4,5,8,9,2,1,6]))
//
const factorial = (n) =>{
    let result = undefined
    if(n===1){
        result = 1
    }
    else{
        console.log(result,n)
    result = n * factorial(n-1)
    console.log("1",result)
    }

    return result
    
}

console.log(factorial(6))
//
const kthGrammar = (n,k) =>{
  console.log(n,k)
    if(n==1 && k==1)
            return 0;
        
        let mid = Math.pow(2,n-1)/2;
        
        if(k<=mid){
            return kthGrammar(n-1,k);
        }else{
            return !kthGrammar(n-1,k-mid);
        }



}


console.log(kthGrammar(4,5))

//0  n =1
//01  n=2
//0110   n =3
//01101001  n=4

//const insertLast = (list,ele) => {
    console.log("2---",list,ele)
    if(list.length===0){
        list.push(ele)
        return
    }

    let anotherElement = list[list.length-1]
    list.pop()
    insertLast(list,ele)
    list.push(anotherElement)
}




const reverseStack = (stack1) =>{
    console.log("1---",stack1)
    if(stack1.length===0 || stack1.length===1){
        return
    }

    let element = stack1[stack1.length-1]
    stack1.pop()
    reverseStack(stack1)
    console.log("3---",stack1)
    insertLast(stack1,element)
    return stack1
}

console.log(reverseStack([1,2,3,4,5]))

//

// sort array via recursion
//https://www.youtube.com/watch?v=AZ4jEY_JAVc&list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY&index=6

const inserLastElement = (list,temp) =>{
    console.log("####",list,temp)
    if(list.length===0 || list[list.length-1]<=temp){
        list.push(temp)
        return list
    }

    let anotherTemp = list[list.length-1]
    list.pop()
    inserLastElement(list,temp)
    list.push(anotherTemp)

}

const sortArray = (arr) =>{
    // base condition
    if(arr.length===1){
        console.log("here____")
        return
    }

    let temp = arr[arr.length-1]
    arr.pop()
    console.log("1",arr)
     sortArray(arr)

     inserLastElement(arr,temp)


     return arr


}
console.log(sortArray([2,3,7,6,4,5,9]))
//

const inserLastElement = (list,element) => {
    if(list.length===0 || list[list.length-1]<=element){
        list.push(element)
      
        return list
  
    }


    let last = list[list.length-1]
    list.pop()
    inserLastElement(list,element)
  
    list.push(last) 


}


const sortArray = (arr) =>{

    if(arr.length===1){
        return
    }

    let element = arr[arr.length-1]
    arr.pop()
    console.log("1,arr",arr)
    sortArray(arr)

    inserLastElement(arr,element)

    return arr

}

console.log(sortArray([2,3,7,6,4,5,9]))

//
const insertLast = (list,temp) =>{

    if(list.length===0 || list[list.length-1]<=temp){
        list.push(temp)
        return list
    }

    let otherTemp = list[list.length-1]
    list.pop()
    insertLast(list,temp)
    list.push(otherTemp)
}


const sortStack = (stack1) =>{


    if(stack1.length===1){
        return
    }

    let lastElement = stack1[stack1.length-1]
    stack1.pop()
    sortStack(stack1)
    insertLast(stack1,lastElement)

    return stack1


}

console.log(sortStack([2,3,7,6,4,5,9]))
