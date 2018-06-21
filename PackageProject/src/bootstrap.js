import moment from 'moment';

const rightNow = moment();

const birthday = moment('2001-07-10', 'YYYY-MM-DD');

const twoWeeksFromNow = moment().add(14, 'days');

const sixMonthsAgo = moment().subtract(6, 'months');



console.log(rightNow);

console.log(birthday.format('dddd'));

console.log(birthday.fromNow());

console.log(birthday.format('MMM Do YYYY'));

console.log(twoWeeksFromNow.toString());

console.log(sixMonthsAgo.toString());