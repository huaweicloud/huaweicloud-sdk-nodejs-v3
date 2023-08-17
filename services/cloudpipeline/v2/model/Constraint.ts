

export class Constraint {
    public type?: string;
    public value?: string;
    public errormsg?: string;
    public constructor(type?: string, value?: string, errormsg?: string) { 
        this['type'] = type;
        this['value'] = value;
        this['errormsg'] = errormsg;
    }
    public withType(type: string): Constraint {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): Constraint {
        this['value'] = value;
        return this;
    }
    public withErrormsg(errormsg: string): Constraint {
        this['errormsg'] = errormsg;
        return this;
    }
}