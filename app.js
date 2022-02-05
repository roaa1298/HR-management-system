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
Employee.prototype.render = function(){
    document.write(`<p>The salary for the employee ${this.fullName} is ${this.salary}</p>`);
    let img2=document.createElement('img');
    img2.setAttribute('src',this.imageURL);
    img2.style.width='300px';
    img2.style.height='330px';
    card.appendChild(img2);

    let pp=document.createElement('p');
    pp.textContent = `Name: ${this.fullName} - ID: ${this.employeeID}`;
    card.appendChild(pp);

    let pp1=document.createElement('p');
    pp1.textContent = `Department: ${this.department} - Level: ${this.level}`;
    card.appendChild(pp1);

    let pp2=document.createElement('p');
    pp2.textContent = IDgenerator();
    card.appendChild(pp2);
    
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
    let urlE=event.target.image.value;


    let img1=document.createElement('img');
    img1.setAttribute('src',urlE);
    img1.style.width='300px';
    img1.style.height='330px';
    card.appendChild(img1);

    let p=document.createElement('p');
    p.textContent = `Name: ${fname} - ID: ${IDgenerator()}`;
    card.appendChild(p);

    let p1=document.createElement('p');
    p1.textContent = `Department: ${Department} - Level: ${Level}`;
    card.appendChild(p1);

    let p2=document.createElement('p');
    p2.textContent = IDgenerator();
    card.appendChild(p2);
}


empForm.addEventListener('submit', addCard);