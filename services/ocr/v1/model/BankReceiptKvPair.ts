

export class BankReceiptKvPair {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): BankReceiptKvPair {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): BankReceiptKvPair {
        this['value'] = value;
        return this;
    }
}