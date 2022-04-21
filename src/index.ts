import { Buffer } from 'buffer';
import { sha256 } from 'hash.js';
import { base58 } from '@web3pack/base-x';

const base58Converter = base58();

const hash = (buffer: Buffer): Buffer => {
    const hex = buffer.toString('hex');
    const result = sha256().update(hex, 'hex').digest();
    return Buffer.from(result);
};

const makeChecksum = (buffer: Buffer) => hash(hash(buffer));

// Encode a buffer as a base58-check encoded string
export const encode = (payload: Buffer): string => {
    const checksum = makeChecksum(payload);

    return base58Converter.encode(
        Buffer.concat([payload, checksum], payload.length + 4)
    );
};

export const decode = (input: string): Buffer | never => {
    // decode input using base58
    const uint8 = base58Converter.decode(input);
    const buffer = Buffer.from(uint8);

    const payload = buffer.slice(0, -4);
    const checksum = buffer.slice(-4);
    const newChecksum = makeChecksum(payload);

    if (
        (checksum[0] ^ newChecksum[0]) |
        (checksum[1] ^ newChecksum[1]) |
        (checksum[2] ^ newChecksum[2]) |
        (checksum[3] ^ newChecksum[3])
    )
        throw new Error('Invalid checksum');

    return payload;
};
