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
    set name(name)
    { 
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$")
        if (nameRegex.test(name))
        {
            this._name = name
        }
        else
        {
            throw "Name is incorrect"
        }
    }

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
try
{
    employeePayrollData.name = "john"
    console.log(employeePayrollData.toString());
}
catch (error)
{
    console.error(error);
}
let newemployeePayrollData = new EmployeePayrollData(1,"Teresa",30000,'F',new Date())
console.log(newemployeePayrollData.toString());