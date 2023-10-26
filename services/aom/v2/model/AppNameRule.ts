

export class AppNameRule {
    public nameType?: string;
    public args?: Array<string>;
    public value?: Array<string>;
    public constructor(nameType?: string, args?: Array<string>) { 
        this['nameType'] = nameType;
        this['args'] = args;
    }
    public withNameType(nameType: string): AppNameRule {
        this['nameType'] = nameType;
        return this;
    }
    public withArgs(args: Array<string>): AppNameRule {
        this['args'] = args;
        return this;
    }
    public withValue(value: Array<string>): AppNameRule {
        this['value'] = value;
        return this;
    }
}