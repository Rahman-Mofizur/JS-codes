function leapYear(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    console.log(year + " is a leap year");
  } else if (year % 400 == 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " not is a leap year");
  }
}

leapYear(1600);
leapYear(1700);
leapYear(1800);
leapYear(1900);
leapYear(2000);