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

while ( totalEmpHours < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++
    let empCheck = Math.floor(Math.random()*10) % 3
    let empHours = getWorkingHours(empCheck)
    totalEmpHours += empHours
    empDailyWageArray.push(calculateWage(empHours))
}

let totalempWage = 0
function sum(dailyWage)
{
    totalempWage += dailyWage
}

//7a - using foreach 
empDailyWageArray.forEach(sum);
console.log("Total days " +totalWorkingDays+ " Total hours "+totalEmpHours+" Employee Wage "+totalempWage)

//7a - using reduce
function totalWage(totalWage,dailyWage)
{
    return totalWage += dailyWage
}
console.log("Total days " +totalWorkingDays+ " Total hours "+totalEmpHours+" Employee Wage "+empDailyWageArray.reduce(totalWage,0))

//7b-show day along daily wage using array map helper  function.
let dailyCntr = 0
function mapWithDay(dailyWage)
{
    dailyCntr++
    return dailyCntr+" = "+dailyWage
}
let mapWithDailyWage = empDailyWageArray.map(mapWithDay)
console.log("Daily Wage Map")
console.log(mapWithDailyWage)

//7c - Show days when full time wage of 160 is earned.
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160")
}
let fullDayWageArr = mapWithDailyWage.filter(fullTimeWage);
console.log("Daily Wage Filter With Full Time");
console.log(fullDayWageArr)

//7d - Find first occurence of full time wage using find dunction
function findFullTimeWage(dailyWage)
{
    return dailyWage.includes("160")
}
console.log("The first time employee worked full time: "+mapWithDailyWage.find(findFullTimeWage))

//7e - check if every element of full time wage is truly holding full time wage
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160")
}
console.log("Check all element have full time wage : " + fullDayWageArr.every(isAllFullTimeWage));

//7f - check if there is any part time wage
function isAnypartTime(dailyWage)
{
    return dailyWage.includes("80")
}
console.log("Check any part time wage: "+mapWithDailyWage.some(isAnypartTime));

//7g - Find number of days employee work
function totalDaysWorked(numberOfDays,dailyWage)
{
    if (dailyWage>0) {
        return numberOfDays+1
    }
    return numberOfDays
}
console.log("Number of days employee worked: " +empDailyWageArray.reduce(totalDaysWorked,0));