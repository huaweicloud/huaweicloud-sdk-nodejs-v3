

export class VpcObject {
    public id: string;
    public name: string;
    public cidr?: string;
    public constructor(id?: any, name?: any) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): VpcObject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpcObject {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): VpcObject {
        this['cidr'] = cidr;
        return this;
    }
}