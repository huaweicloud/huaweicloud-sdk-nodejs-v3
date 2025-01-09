

export class Vpc {
    public id?: string;
    public name?: string;
    public cidr?: string;
    public constructor() { 
    }
    public withId(id: string): Vpc {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Vpc {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): Vpc {
        this['cidr'] = cidr;
        return this;
    }
}