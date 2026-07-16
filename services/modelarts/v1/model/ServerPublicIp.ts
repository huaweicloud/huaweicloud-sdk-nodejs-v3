

export class ServerPublicIp {
    public id?: string;
    public address?: string;
    public constructor() { 
    }
    public withId(id: string): ServerPublicIp {
        this['id'] = id;
        return this;
    }
    public withAddress(address: string): ServerPublicIp {
        this['address'] = address;
        return this;
    }
}