let adminNum=document.getElementById('adminNum');
let adminAvg=document.getElementById('adminAvg');
let adminTotal=document.getElementById('adminTotal');
let markNum=document.getElementById('markNum');
let markAvg=document.getElementById('markAvg');
let markTotal=document.getElementById('markTotal');
let devNum=document.getElementById('devNum');
let devAvg=document.getElementById('devAvg');
let devTotal=document.getElementById('devTotal');
let finNum=document.getElementById('finNum');
let finAvg=document.getElementById('finAvg');
let finTotal=document.getElementById('finTotal');
let totalNum=document.getElementById('totalNum');
let totalAvg=document.getElementById('totalAvg');
let totalSal=document.getElementById('totalSal');

let empTable=document.getElementById('empTable');


function readFromLocals(){
    let jsonArr=localStorage.getItem('allEmployees');
    let arr=JSON.parse(jsonArr);
    render(arr);
}

function render(arr){
    //{"empName":"Ghazi Samer","empDepartment":"Administration","empLevel":"Senior","empSalary":1575,"empID":1000}
    let admin=0;
    let adminSal=0;
    let marketing=0;
    let markSal=0;
    let dev=0;
    let devSal=0;
    let finance=0;
    let finSal=0;


    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i].empDepartment == "Administration")
        {
            admin++;
            adminSal+=arr[i].empSalary;
        }
        if(arr[i].empDepartment =="Marketing")
        {
            marketing++;
            markSal+=arr[i].empSalary;
        }
        if(arr[i].empDepartment =="Finance")
        {
            finance++;
            finSal+=arr[i].empSalary;
        }
        if(arr[i].empDepartment =="Development")
        {
            dev++;
            devSal+=arr[i].empSalary;
        }
        
    }

    adminNum.innerHTML=admin;
    markNum.innerHTML=marketing;
    finNum.innerHTML=finance;
    devNum.innerHTML=dev;

    adminAvg.innerHTML=adminSal/admin;
    markAvg.innerHTML=markSal/marketing;
    finAvg.innerHTML=finSal/finance;
    devAvg.innerHTML=devSal/dev;

    adminTotal.innerHTML=adminSal;
    markTotal.innerHTML=markSal;
    finTotal.innerHTML=finSal;
    devTotal.innerHTML=devSal;

    totalNum.innerHTML=admin+marketing+finance+dev;
    totalSal.innerHTML=adminSal+markSal+finSal+devSal;
    totalAvg.innerHTML=(adminSal/admin)+(markSal/marketing)+(finSal/finance)+(devSal/dev);
}

readFromLocals();