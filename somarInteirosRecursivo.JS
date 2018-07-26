function somarInteiros(n){
  if(n<=0){
    return 0;
  }
  else{
    return (n + somarInteiros(n-1));
  }
}
console.log(somarInteiros());
