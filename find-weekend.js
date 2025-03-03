function isWeekend(date) {
    const now = new Date();
    const dateValue = new Date(date);
    if(isNaN(dateValue.getTime())){
        return 'invalid date';
    }
    const day = dateValue.getDay();
    if(day === 0 || day ===6){
        return true;
    }
    return false;
  }
  
  console.log(isWeekend("2020-01-18")); 
  console.log(isWeekend("2000-11-13"));
  console.log(isWeekend("2028-11-18"));
  