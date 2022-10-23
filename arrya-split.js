const Num =[1,2,3,4,5,6,7,8,9];
 const part=Num.slice(2,5);//slice moddokan teky doi bag kory paly ba koto number index teky koto number index porjonto katty cai ta boly dety hoy;

 const part2=Num.splice(2,3,67,89);//splice ar kaj holo koto number teky soro hoy koto number porjonto katby and add o korty pari;last ar 67,89 amra new add korce oi jaigai;
 
 console.log(part2);
 console.log(Num);

 const toGather= Num.join(' Im ')// cotasion ar moddy ja divo tai show korbay;
 console.log(toGather);
