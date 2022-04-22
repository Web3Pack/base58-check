[![CodeQL](https://github.com/Web3Pack/base58-check/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Web3Pack/base58-check/actions/workflows/codeql-analysis.yml)
[![Node.js Package](https://github.com/Web3Pack/base58-check/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Web3Pack/base58-check/actions/workflows/npm-publish.yml)

# base58-check encoding and decoding

A simple base58-check encoding library for Node.js and the browser implemented in TypeScript with minimal dependencies.

## Example

```ts
import { encode, decode } from '@web3pack/base58-check';

const message = Buffer.from('hello world');

const encodedText = encode(message);
// => '3vQB7B6MrGQZaxCuFg4oh'

const decodedText = decode(encodedText).toString();
// => 'hello world'
```
