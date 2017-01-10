var names = ['gi','an','jen'];
//
// names.forEach(function (name) {
//   console.log('foreach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('jen'));

var person = {
  name: 'jen',
  greet: function (){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });

  }
};

person.greet();
