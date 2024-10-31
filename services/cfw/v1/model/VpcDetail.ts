

export class VpcDetail {
    public id?: string;
    public name?: string;
    public cidr?: string;
    public constructor() { 
    }
    public withId(id: string): VpcDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpcDetail {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): VpcDetail {
        this['cidr'] = cidr;
        return this;
    }
}