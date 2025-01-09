

export class DesktopSubnet {
    public id?: string;
    public name?: string;
    public cidr?: string;
    public constructor() { 
    }
    public withId(id: string): DesktopSubnet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DesktopSubnet {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): DesktopSubnet {
        this['cidr'] = cidr;
        return this;
    }
}