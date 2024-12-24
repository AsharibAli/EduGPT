# User Queries

---

### **General Queries**

1. **"Show me the latest transactions on Edu Chain."**  
   - Endpoint: `/main-page/transactions`

2. **"What are the latest blocks added to the Edu Chain?"**  
   - Endpoint: `/main-page/blocks`

3. **"Give me an overview of the blockchain’s current statistics."**  
   - Endpoint: `/stats`

4. **"What’s the current indexing status of the blockchain?"**  
   - Endpoint: `/main-page/indexing-status`

5. **"Show me transaction trends over time."**  
   - Endpoint: `/stats/charts/transactions`

6. **"What’s the current market performance of the blockchain?"**  
   - Endpoint: `/stats/charts/market`

---

### **Transaction Queries**

1. **"Find details about transaction [TX_HASH]."**  
   - Endpoint: `/transactions/{transaction_hash}`

2. **"What token transfers are associated with transaction [TX_HASH]?"**  
   - Endpoint: `/transactions/{transaction_hash}/token-transfers`

3. **"What internal transactions occurred within transaction [TX_HASH]?"**  
   - Endpoint: `/transactions/{transaction_hash}/internal-transactions`

4. **"Give me a human-readable summary of transaction [TX_HASH]."**  
   - Endpoint: `/transactions/{transaction_hash}/summary`

5. **"Show me the logs of transaction [TX_HASH]."**  
   - Endpoint: `/transactions/{transaction_hash}/logs`

---

### **Block Queries**

1. **"Fetch details about block [BLOCK_NUMBER or HASH]."**  
   - Endpoint: `/blocks/{block_number_or_hash}`

2. **"List all transactions in block [BLOCK_NUMBER or HASH]."**  
   - Endpoint: `/blocks/{block_number_or_hash}/transactions`

3. **"What withdrawals were made in block [BLOCK_NUMBER or HASH]?"**  
   - Endpoint: `/blocks/{block_number_or_hash}/withdrawals`

---

### **Address Queries**

1. **"Get details about address [ADDRESS_HASH]."**  
   - Endpoint: `/addresses/{address_hash}`

2. **"Show the token balances for address [ADDRESS_HASH]."**  
   - Endpoint: `/addresses/{address_hash}/token-balances`

3. **"What transactions are associated with address [ADDRESS_HASH]?"**  
   - Endpoint: `/addresses/{address_hash}/transactions`

4. **"List the NFTs owned by address [ADDRESS_HASH]."**  
   - Endpoint: `/addresses/{address_hash}/nft`

5. **"Show the coin balance history of address [ADDRESS_HASH]."**  
   - Endpoint: `/addresses/{address_hash}/coin-balance-history`

6. **"Which blocks were validated by address [ADDRESS_HASH]?"**  
   - Endpoint: `/addresses/{address_hash}/blocks-validated`

---

### **Token Queries**

1. **"List all tokens available on Edu Chain."**  
   - Endpoint: `/tokens`

2. **"Get details about token [TOKEN_ADDRESS]."**  
   - Endpoint: `/tokens/{address_hash}`

3. **"Who are the holders of token [TOKEN_ADDRESS]?"**  
   - Endpoint: `/tokens/{address_hash}/holders`

4. **"Show the transfer history for token [TOKEN_ADDRESS]."**  
   - Endpoint: `/tokens/{address_hash}/transfers`

---

### **Smart Contract Queries**

1. **"List all verified smart contracts on the blockchain."**  
   - Endpoint: `/smart-contracts`

2. **"Show details of the smart contract at address [CONTRACT_ADDRESS]."**  
   - Endpoint: `/smart-contracts/{address_hash}`

3. **"What read methods are available for smart contract [CONTRACT_ADDRESS]?"**  
   - Endpoint: `/smart-contracts/{address_hash}/methods-read`

4. **"What write methods can I use on smart contract [CONTRACT_ADDRESS]?"**  
   - Endpoint: `/smart-contracts/{address_hash}/methods-write`

5. **"Execute the read method [METHOD_NAME] on smart contract [CONTRACT_ADDRESS]."**  
   - Endpoint: `/smart-contracts/{address_hash}/query-read-method`

---

### **NFT Queries**

1. **"Show me the details of NFT [ID] from token [TOKEN_ADDRESS]."**  
   - Endpoint: `/tokens/{address_hash}/instances/{id}`

2. **"List transfers for NFT [ID] of token [TOKEN_ADDRESS]."**  
   - Endpoint: `/tokens/{address_hash}/instances/{id}/transfers`

3. **"Who currently holds NFT [ID] of token [TOKEN_ADDRESS]?"**  
   - Endpoint: `/tokens/{address_hash}/instances/{id}/holders`

---

### **Search Queries**

1. **"Search the blockchain for [QUERY]."**  
   - Endpoint: `/search`

2. **"Redirect me to the detailed page for [QUERY]."**  
   - Endpoint: `/search/check-redirect`

---

### **Additional Edge Cases**

1. **"What’s the JSON-RPC URL for blockchain interactions?"**  
   - Endpoint: `/config/json-rpc-url`

2. **"Show me all withdrawal transactions on the blockchain."**  
   - Endpoint: `/withdrawals`
