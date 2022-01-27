'use strict';
function Employee(employeeID,fullName,department,level,imageURL,salary){
    this.employeeID=employeeID;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=imageURL;
    this.salary=salary;
}
let card=document.getElementById('card');
let empForm=document.getElementById('empForm');

function IDgenerator(){
    let val = Math.floor(1000 + Math.random() * 9000);
    return val;
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

let employees=[];

Employee.prototype.render = function(){
    document.write(`<p>The salary for the employee ${this.fullName} is ${this.salary}</p>`);

    let empObj={empName:this.fullName,empDepartment:this.department,empLevel:this.level,empSalary:this.salary,empID:this.employeeID};
    employees.push(empObj);

    let jsonArray=toJSON();
    saveToLocals(jsonArray);
}

const ghazi=new Employee(1000,"Ghazi Samer","Administration","Senior",'./assests/Ghazi.jpg');
ghazi.calculateSalary();
ghazi.render();
const lana=new Employee(1001,"Lana Ali","Finance","Senior",'./assests/Lana.jpg');
lana.calculateSalary();
lana.render();
const tamara=new Employee(1002,"Tamara Ayoub","Marketing","Senior",'./assests/Tamara.jpg');
tamara.calculateSalary();
tamara.render();
const safi=new Employee(1003,"Safi Walid","Administration","Mid-Senior",'./assests/Safi.jpg');
safi.calculateSalary();
safi.render();
const omar=new Employee(1004,"Omar Zaid","Development","Senior",'./assests/Omar.jpg');
omar.calculateSalary();
omar.render();
const rana=new Employee(1005,"Rana Saleh","Development","Junior",'./assests/Rana.jpg');
rana.calculateSalary();
rana.render();
const hadi=new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior",'./assests/Hadi.jpg');
hadi.calculateSalary();
hadi.render();

function addCard(event){
    event.preventDefault();
    let fname = event.target.fname.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;

    let idE;
    let urlE;
    if(fname==ghazi.fullName)
    {
        idE=ghazi.employeeID;
        urlE=ghazi.imageURL;
    }
    if(fname==lana.fullName)
    {
        idE=lana.employeeID;
        urlE=lana.imageURL;
    }
    if(fname==tamara.fullName)
    {
        idE=tamara.employeeID;
        urlE=tamara.imageURL;
    }
    if(fname==safi.fullName)
    {
        idE=safi.employeeID;
        urlE=safi.imageURL;
    }
    if(fname==omar.fullName)
    {
        idE=omar.employeeID;
        urlE=omar.imageURL;
    }
    if(fname==rana.fullName)
    {
        idE=rana.employeeID;
        urlE=rana.imageURL;
    }
    if(fname==hadi.fullName)
    {
        idE=hadi.employeeID;
        urlE=hadi.imageURL;
    }

    card.innerHTML='';

    let img1=document.createElement('img');
    img1.setAttribute('src',urlE);
    img1.style.width='300px';
    img1.style.height='330px';
    card.appendChild(img1);

    let p=document.createElement('p');
    p.textContent = `Name: ${fname} - ID: ${idE}`;
    card.appendChild(p);

    let p1=document.createElement('p');
    p1.textContent = `Department: ${Department} - Level: ${Level}`;
    card.appendChild(p1);

    let p2=document.createElement('p');
    p2.textContent = IDgenerator();
    card.appendChild(p2);
}

function toJSON(){
    let jsonArray=JSON.stringify(employees);
    return jsonArray;
}

function saveToLocals(jsonArray){
    localStorage.setItem('allEmployees',jsonArray);
}

empForm.addEventListener('submit', addCard);