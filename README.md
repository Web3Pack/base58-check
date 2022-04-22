[![CodeQL](https://github.com/Web3Pack/base58-check/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Web3Pack/base58-check/actions/workflows/codeql-analysis.yml)
[![Node.js Package](https://github.com/Web3Pack/base58-check/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Web3Pack/base58-check/actions/workflows/npm-publish.yml)

# Base58-check encoding library

A modern base58-check encoding library implemented in TypeScript with minimal dependencies for use in browser and Node.js.

## Example

```ts
import { encode, decode } from '@web3pack/base58-check';

const message = Buffer.from('hello world');

const encodedText = encode(message);
// => '3vQB7B6MrGQZaxCuFg4oh'

const decodedText = decode(encodedText).toString();
// => 'hello world'
```
