import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float"

actor DBank{
  stable var startTime= Time.now() ;
  // startTime := Time.now();
  Debug.print(debug_show(startTime));
  stable var currentValue: Float= 300;
  // currentValue := 300;

  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };
  // topUp();
  public func widraw(amount: Float){
    let valueLeft: Float = currentValue- amount;
    if (valueLeft >=0){
        currentValue -= amount;
    Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Not enough account balance!");

    };
  
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  public func Compound() {
    let currentTime= Time.now();
    let elapsedTime= currentTime-startTime;
    let elapsedTimeS= elapsedTime/ 1000000000;
    currentValue:= currentValue * (1.01 ** Float.fromInt(elapsedTimeS) );
    startTime := currentTime;
  };
}

// Compound interest= A+(1+interest rate)^time