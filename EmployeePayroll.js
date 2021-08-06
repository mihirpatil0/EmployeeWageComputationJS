class EmployeePayrollData
{
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
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$")
        if (nameRegex.test(name))
        {
            this._name = name
        }
        else
        {
            throw "Name is incorrect"
        }
    }
    
    get id(){ return this._id}
    set id(id)
    { 
        let idRegex = RegExp("^[1-9]{1}[0-9]{0,}$")
        if (idRegex.test(id))
        {
            this._id = id
        }
        else
        {
            throw "Id is incorrect"
        }
    }
    
    get salary(){return this._salary}
    set salary(salary)
    {
        let salaryRegex= RegExp("^[1-9]{1}[0-9]{0,}$")
        if (salaryRegex.test(salary))
        {
            this._salary = salary
        }
        else
        {
            throw "Salary is incorrect"
        }
    }
   
    
    get gender(){return this._gender}
    set gender(gender)
    {
        let genderRegex= RegExp("^[MFmf]{1}$")
        if (genderRegex.test(gender))
        {
            this._gender = gender
        }
        else
        {
            throw "Gender is incorrect"
        }
    }
    
    get startDate(){return this._startDate}
    set startDate(startDate)
    {
        if (startDate <= new Date() ) {
            this._startDate = startDate
        }
        else
        {
            throw "date  is incorrect"
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

let employeePayrollData = new EmployeePayrollData(1,"Mark",30000,'M',new Date())
console.log(employeePayrollData.toString());

let newemployeePayrollData = new EmployeePayrollData(1,"Teresa",30000,'F',new Date())
console.log(newemployeePayrollData.toString());

try
{
    employeePayrollData.name = "john" 
    console.log(employeePayrollData.toString());
}
catch (error)
{
    console.error(error);
}
try
{
    newemployeePayrollData.id = -1 //tring with incorrect id
    console.log(newemployeePayrollData.toString());
}
catch (error)
{
    console.error(error);
}

try
{
    newemployeePayrollData.salary = -300  //trying with wrong salary
    console.log(newemployeePayrollData.toString());
}
catch (error)
{
    console.error(error);
}

try
{
    newemployeePayrollData.gender = "Ma"  //trying with wrong gender
    console.log(newemployeePayrollData.toString());
}
catch (error)
{
    console.error(error);
}

try
{
    newemployeePayrollData.startDate = "2021-09-06T10:51:41.868Z"  //trying with wrong date
    console.log(newemployeePayrollData.toString());
}
catch (error)
{
    console.error(error);
}