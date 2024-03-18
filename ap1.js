const axios = require('axios');
async function createInvestmentAccount() {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
      name: 'Your Full Name',
      email: 'your_colle@example.com',
      rollNumber: 'Your Roll Number',
      phone: 'Your Phone Number',
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Investment Account Created:', response.data);
    return response.data.accountNumber;
  } catch (error) {
    console.error('Error Creating Investment Account:', error);
    return null;
  }
}

async function buyStocks(accountNumber, company, currentPrice, githubRepoLink) {
  try {
    const response = await axios.post('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', {
      company:'Bajaj',
      currentPrice:'1578.45',
      accountNumber:'BFHL0018658',
      githubRepoLink:'https://github.com/koya-i/BAJAJ',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'bfhl-auth': '2110991190',
      },
    });

    console.log('Stocks Bought:', response.data);
  } catch (error) {
    console.error('Error Buying Stocks:', error);
  }
}
