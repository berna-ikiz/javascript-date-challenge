function calculateAge(date) {
    const now = new Date();
    const birthdate = new Date(date);
    if(isNaN(birthdate.getTime()) || now.getTime() < birthdate.getTime()){
        return 'invalid date';
    }
    const age = now.getFullYear() - birthdate.getFullYear();
    const monthDiff = now.getMonth() - birthdate.getMonth();
    if(monthDiff < 0 ||(monthDiff===0 && now.getDate() <birthdate.getDate())){
       return age - 1;
    }      
    return age;
  }
  
  console.log(calculateAge("1990-06-15"));
  console.log(calculateAge("1996-11-22"));
  console.log(calculateAge("2002-06-24"));
  console.log(calculateAge("2028-22-11"));
  console.log(calculateAge("2028-11-22"))