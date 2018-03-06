let person = {
  _name: 'Lu Xun',
  _age: 137,

   set age(newAge) {
  
  if (typeof newAge === 'number') {
   this._age = newAge;
    console.log(`${newAge} is a valid input.`);
  
    } else {
    return('Invalid input');
    }
      console.log(_age);
	}
    
};



