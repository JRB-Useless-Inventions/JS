function indexOfFirstPeak(arr){
  var out = 0;

  for(var i = 1; i<=arr.length; i++){
    var current = Math.abs(arr[i]);
    var last = Math.abs(arr[i-1]);
    var next = Math.abs(arr[i+1]);
    
    if (next < current && current > last) {
      //Found Peak
      out = current;
      return out;
    }
  }
}

x = indexOfFirstPeak([1,2,3,4,5,6,7,1,2,3,4,5]);

console.log(x);