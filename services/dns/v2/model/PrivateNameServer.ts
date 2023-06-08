

export class PrivateNameServer {
    public priority?: number;
    public address?: string;
    public constructor() { 
    }
    public withPriority(priority: number): PrivateNameServer {
        this['priority'] = priority;
        return this;
    }
    public withAddress(address: string): PrivateNameServer {
        this['address'] = address;
        return this;
    }
}