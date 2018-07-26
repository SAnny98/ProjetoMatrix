function verifica(n){
   return (typeof n=== 'number');
 }

function multiplicarInteiros(n){
  var mult=1;
  
  if(verifica(n)){
    
    for (var i = 1; i<=n; i++){
      mult *=i;
    }
     return mult;  
  }
}
console.log(multiplicarInteiros());
