 function verifica(n){
   return (typeof n=== 'number');
 }
function multiplicarInteiros(n){
  if(verifica(n)){
  
    if(n<=0){
    return 1;
    }
  
    else {
    return (n * multiplicarInteiros(n-1));
    }
  }
}
console.log(multiplicarInteiros());
