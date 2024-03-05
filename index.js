const cryptoFacts = [
    "The first cryptocurrency, Bitcoin, was created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto.",
    "Ethereum, the second-largest cryptocurrency by market capitalization, introduced the concept of smart contracts.",
    "There are thousands of different cryptocurrencies available, each with its unique features and use cases.",
    "The total supply of Bitcoin is capped at 21 million coins, making it a deflationary asset.",
    "Cryptocurrencies use decentralized technology based on blockchain to provide security and transparency.",
    "The term 'HODL' originated from a misspelled word 'hold' in a Bitcoin forum post, and it has become a popular term in the crypto community.",
    "Cryptocurrencies are often classified as either 'proof-of-work' or 'proof-of-stake' based on their consensus mechanisms.",
    "The first recorded commercial transaction using Bitcoin was the purchase of two pizzas for 10,000 BTC in 2010.",
    "Altcoins refer to alternative cryptocurrencies other than Bitcoin, such as Ethereum, Litecoin, and Ripple.",
  ];
  
  function getRandomCryptoFact() {
    const randomIndex = Math.floor(Math.random() * cryptoFacts.length);
    return cryptoFacts[randomIndex];
  }
  
  console.log(getRandomCryptoFact());
  