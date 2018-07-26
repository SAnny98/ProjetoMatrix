 function verifica(n){
   return (typeof n=== 'number');
 }

function somarInteiros(n){
  if(verifica(n)){
  
  if(n<=0){
    return 0;
  }
  else{
    return (n + somarInteiros(n-1));
  }
 }
}
console.log(somarInteiros());
