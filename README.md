## SolidityDEX from Ethereum 201 moralis academy course

In this repository you can find:


-> A simple mock token contract (ERC20) used to interact with the DEX

-> A DEX wallet contract to handle swaps between pairs (Each pair needs a wallet)

-> A DEX contract using orderbook model, where the user can trade tokens (in this case "Link"/ETH) using a market or limit order

-> The javascript tests, assuring that the contracts are working as they should.


To run this code you need:

-> Clone this repository

-> Install dependencies

``` npm i ```

-> Inicialize Truffle

``` truffle init ```

-> Compile and Migrate the contracts on your local machine

``` truffle compile ```
``` truffle migrate ```

-> Run the tests

``` truffle test ```

-> Or interact with the contracts
