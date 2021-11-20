function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a,b)
    }
  }
}

// function pass as value

function sum(a,b) {
  return a + b
}

// higher order function

let curriedSum = curry(sum)

// is the same as

function curriedSum(...args){

	return curry(sum)(...args)
}

console.log( curriedSum(1)(2) )

obj1 = {
  "test": {
    "a": {
      "test2" : 5
    },
    "b": {
      "test2" : 6,
      "test" : {
        "test3" : 8,
        "test": {
          "subtest": {
            "test2" : 12,
            "subtest": {
              "test1": 2,
              "test2" : 55
            }
          }
        }
      }
    }
  }
}

obj2 = {
  "test": {
    "a": {
      "test2" : 1
    },
    "b": {
      "test2" : 9,
      "test" : {
        "test3" : 8,
        "test": {
          "subtest": {
            "test2" : 0,
            "subtest": {
              "test1": 2,
              "test2" : 7
            }
          }
        }
      }
    }
  }
}

result = overFunc( [obj1,obj2] , fchain )( (x,i) => i == 'test2' && x+2 )

console.log(result)

function mapForObject(x,callback,arr=[]){
  for ( y of Object.keys(x) ) {
    if ( typeof x[y] != 'object' ){
      ( x => x && arr.push(x) )(callback(x[y],y))
    }else{
      mapForObject(x[y],callback,arr)
    }
  }
  return arr
}

function overFunc(x,y){

	return function (callback){

		return x.map( x => y(x,callback) )

	}

}

function fchain(x,callback){

	return mapForObject(x,callback)
}
