// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// 1. maleCount using filter
function maleCount(customers) {
    return customers.filter(customer => customer.gender === 'male').length;
  }
  
  // 2. femaleCount using reduce
  function femaleCount(customers) {
    return customers.reduce((count, customer) => {
      return customer.gender === 'female' ? count + 1 : count;
    }, 0);
  }
  var oldestCustomer = function(array){
    const oldest = _.reduce(array, function(acc, current){
     
        if (current.age > acc.age) {
            return current
        } else {
            return acc
        }
        
    }, array[0]);
  
    return oldest.name
  
 }
  
 var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, current){
        if (current.age < acc.age){
            return current
        } else {
            return acc
        }
    }, array[0]);
  
    return youngest.name
 }
 function averageBalance(customers) {
    const totalBalance = customers.reduce((sum, customer) => {
      const balanceNumber = parseFloat(customer.balance.replace(/[$,]/g, ''));
      return sum + balanceNumber;
    }, 0);
  
    return totalBalance / customers.length;
  }
  
 var firstLetterCount = function(array, letter) {
    const sameStart = _.filter(array, function(customer) {
        if (customer.name[0].toUpperCase() === letter.toUpperCase()) {
            return customer
        }
    }); return sameStart.length
 }

 function friendFirstLetterCount(customers, customer, letter) {
    const target = customers.find(c => c.name === customer);
    if (!target || !target.friends) return 0;
      return target.friends.filter(friend => friend.name[0].toLowerCase() === letter.toLowerCase()).length;
  }
  function friendsCount(customers, name) {
    return customers
      .filter(customer => customer.friends.some(friend => friend.name === name))
      .map(customer => customer.name);
  }

  function topThreeTags(customers) {
    const allTags = customers.flatMap(customer => customer.tags);
  

    const tagCounts = allTags.reduce((counts, tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
      return counts;
    }, {});
  
    
    return Object.entries(tagCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([tag]) => tag);
  }

function genderCount(customers) {
    return customers.reduce((summary, customer) => {
      summary[customer.gender] = (summary[customer.gender] || 0) + 1;
      return summary;
    }, {});
  }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
