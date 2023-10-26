

export class ApplicationNameRule {
    public nameType?: string;
    public args?: Array<string>;
    public value?: Array<string>;
    public constructor(nameType?: string, args?: Array<string>) { 
        this['nameType'] = nameType;
        this['args'] = args;
    }
    public withNameType(nameType: string): ApplicationNameRule {
        this['nameType'] = nameType;
        return this;
    }
    public withArgs(args: Array<string>): ApplicationNameRule {
        this['args'] = args;
        return this;
    }
    public withValue(value: Array<string>): ApplicationNameRule {
        this['value'] = value;
        return this;
    }
}