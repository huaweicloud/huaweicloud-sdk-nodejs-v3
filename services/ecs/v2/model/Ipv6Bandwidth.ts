

export class Ipv6Bandwidth {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): Ipv6Bandwidth {
        this['id'] = id;
        return this;
    }
}