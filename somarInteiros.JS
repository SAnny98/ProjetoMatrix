  function verifica(n){
   return (typeof n=== 'number');
  }
 
  function somarInteiros (n){
   var i;
   var soma=0;
  
   if(verifica(n)){ 
     for (i=0; i<=n; i++){     
        soma+=i;     
     }
      return soma;
  }
 }
 console.log(somarInteiros());
