

export class PgProcessSummary {
    public key?: string;
    public value?: number;
    public constructor() { 
    }
    public withKey(key: string): PgProcessSummary {
        this['key'] = key;
        return this;
    }
    public withValue(value: number): PgProcessSummary {
        this['value'] = value;
        return this;
    }
}