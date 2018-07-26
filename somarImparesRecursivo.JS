function verifica(n){
   return (typeof n=== 'number');
 }
 
 function somarImpares(n){ 
  if(verifica(n)){
   
    if(n<=0){
     return 0;
    }
    else {
      return ((2*n-1) + somarImpares(n-1))
    }
  }
}
console.log(somarImpares());
