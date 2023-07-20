

export class Rule {
    public type?: string;
    public param?: string;
    public constructor(type?: string, param?: string) { 
        this['type'] = type;
        this['param'] = param;
    }
    public withType(type: string): Rule {
        this['type'] = type;
        return this;
    }
    public withParam(param: string): Rule {
        this['param'] = param;
        return this;
    }
}