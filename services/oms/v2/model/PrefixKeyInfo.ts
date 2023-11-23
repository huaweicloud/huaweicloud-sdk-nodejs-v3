

export class PrefixKeyInfo {
    public keys?: Array<string>;
    public constructor(keys?: Array<string>) { 
        this['keys'] = keys;
    }
    public withKeys(keys: Array<string>): PrefixKeyInfo {
        this['keys'] = keys;
        return this;
    }
}