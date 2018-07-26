function verifica(n){
   return (typeof n=== 'number');
 }


function somarImpares(n){
   
  if(verifica(n)){
   var soma=0;
   var num=1;
    
    for (var i = 0; i<n; i++){
      soma += num;
      num +=2     
    }
      return soma;
  }
}
console.log(somarImpares());
