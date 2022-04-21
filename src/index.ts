import { base58 } from '@web3pack/base-x';

const base58Converter = base58();

export const encode = (input: Uint8Array): string =>
    base58Converter.encode(input);

export const decode = (input: string): Uint8Array =>
    base58Converter.decode(input);
