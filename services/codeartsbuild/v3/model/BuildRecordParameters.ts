

export class BuildRecordParameters {
    public name?: string;
    public secret?: boolean;
    public value?: string;
    public type?: string;
    public constructor() { 
    }
    public withName(name: string): BuildRecordParameters {
        this['name'] = name;
        return this;
    }
    public withSecret(secret: boolean): BuildRecordParameters {
        this['secret'] = secret;
        return this;
    }
    public withValue(value: string): BuildRecordParameters {
        this['value'] = value;
        return this;
    }
    public withType(type: string): BuildRecordParameters {
        this['type'] = type;
        return this;
    }
}