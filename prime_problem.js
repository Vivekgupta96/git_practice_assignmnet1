let prime=(n)=>{
    let count=0;
    for(i=1;i<=n;i++){
        if(n%i==0){
            count++
        }
    }
    if(count==2){
       return true; 
    }
        return false;

};
console.log(prime(13))