const peoples = [
  { name: 'Ratan Tata', year: 1937, currentYear: '2022', profession: 'industrialist' },
  { name: 'M.S.Dhoni', year: 1981, currentYear: '2022', profession: 'cricketer' },
  { name: 'Johnny Depp', year: 1963, currentYear: '2022', profession: 'actor' },
  { name: 'Keanu Reeves', year: 1964, currentYear: '2022', profession: 'actor' },
  { name: 'Narayan Murthy', year: 1946, currentYear: '2022', profession: 'businessman' },
]


//Array.prototype.filter()
//we will filter the peoples according to the required sense.
const sixteens = peoples.filter((people) => people.year >= 1930 && people.year <= 1960);
console.table(sixteens);


//Array.prototype.map()
//we will map for a given one and get the people's info.
const combined = peoples.map((people) => `${people.name}-${people.age}`)
console.log(combined);


//Array.prototype.sort()
//we will sort the peoples by their year from the oldest.
const peoplesSorted = peoples.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(peoplesSorted);


//Array.prototype.reduce()
//we will be calculating no. of years one's have lived / one's age.
const calculatedAge = peoples.reduce((total, people) => {
  return total + (people.currentYear - people.year);
}, 0)
console.log(calculatedAge);


//Sorting by peoples age.
const oldest = peoples.sort((a, b) => {
  const firstP = a.curre0ntYear - a.year;
  const secondP = b.currentYear - b.year;
  (firstP > secondP) ? -1 : 1;
})
console.table(oldest);


/**
Selecting all the statements containing Sir Ratan Tata's name -
https://en.wikipedia.org/wiki/Ratan_Tata.

1) we will select the so-called mw-body for this case to access items
const cato = document.querySelector('.mw-body');

2) Then we will take over all the links and convert it to array coz of the node list
const links = Array.from(cato.querySelectorAll('a'));
console.log(links);

3)At last, we will first map the links for the text-content and then filter it for our required parameter which in our case was Sir Ratan Tata's Name.
const mapped = links.
  map((link) => link.textContent)
  .filter((textName) => textName.includes('Ratan Tata'));
  console.log(mapped);
 **/


//We will calculate the sums of data using reduce()
const data = ['shinchan', 'shinchan', 'ben10', 'ben10', 'ben10', 'doraemon', 'motu-patlu', 'roll no.-21', 'motu-patlu', 'doraemon', 'avengers', 'guardians', 'acer', 'acer', 'asus', 'hp', 'lenevo', 'amd', 'macbook']

const resultSums = data.reduce((obj, item) => {
  if (!obj[item]) obj[item] = 0;
  obj[item]++;
  return obj;
}, {})
console.log(resultSums);