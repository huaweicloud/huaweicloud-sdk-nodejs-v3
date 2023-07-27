

export class ChangeBaremetalNameServer {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ChangeBaremetalNameServer {
        this['name'] = name;
        return this;
    }
}