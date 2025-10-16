

export class RecordInfo {
    public host?: string;
    public value?: string;
    public constructor() { 
    }
    public withHost(host: string): RecordInfo {
        this['host'] = host;
        return this;
    }
    public withValue(value: string): RecordInfo {
        this['value'] = value;
        return this;
    }
}