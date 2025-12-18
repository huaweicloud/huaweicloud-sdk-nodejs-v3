

export class PublicAccess {
    public cidrs?: Array<string>;
    public constructor() { 
    }
    public withCidrs(cidrs: Array<string>): PublicAccess {
        this['cidrs'] = cidrs;
        return this;
    }
}