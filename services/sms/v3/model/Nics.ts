

export class Nics {
    public id?: string;
    public name?: string;
    public cidr?: string;
    public ip?: string;
    public constructor(id?: string, name?: string, cidr?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['cidr'] = cidr;
    }
    public withId(id: string): Nics {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Nics {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): Nics {
        this['cidr'] = cidr;
        return this;
    }
    public withIp(ip: string): Nics {
        this['ip'] = ip;
        return this;
    }
}