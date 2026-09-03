

export class ProcessSummary {
    public key?: string;
    public value?: number;
    public constructor() { 
    }
    public withKey(key: string): ProcessSummary {
        this['key'] = key;
        return this;
    }
    public withValue(value: number): ProcessSummary {
        this['value'] = value;
        return this;
    }
}