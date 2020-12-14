// https://www.cnblogs.com/christal-r/p/dynamic_programming.html这边文章稍微看懂的
// w重量，v价值
//第一，包的容量比该商品体积小，装不下，此时的价值与前i-1个的价值是一样的，即V(i,j)=V(i-1,j)；
//第二，还有足够的容量可以装该商品，但装了也不一定达到当前最优价值，所以在装与不装之间选择最优的一个，即V(i,j)=max｛ V(i-1,j)，V(i-1,j-w(i))+v(i) ｝
// 由此可以得出递推关系式
//1. j<w(i),V(i,j)=V(i-1,j)
//2. j>(wi),V(i,j)=Max{ V(i-1,j), v(i) + V(i-1,j-w(i))    }

/** 
 * weights [0,2,3,5]
 * values  [0,2,4,7]
*/
function knapSack(capacity,weights,valus) {
  let V=[]
  for(let i=0;i<valus.length;i++) {
    V[i]=[]
    for(let j=0;j<capacity.length;j++){
      if(i===0 || j===0){
        V[i][j] = 0
      }
      else if(j<weights[i]){
        V[i][j] = V[i-1][j]
      } else {
        V[i][j] = Math.max(V[i-1][j],V[i-1][j-weights[i]] + valus[i])
      }
    }
  }
}