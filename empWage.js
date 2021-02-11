
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

function getWorkingHours(empCheck) {
       switch (empCheck) {
       	        case IS_PART_TIME:
               	        return PART_TIME_HOURS;
                       	break;
               	case IS_FULL_TIME:
                       	return FULL_TIME_HOURS;
                       	break;
               	default:
               	        return 0;
        }
}

function calcDailyWage(empHrs) {
	return empHrs*WAGE_PER_HOUR;
}

const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() *10) %3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs += empHrs;
	empDailyWageArr.push(calcDailyWage(empHrs));
	empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
	empDailyHrsMap.set(totalWorkingDays, empHrs);
}
console.log(empDailyWageMap);

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 -Total Days: "+totalWorkingDays+" Total Hours: "+totalEmpHrs +" Emp Wage: "+empWage);

//Array Helper Functions
//UC 7A-Calc total Wage using Array For Each  traversal or reduce method

let totEmpWage = 0;
function sum(dailyWage) {
	totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " +totalWorkingDays + "Total Hours: " +totalEmpHrs + "Emp Wage: " + totEmpWage);


function totalWages(totalWage, dailyWage) {
	return totalWage + dailyWage;
}
console.log("UC7A - EMP Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC-7B - Show the day along with Daily WAge Using Array map Helper Function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
	dailyCntr++;
	return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B- Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show days when full time wage of 160 were earned
function fulltimeWage(dailyWage) {
	return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7c - Daily Wage Filter When Full Time Wage Earned");
console.log(fullDayWageArr);

//UC7D - Find the first occurence when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
	return dailyWage.includes("160");
}
console.log("UC 7D - First time FullTime wage was earned on Day: " + mapDayWithWageArr.find(findFullTimeWage));

//UC7E - Check if every element of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage) {
	return dailyWage.includes("160");
}
console.log("UC 7E - Check All Element have full time wage: " + fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
	return dailyWage.includes("80");
}
console.log("UC 7F - Check if any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee worked
function totalDaysWorked(numOfDays, dailyWage)  {
	if (dailyWage > 0)
	return numOfDays+1;
	return numOfDays;
}
console.log("UC 7G - Number of Days Employee Worked: "+ empDailyWageArr.reduce(totalDaysWorked, 0));


//UC-8 Using map to store Day Wise Wage
console.log("UC8 - Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//UC9-Arraow Function
const findTotal = (totalVal, dailyVal) => {
	return totalVal + dailyVal;
}
let totalHours =  Array.from(empDailyHrsMap.values())
		 .filter(dailyHours => dailyHours>0)
		 .reduce(findTotal, 0);
let totalSalary = empDailyWageArr
		  .filter(dailyWage => dailyWage > 0)
		  .reduce(findTotal, 0);
console.log("UC9A - Emp Wage with Arrow: "+" Total Hours: "+totalHours +" Total Wages " +totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key) => {
	if(value == 8) fullWorkingDays.push(key);
	else if(value == 4) partWorkingDays.push(key);
	else nonWorkingDays.push(key);
});
console.log("Full Working Days: " +fullWorkingDays);
console.log("Part Working Days: " +partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);

