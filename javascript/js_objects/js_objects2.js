/* Challenge 2
   Print out the below object to match the example.
   Output should look like this:

EMPLOYEES
1 - JONES, MIGUEL - 11
2 - BERTSON, ERNIE - 12
3 - LU, NORA - 6
4 - BARKYOUMB, SALLY - 14
MANAGERS
1 - CHAMBERS, LILLIAN - 15
2 - POE, GORDON - 9
*/

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(let user in users){
   console.log(user.toUpperCase());
   for(let i=0; i< users[user].length; i++){
     let full_name_length = users[user][i].last_name.length + users[user][i].first_name.length;
     console.log(`${i+1} - ${users[user][i].last_name.toUpperCase()}, ${users[user][i].first_name.toUpperCase()} - ${full_name_length} `);
   }
 }
