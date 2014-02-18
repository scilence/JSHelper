function Fibonacci(n){
  if(n == 0) return 0;
  else if (n==1) return 1;
  else return f(n-1) + f(n-2);
}

var listFibonacci = function(n){
  var str = "";
  for(var i = 0, v=Fibonacci(i); v < n; v = Fibonacci(i++)){
    str += v + ", "
  } 
  console.log(str.slice(0, -2));
}