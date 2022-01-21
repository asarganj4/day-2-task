class Area{
    
    //initializing the setDem method
    setDem(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    //defining the getArea
    getArea(){
        return "Area of Rectangle is = "+(this.length*this.breadth);
    }
}

//taking the lenbgth and breadth of area by user
var length = window. prompt("Enter The length: ");
var breadth = window. prompt("Enter The breadth: ")

//creating the object of area
var area = new Area();
area.setDem(length,breadth);

//displaying the result of area
alert(area.getArea());