

export class Server {
    public type?: string;
    public address?: string;
    public constructor() { 
    }
    public withType(type: string): Server {
        this['type'] = type;
        return this;
    }
    public withAddress(address: string): Server {
        this['address'] = address;
        return this;
    }
}