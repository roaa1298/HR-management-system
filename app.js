'use strict';
function Employee(employeeID,fullName,department,level,imageURL,salary){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=salary;
}
Employee.prototype.calculateSalary = function(){
    let sal;
    if(this.level=="Senior")
    {
        sal= Math.random() * (2000 - 1500) + 1500;
        this.salary=Math.round(sal-(sal * (7.5/100)));
    }
    if(this.level=="Mid-Senior")
    {
        sal= Math.random() * (1500 - 1000) + 1000;
        this.salary=Math.round(sal-(sal * (7.5/100)));
    }
    if(this.level=="Junior")
    {
        sal= Math.random() * (1000 - 500) + 500;
        this.salary=Math.round(sal-(sal * (7.5/100)));
    }
}
Employee.prototype.render = function(){
    document.write(`<p>The salary for the employee ${this.fullName} is ${this.salary}</p>`);
}

const ghazi=new Employee(1000,"Ghazi Samer","Administration","Senior");
ghazi.calculateSalary();
ghazi.render();
const lana=new Employee(1001,"Lana Ali","Finance","Senior");
lana.calculateSalary();
lana.render();
const tamara=new Employee(1002,"Tamara Ayoub","Marketing","Senior");
tamara.calculateSalary();
tamara.render();
const safi=new Employee(1003,"Safi Walid","Administration","Mid-Senior");
safi.calculateSalary();
safi.render();
const omar=new Employee(1004,"Omar Zaid","Development","Senior");
omar.calculateSalary();
omar.render();
const rana=new Employee(1005,"Rana Saleh","Development","Junior");
rana.calculateSalary();
rana.render();
const hadi=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior");
hadi.calculateSalary();
hadi.render();