// Challenge 1
// Print all of the students and their cohort.

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let i=0; i<students.length; i++){
  // Use backticks and template literals to easily mix text (including the
  // comma between student name and the word Cohort)
  console.log(`Name: ${students[i].name}, Cohort: ${students[i].cohort}`)
}
