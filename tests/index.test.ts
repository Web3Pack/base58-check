import { encode, decode } from './../src';
import fixtures from './fixtures.json';
import { Buffer } from 'buffer';

fixtures.valid.forEach((f) => {
    test(`'encodes ${f.string}`, () => {
        const actual = encode(Buffer.from(f.payload, 'hex'));
        expect(actual).toBe(f.string);
    });
});

fixtures.valid.forEach((f) => {
    test(`decodes ${f.string}`, () => {
        const actual = decode(f.string).toString('hex');
        expect(actual).toBe(f.payload);
    });
});

fixtures.invalid.forEach((f) => {
    test(`decode throws on ${f.string}`, () => {
        expect(() => decode(f.string)).toThrow(new RegExp(f.exception));
    });
});
