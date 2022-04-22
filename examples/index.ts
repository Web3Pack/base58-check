import { encode, decode } from '../src';

const message = Buffer.from('hello world');

const encodedText = encode(message);
// => '3vQB7B6MrGQZaxCuFg4oh'

const decodedText = decode(encodedText).toString();
// => 'hello world'