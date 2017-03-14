var vehicle = function (){
    this.maxSpeed=speed;
    this.vehicleType=type;
    this.vehicleDisplacement=displacement;
};
vehicle.prototype.setmaxSpeed=function (speed){
  this.maxSpeed=speed;
  return this;
};

vehicle.prototype.setvehicleType=function (type){
  this.vehicleType=type;
  return this;
};

vehicle.prototype.setvehicleDisplacement=function (displacement){
  this.vehicleDisplacement=displacement;
  return this;
};

function vehicleObj(){
  var speed=document.getElementById("speed").value;
  console.log(speed);
  var type=document.getElementById("type").value;
  console.log(type);
  var displacement=document.getElementById("displacement").value;
  console.log(displacement);

  if(speed!=""||type!=""||displacement!=""){
  vehicle1=new vehicle();
    vehicle1.setmaxSpeed(speed);
    vehicle1.setvehicleType(type);
    vehicle1.setvehicleDisplacement(displacement);
    console.log(vehicle1);
    document.getElementById("output0").innerHTML="<h2><b>Vehicle Object created </b></h2>";
  }
  else{
    document.getElementById("output0").innerHTML="<h2><b>Please enter the value for vehicle </b></h2>";
  }
}
function setSpeed(){
  var sp=document.getElementById("newsp").value;
  if(vehicle !== undefined){
    console.log("new speed",sp);
    vehicle1.setmaxSpeed(sp);
    document.getElementById("output1").innerHTML="New speed of vehicle is created";
  }
  else{
    console.log("create vehicle first");
    document.getElementById("output2").innerHTML="Create object first";
  }
}
function getSpeed(){
  if(vehicle !== undefined){
    document.getElementById("output1").innerHTML= "New speed of vehicle is : " +vehicle1.maxSpeed;
  }
  else{
    console.log("create vehicle first");
    document.getElementById("output3").innerHTML="Create object first";
  }
}
