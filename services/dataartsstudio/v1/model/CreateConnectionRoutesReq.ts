

export class CreateConnectionRoutesReq {
    public name?: string;
    public cidr?: string;
    public constructor(name?: string, cidr?: string) { 
        this['name'] = name;
        this['cidr'] = cidr;
    }
    public withName(name: string): CreateConnectionRoutesReq {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): CreateConnectionRoutesReq {
        this['cidr'] = cidr;
        return this;
    }
}