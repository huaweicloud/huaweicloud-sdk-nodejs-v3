

export class Ipv6Bandwidth {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): Ipv6Bandwidth {
        this['id'] = id;
        return this;
    }
}