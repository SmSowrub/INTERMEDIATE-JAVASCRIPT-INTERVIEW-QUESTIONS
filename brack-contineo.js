
const Num=[1,2,3,4,5,6,7,8,9]

for (let i = 0; i < Num.length; i++) {
    
    if(Num[i]>4){
        break
    }
    else{
        //console.log(Num[i]);
    }
}

const num2=[1,-2,3,-4,5,-6,7,-8,9]

for (let i = 0; i < num2.length; i++) {
    
    if(num2[i]<0){
        continue;
    }
    else{
        console.log(num2[i]);
    }
}