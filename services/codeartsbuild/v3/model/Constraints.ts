

export class Constraints {
    public errormsg?: string;
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withErrormsg(errormsg: string): Constraints {
        this['errormsg'] = errormsg;
        return this;
    }
    public withType(type: string): Constraints {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): Constraints {
        this['value'] = value;
        return this;
    }
}