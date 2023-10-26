

export class LogPathRule {
    public args?: Array<string>;
    public nameType?: string;
    public value?: Array<string>;
    public constructor(args?: Array<string>, nameType?: string, value?: Array<string>) { 
        this['args'] = args;
        this['nameType'] = nameType;
        this['value'] = value;
    }
    public withArgs(args: Array<string>): LogPathRule {
        this['args'] = args;
        return this;
    }
    public withNameType(nameType: string): LogPathRule {
        this['nameType'] = nameType;
        return this;
    }
    public withValue(value: Array<string>): LogPathRule {
        this['value'] = value;
        return this;
    }
}