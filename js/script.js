console.log('hi!');
let a;
a = 12;
a++;
a *= 5;
let b = 56;
a = b - a;
console.log(a);

let name = '';
let lastName = 'Losenko';
console.log(name || lastName);
let metaD = lastName + ' ' + a;
console.log(metaD);
a *= 10;
c = metaD + ': ' + a;
console.log(c);


// ['HI', 'Alex', '!'].forEach(alert);