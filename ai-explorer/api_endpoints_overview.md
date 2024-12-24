# **API Endpoints Overview**

The main base API endpoint to get the educhain blockchain data is: `https://edu-chain-testnet.blockscout.com/api/v2`.

| **Endpoint Name**                                           | **HTTP Method** | **Full Endpoint URL**                                                     | **Parameters**                                                     | **Description**                                                                                          |
|-------------------------------------------------------------|-----------------|---------------------------------------------------------------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| **/search**                                                 | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/search`                   | `q`(string query)                                                               | Perform a general search.                                                                                 |
| **/search/check-redirect**                                  | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/search/check-redirect`    | `q`(string query)                                                               | Check if a search URL should be redirected.                                                              |
| **/transactions**                                           | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/transactions`             | `filter`, `type`, `method` (string query)                                                               | Retrieve a list of transactions.                                                                          |
| **/blocks**                                                 | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/blocks`                   | `type`(string query)                                                               | Retrieve a list of blocks.                                                                                |
| **/main-page/transactions**                                 | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/main-page/transactions`   | None                                                               | Fetch transactions for the main page.                                                                     |
| **/main-page/blocks**                                       | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/main-page/blocks`         | None                                                               | Fetch blocks for the main page.                                                                           |
| **/main-page/indexing-status**                              | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/main-page/indexing-status` | None                                                               | Retrieve the indexing status of the chain.                                                                |
| **/stats**                                                  | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/stats`                    | None                                                               | Retrieve various statistical counters related to the blockchain.                                           |
| **/stats/charts/transactions**                              | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/stats/charts/transactions` | None                                                               | Retrieve a chart displaying transaction statistics.                                                       |
| **/stats/charts/market**                                    | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/stats/charts/market`      | None                                                               | Retrieve a chart displaying market-related statistics.                                                    |
| **/transactions/{transaction_hash}**                        | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/transactions/{transaction_hash}` | `transaction_hash` (string path)                                         | Retrieve details of a specific transaction.                                                                |
| **/transactions/{transaction_hash}/token-transfers**         | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/transactions/{transaction_hash}/token-transfers` | `transaction_hash` (string path), `type` (string query)                                         | Retrieve token transfers associated with a specific transaction.                                           |
| **/transactions/{transaction_hash}/internal-transactions**   | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/transactions/{transaction_hash}/internal-transactions` | `transaction_hash` (string path)                                         | Retrieve internal transactions related to a specific transaction.                                         |
| **/transactions/{transaction_hash}/logs**                   | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/transactions/{transaction_hash}/logs` | `transaction_hash` (string path)                                         | Retrieve logs related to a specific transaction.                                                           |
| **/transactions/{transaction_hash}/raw-trace**              | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/transactions/{transaction_hash}/raw-trace` | `transaction_hash` (string path)                                         | Retrieve the raw trace of a specific transaction.                                                         |
| **/transactions/{transaction_hash}/state-changes**          | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/transactions/{transaction_hash}/state-changes` | `transaction_hash` (string path)                                         | Retrieve state changes related to a specific transaction.                                                 |
| **/transactions/{transaction_hash}/**summary****                | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/transactions/{transaction_hash}/summary` | `transaction_hash` (string path)                                         | Provide a human-readable summary of a specific transaction.                                               |
| **/blocks/{block_number_or_hash}**                          | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/blocks/{block_number_or_hash}` | `block_number_or_hash` (string path)                                     | Retrieve details of a specific block based on block number or hash.                                         |
| **/blocks/{block_number_or_hash}/transactions**             | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/blocks/{block_number_or_hash}/transactions` | `block_number_or_hash` (string path)                                     | Retrieve transactions within a specific block.                                                             |
| **/blocks/{block_number_or_hash}/withdrawals**              | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/blocks/{block_number_or_hash}/withdrawals` | `block_number_or_hash` (string path)                                     | Retrieve withdrawal transactions within a specific block.                                                 |
| **/addresses**                                              | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses`                 | None                                                               | Retrieve a list of native coin holders.                                                                   |
| **/addresses/{address_hash}**                               | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}`  | `address_hash` (string path)                                            | Retrieve details for a specific address.                                                                  |
| **/addresses/{address_hash}/counters**                      | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/counters` | `address_hash` (string path)                                            | Retrieve counters for a specific address.                                                                 |
| **/addresses/{address_hash}/transactions**                  | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/transactions` | `address_hash` (string path), `filter`, (string query)                                            | Retrieve transactions associated with a specific address.                                                 |
| **/addresses/{address_hash}/token-transfers**               | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/token-transfers` | `address_hash` (string path), `type`, `filter`, `token` (string query)                                            | Retrieve token transfers associated with a specific address.                                              |
| **/addresses/{address_hash}/internal-transactions**         | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/internal-transactions` | `address_hash` (string path), `filter` (string query)                                            | Retrieve internal transactions associated with a specific address.                                        |
| **/addresses/{address_hash}/logs**                          | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/logs` | `address_hash` (string path)                                            | Retrieve logs associated with a specific address.                                                         |
| **/addresses/{address_hash}/blocks-validated**              | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/blocks-validated` | `address_hash` (string path)                                            | Retrieve blocks validated by a specific address.                                                          |
| **/addresses/{address_hash}/token-balances**                | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/token-balances` | `address_hash` (string path)                                            | Retrieve all token balances for a specific address.                                                      |
| **/addresses/{address_hash}/tokens**                        | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/tokens` | `address_hash` (string path), `type` (string query)                                            | Retrieve token balances with filtering and pagination for a specific address.                            |
| **/addresses/{address_hash}/coin-balance-history**          | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/coin-balance-history` | `address_hash` (string path)                                            | Retrieve the coin balance history of a specific address.                                                  |
| **/addresses/{address_hash}/coin-balance-history-by-day**   | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/coin-balance-history-by-day` | `address_hash` (string path)                                            | Retrieve the daily coin balance history of a specific address.                                           |
| **/addresses/{address_hash}/withdrawals**                   | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/withdrawals` | `address_hash` (string path)                                            | Retrieve withdrawal transactions for a specific address.                                                  |
| **/addresses/{address_hash}/nft**                           | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/nft` | `address_hash`, `type` (string path)                                            | Retrieve the list of NFTs owned by a specific address.                                                   |
| **/addresses/{address_hash}/nft/collections**               | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/addresses/{address_hash}/nft/collections` | `address_hash` (string path), `type` (string query)                                            | Retrieve a list of NFTs owned by a specific address, grouped by collection.                              |
| **/tokens**                                                 | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens`                    | `q`, `type` (string query)                                                               | Retrieve a list of tokens available on the blockchain.                                                   |
| **/tokens/{address_hash}**                                  | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}`     | `address_hash` (string path)                                            | Retrieve details of a specific token using its address.                                                  |
| **/tokens/{address_hash}/transfers**                        | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/transfers` | `address_hash` (string path)                                            | Retrieve the list of token transfers for a specific token.                                               |
| **/tokens/{address_hash}/holders**                          | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/holders` | `address_hash` (string path)                                            | Retrieve a list of holders for a specific token.                                                          |
| **/tokens/{address_hash}/counters**                         | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/counters` | `address_hash` (string path)                                            | Retrieve the counter for token holders for a specific token.                                             |
| **/tokens/{address_hash}/instances**                        | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/instances` | `address_hash` (string path)                                            | Retrieve instances of a specific NFT token.                                                              |
| **/tokens/{address_hash}/instances/{id}**                   | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/instances/{id}` | `address_hash`, `id` (string path), `id` (query integer)                             | Retrieve a specific NFT instance by its ID.                                                              |
| **/tokens/{address_hash}/instances/{id}/transfers**         | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/instances/{id}/transfers` | `address_hash` (string path), `id` (query integer)                             | Retrieve transfer information for a specific NFT instance.                                               |
| **/tokens/{address_hash}/instances/{id}/holders**           | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/instances/{id}/holders` | `address_hash` (string path), `id` (query integer)                             | Retrieve a list of holders for a specific NFT instance.                                                   |
| **/tokens/{address_hash}/instances/{id}/transfers-count**   | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/instances/{id}/transfers-count` | `address_hash` (string path), `id` (query integer)                             | Retrieve the transfer count for a specific NFT instance.                                                  |
| **/tokens/{address_hash}/instances/{id}/refetch-metadata**  | PATCH           | `https://edu-chain-testnet.blockscout.com/api/v2/tokens/{address_hash}/instances/{id}/refetch-metadata` | `address_hash` (string path), `id` (query integer)                             | Re-fetches metadata for a specific NFT instance.                                                           |
| **/smart-contracts**                                        | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/smart-contracts`           | `q` (string query), `filter` (string query)                                                                | Retrieve a list of verified smart contracts.                                                              |
| **/smart-contracts/counters**                               | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/smart-contracts/counters`  | None                                                               | Retrieve counters for verified smart contracts.                                                           |
| **/smart-contracts/{address_hash}**                         | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/smart-contracts/{address_hash}` | `address_hash` (string path)                                            | Retrieve details of a specific smart contract by address.                                                 |
| **/smart-contracts/{address_hash}/methods-read**            | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/smart-contracts/{address_hash}/methods-read` | `address_hash` (string path), `is_custom_abi` (string path), `from` (string query)                                            | Retrieve read methods for a specific smart contract.                                                      |
| **/smart-contracts/{address_hash}/methods-read-proxy**       | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/smart-contracts/{address_hash}/methods-read-proxy` | `address_hash` (string path), `is_custom_abi` (string path), `from` (string query)                                             | Retrieve read methods through a proxy for a specific smart contract.                                      |
| **/smart-contracts/{address_hash}/methods-write**           | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/smart-contracts/{address_hash}/methods-write` | `address_hash` (string path), `is_custom_abi` (string query)                                            | Retrieve write methods for a specific smart contract.                                                     |
| **/smart-contracts/{address_hash}/methods-write-proxy**      | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/smart-contracts/{address_hash}/methods-write-proxy` | `address_hash` (string path), `is_custom_abi` (string query)                                             | Retrieve write methods through a proxy for a specific smart contract.                                     |
| **/smart-contracts/{address_hash}/query-read-method**       | POST            | `https://edu-chain-testnet.blockscout.com/api/v2/smart-contracts/{address_hash}/query-read-method` | `address_hash` (string path)                           | Execute a query to read a specific method from a smart contract.                                           |
| **/config/json-rpc-url**                                    | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/config/json-rpc-url`      | None                                                               | Retrieve the JSON-RPC URL used for interacting with the blockchain.                                       |
| **/withdrawals**                                            | GET             | `https://edu-chain-testnet.blockscout.com/api/v2/withdrawals`               | None                                                               | Retrieve a list of withdrawals.                                                                           |