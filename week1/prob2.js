function fibo(n){
    if(n==0){
        console.log('0')
    }
    else if(n==1){
        console.log('1')
    }
    else{
        let a=0
        let b=1
        for(let i=1;i<n;i++){
            let temp=a
            a=b
            b=temp+a
        }
        console.log(b)
    }
}

//fibo(12)