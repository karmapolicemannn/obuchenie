function hero(bullets, dragons){
    var isEnougth = bullets / dragons;
    var result;
    isEnougth >= 2 ? (result = true) : (result = false);
    
    if(dragons = 0) {
      return true;
    } else {
      return result;
    }
    
  }
// самое удачное решение на мой взгляд
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }  