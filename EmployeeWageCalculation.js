const IS_PART_TIME = 1
const IS_FULL_TIME = 2
const PART_TIME_HOURS = 4
const FULL_TIME_HOURS = 8
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 20
const MAX_HRS_IN_MONTH = 160

function getWorkingHours(empCheck)
{
    switch (empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS
        case IS_FULL_TIME:
            return FULL_TIME_HOURS
        default:
            return 0
    }
}
function calculateWage(emphrs)
{
    return emphrs*WAGE_PER_HOUR
}
let totalEmpHours = 0
let totalWorkingDays = 0
let empDailyWageArray = new Array()
let empDailyHrsMap = new Map()

while ( totalEmpHours < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++
    let empCheck = Math.floor(Math.random()*10) % 3
    let empHours = getWorkingHours(empCheck)
    totalEmpHours += empHours
    empDailyHrsMap.set(totalWorkingDays,empHours)
    empDailyWageArray.push(calculateWage(empHours))
}

// total wage using arrow function
let totalEmpWage = 0
const findTotal = (totalVal,dailyVal) =>
{
    return totalVal + dailyVal
}
let totalHrs = Array.from(empDailyHrsMap.values()).reduce(findTotal,0)
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage>0).reduce(findTotal,0)
console.log("Emp Wage using Arrow: Total Hours "+totalHrs + " Total Wage "+ totalSalary)

//7b-show day along daily wage
console.log("Daily Wage Map")
console.log(empDailyHrsMap)

//7c - Show days full time wage
function fullTimeWage(dailyWage)
{
    return dailyWage == 8
}
let fullDayWageArr = Array.from(empDailyHrsMap.values()).filter(fullTimeWage);
console.log("Daily Wage Filter With Full Time");
console.log(fullDayWageArr)

//7d - Find first occurence of full time wage
function findFullTimeWage(dailyWage)
{
    return dailyWage == 8
}
let firstDay = Array.from(empDailyHrsMap.values()).findIndex(findFullTimeWage) +1
console.log("The first time employee worked full time: "+firstDay)

//7e - check every full time wage holding full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage == 8
}
console.log("Check all element have full time wage : " +fullDayWageArr.every(isAllFullTimeWage));

//7f - check if thereis any part time
function isAnypartTime(dailyWage)
{
    return dailyWage == 4
}
console.log("Check any part time wage: "+Array.from(empDailyHrsMap.values()).some(isAnypartTime));

//7g - Find number of days employee work
function totalDaysWorked(numberOfDays,dailyWage)
{
    if (dailyWage>0)
    {
        return numberOfDays+1
    }
    return numberOfDays
}
console.log("Number of days employee worked: " +Array.from(empDailyHrsMap.values()).reduce(totalDaysWorked,0));

let nonWorkingDays = new Array()
let partWorkingDays = new Array()
let fullWorkingDays = new Array()
empDailyHrsMap.forEach( (value,key,map) =>{
    if (value == 8 ) fullWorkingDays.push(key)
    else if (value == 4 ) partWorkingDays.push(key)
    else nonWorkingDays.push(key)
})
console.log("Full working days: "+fullWorkingDays);
console.log("Part working days: "+partWorkingDays);
console.log("Non working days: "+nonWorkingDays);