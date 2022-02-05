
let empTable=document.getElementById('empTable');
let eTable=document.getElementById('eTable');


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


    let tab=document.createElement('table');
    tab.style.border='1px solid #ddd';
    tab.style.padding='8px';
    tab.style.fontFamily='Arial, Helvetica, sans-serif';
    tab.style.borderCollapse='collapse';
    tab.style.width='100%';
    eTable.appendChild(tab);

    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tfoot=document.createElement('tfoot');
    tab.appendChild(thead);
    tab.appendChild(tbody);
    tab.appendChild(tfoot);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Department Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Number of employees";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Total salary";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Average salary";
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "Administration";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = admin;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = adminSal;
    let row_2_data_4 = document.createElement('td');
    row_2_data_4.innerHTML = adminSal/admin;
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    tbody.appendChild(row_2);

    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "Marketing";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = marketing;
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = markSal;
    let row_3_data_4 = document.createElement('td');
    row_3_data_4.innerHTML = markSal/marketing;
    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    row_3.appendChild(row_3_data_4);
    tbody.appendChild(row_3);

    let row_4 = document.createElement('tr');
    let row_4_data_1 = document.createElement('td');
    row_4_data_1.innerHTML = "Development";
    let row_4_data_2 = document.createElement('td');
    row_4_data_2.innerHTML = dev;
    let row_4_data_3 = document.createElement('td');
    row_4_data_3.innerHTML = devSal;
    let row_4_data_4 = document.createElement('td');
    row_4_data_4.innerHTML = devSal/dev;
    row_4.appendChild(row_4_data_1);
    row_4.appendChild(row_4_data_2);
    row_4.appendChild(row_4_data_3);
    row_4.appendChild(row_4_data_4);
    tbody.appendChild(row_4);

    let row_5 = document.createElement('tr');
    let row_5_data_1 = document.createElement('td');
    row_5_data_1.innerHTML = "Finance";
    let row_5_data_2 = document.createElement('td');
    row_5_data_2.innerHTML = finance;
    let row_5_data_3 = document.createElement('td');
    row_5_data_3.innerHTML = finSal;
    let row_5_data_4 = document.createElement('td');
    row_5_data_4.innerHTML = finSal/finance;
    row_5.appendChild(row_5_data_1);
    row_5.appendChild(row_5_data_2);
    row_5.appendChild(row_5_data_3);
    row_5.appendChild(row_5_data_4);
    tbody.appendChild(row_5);

    let row_6 = document.createElement('tr');
    let row_6_data_1 = document.createElement('td');
    row_6_data_1.innerHTML = "Total";
    let row_6_data_2 = document.createElement('td');
    row_6_data_2.innerHTML = admin+marketing+finance+dev;
    let row_6_data_3 = document.createElement('td');
    row_6_data_3.innerHTML = adminSal+markSal+finSal+devSal;
    let row_6_data_4 = document.createElement('td');
    row_6_data_4.innerHTML = ((adminSal/admin)+(markSal/marketing)+(finSal/finance)+(devSal/dev))/4;
    row_6.appendChild(row_6_data_1);
    row_6.appendChild(row_6_data_2);
    row_6.appendChild(row_6_data_3);
    row_6.appendChild(row_6_data_4);
    tfoot.appendChild(row_6);
}

readFromLocals();