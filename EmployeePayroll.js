class EmployeePayrollData
{
    //property
    id;
    slary;
    gender;
    startDate;

    //constructor
    constructor(...params)
    {
        this.id =params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getters and setters
    get name(){ return this._name}
    set name(name){ this._name = name}

    //method
    toString()
    {
        const options = {year : 'numeric', month : 'long' , day : 'numeric'}
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us",options);
        return `id = ${this.id} name = ${this.name} salary = ${this.salary} gender ${this.gender} startDate ${empDate}`
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000)
console.log(employeePayrollData.toString());
employeePayrollData.name = "john"
console.log(employeePayrollData.toString());
let newemployeePayrollData = new EmployeePayrollData(1,"Teresa",30000,'F',new Date())
console.log(newemployeePayrollData.toString());