import { sha256 } from 'hash.js';
import { base58 } from '@web3pack/base-x';

type BufferLike = Uint8Array | number[];

const hash = (buffer: BufferLike): BufferLike =>
    sha256().update(buffer).digest();

const hashX2 = (buffer: BufferLike) => hash(hash(buffer));

const base58Converter = base58();

export const encode = (input: Uint8Array): string =>
    base58Converter.encode(input);

export const decode = (input: string): Uint8Array =>
    base58Converter.decode(input);
